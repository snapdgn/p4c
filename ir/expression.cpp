/*
Copyright 2013-present Barefoot Networks, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

#include <ostream>

#include "absl/container/flat_hash_map.h"
#include "ir/id.h"
#include "ir/indexed_vector.h"
#include "ir/ir.h"
#include "lib/big_int_util.h"
#include "lib/error.h"
#include "lib/error_catalog.h"
#include "lib/exceptions.h"
#include "lib/log.h"

namespace P4 {

const IR::Expression *IR::Slice::make(const IR::Expression *e, unsigned lo, unsigned hi) {
    if (auto k = e->to<IR::Constant>()) {
        auto rv = ((*k >> lo) & IR::Constant((1U << (hi - lo + 1)) - 1)).clone();
        rv->type = IR::Type::Bits::get(hi - lo + 1);
        return rv;
    }
    if (auto src_width = (unsigned)e->type->width_bits()) {
        if (lo >= src_width) return new IR::Constant(IR::Type::Bits::get(hi - lo + 1), 0);
        if (hi >= src_width) hi = src_width - 1;
        if (lo == 0 && hi == src_width - 1) return e;
    }
    if (auto sl = e->to<IR::Slice>()) {
        lo += sl->getL();
        hi += sl->getL();
        BUG_CHECK(lo >= sl->getL() && hi <= sl->getH(), "MakeSlice slice on slice type mismatch");
        e = sl->e0;
    }
    return new IR::Slice(e, hi, lo);
}

int IR::Member::offset_bits() const {
    // This assumes little-endian number for bits.
    return lsb();
}

int IR::Member::lsb() const {
    int rv = 0;
    auto header_type = expr->type->checkedTo<IR::Type_StructLike>();
    auto field_iter = header_type->fields.rbegin();
    // This assumes little-endian number for bits.
    while ((*field_iter)->name != member) {
        rv += (*field_iter)->type->width_bits();
        if (++field_iter == header_type->fields.rend())
            BUG("No field %s in %s", member, expr->type);
    }
    return rv;
}

int IR::Member::msb() const {
    // This assumes little-endian number for bits.
    return lsb() + type->width_bits() - 1;
}

void IR::Constant::handleOverflow(bool noWarning) {
    if (type == nullptr) BUG("%1%: Null type in typed constant", this);
    if (type->is<IR::Type_InfInt>()) return;
    auto tb = type->to<IR::Type_Bits>();
    if (tb == nullptr) {
        BUG("%1%: Unexpected type for constant %2%", this, type);
        return;
    }

    int width = tb->size;
    big_int one = 1;
    big_int mask = Util::mask(width);

    if (tb->isSigned) {
        big_int max = (one << (width - 1)) - 1;
        big_int min = -(one << (width - 1));
        if (value < min || value > max) {
            if (!noWarning)
                ::P4::warning(ErrorType::WARN_OVERFLOW,
                              "%1%: signed value does not fit in %2% bits", this, width);
            LOG2("value=" << value << ", min=" << min << ", max=" << max << ", masked="
                          << (value & mask) << ", adj=" << ((value & mask) - (one << width)));
            value = value & mask;
            if (value > max) value -= (one << width);
        }
    } else {
        if (value < 0) {
            if (!noWarning)
                ::P4::warning(ErrorType::WARN_MISMATCH, "%1%: negative value with unsigned type",
                              this);
        } else if ((value & mask) != value) {
            if (!noWarning)
                ::P4::warning(ErrorType::WARN_MISMATCH, "%1%: value does not fit in %2% bits", this,
                              width);
        }

        value = value & mask;
        if (value < 0) BUG("Negative value after masking %1%", value);
    }
}

IR::Constant IR::Constant::operator<<(const unsigned &shift) const {
    return IR::Constant(value << shift);
}

IR::Constant IR::Constant::operator>>(const unsigned &shift) const {
    return IR::Constant(value >> shift);
}

IR::Constant IR::Constant::operator&(const IR::Constant &c) const {
    return IR::Constant(value & c.value);
}

IR::Constant IR::Constant::operator|(const IR::Constant &c) const {
    return IR::Constant(value | c.value);
}

IR::Constant IR::Constant::operator^(const IR::Constant &c) const {
    return IR::Constant(value ^ c.value);
}

IR::Constant IR::Constant::operator-(const IR::Constant &c) const {
    return IR::Constant(value - c.value);
}

IR::Constant IR::Constant::operator-() const { return IR::Constant(-value); }

IR::Constant IR::Constant::GetMask(unsigned width) {
    return (IR::Constant(1) << width) - IR::Constant(1);
}

const IR::Constant *IR::Constant::get(const IR::Type *t, big_int v, Util::SourceInfo si) {
    // Only cache bits with width lower than 16 bit to restrict the size of the cache.
    // Do not cache values with a non-empty source info (yet).
    const auto *tb = t->to<Type_Bits>();
    if (t->width_bits() > 16 || tb == nullptr || si.isValid()) {
        return new IR::Constant(si, t, v);
    }
    // Constants are interned. Keys in the intern map are pairs of types and values.
    using key_t = std::tuple<int, RTTI::TypeId, bool, big_int>;
    static absl::flat_hash_map<key_t, const Constant *, Util::Hash> CONSTANTS;

    auto *&result = CONSTANTS[{tb->width_bits(), t->typeId(), tb->isSigned, v}];
    if (result == nullptr) {
        result = new Constant(si, tb, v);
    }

    return result;
}

const IR::BoolLiteral *IR::BoolLiteral::get(bool value, const Util::SourceInfo &si) {
    // Do not cache values with a non-empty source info (yet).
    if (si.isValid()) {
        return new IR::BoolLiteral(si, IR::Type_Boolean::get(), value);
    }
    // Boolean literals are interned.
    static IR::BoolLiteral TRUE_BOOLLITERAL(si, IR::Type_Boolean::get(), true);
    static IR::BoolLiteral FALSE_BOOLLITERAL(si, IR::Type_Boolean::get(), false);
    return value ? &TRUE_BOOLLITERAL : &FALSE_BOOLLITERAL;
}

const IR::StringLiteral *IR::StringLiteral::get(cstring value, const IR::Type *t,
                                                const Util::SourceInfo &si) {
    // Do not cache values with a non-empty source info (yet).
    if (si.isValid()) {
        return new IR::StringLiteral(si, t, value);
    }
    // String literals are interned.
    using key_t = std::pair<cstring, const IR::Type *>;
    static absl::flat_hash_map<key_t, const IR::StringLiteral *, Util::Hash> STRINGS;

    auto *&result = STRINGS[{value, t}];
    if (result == nullptr) {
        result = new IR::StringLiteral(si, t, value);
    }
    return result;
}

}  // namespace P4
