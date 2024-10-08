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

#ifndef BACKENDS_EBPF_EBPFMODEL_H_
#define BACKENDS_EBPF_EBPFMODEL_H_

#include "frontends/common/model.h"
#include "frontends/p4/coreLibrary.h"
#include "ir/ir.h"
#include "lib/cstring.h"

namespace P4::EBPF {

using namespace P4::literals;

struct TableImpl_Model : public ::P4::Model::Extern_Model {
    explicit TableImpl_Model(cstring name) : Extern_Model(name), size("size"_cs) {}
    ::P4::Model::Elem size;
};

struct CounterArray_Model : public ::P4::Model::Extern_Model {
    CounterArray_Model()
        : Extern_Model("CounterArray"_cs),
          increment("increment"_cs),
          add("add"_cs),
          max_index("max_index"_cs),
          sparse("sparse"_cs) {}
    ::P4::Model::Elem increment;
    ::P4::Model::Elem add;
    ::P4::Model::Elem max_index;
    ::P4::Model::Elem sparse;
};

enum ModelArchitecture {
    EbpfFilter,
    XdpSwitch,
};

struct Xdp_Model : public ::P4::Model::Elem {
    Xdp_Model() : Elem("xdp"_cs), parser("p"_cs), switch_("s"_cs), deparser("d"_cs) {}
    ::P4::Model::Elem parser;
    ::P4::Model::Elem switch_;
    ::P4::Model::Elem deparser;
};

struct Filter_Model : public ::P4::Model::Elem {
    Filter_Model() : Elem("ebpf_filter"_cs), parser("prs"_cs), filter("filt"_cs) {}
    ::P4::Model::Elem parser;
    ::P4::Model::Elem filter;
};

/// Keep this in sync with ebpf_model.p4 and xdp_model.p4
class EBPFModel : public ::P4::Model::Model {
 protected:
    EBPFModel()
        : counterArray(),
          array_table("array_table"_cs),
          hash_table("hash_table"_cs),
          tableImplProperty("implementation"_cs),
          CPacketName("skb"_cs),
          packet("packet"_cs, P4::P4CoreLibrary::instance().packetIn, 0),
          arch(EbpfFilter),
          filter(),
          xdp(),
          counterIndexType("u32"_cs),
          counterValueType("u32"_cs) {}

 public:
    static EBPFModel instance;
    static cstring reservedPrefix;

    CounterArray_Model counterArray;
    TableImpl_Model array_table;
    TableImpl_Model hash_table;
    ::P4::Model::Elem tableImplProperty;
    ::P4::Model::Elem CPacketName;
    ::P4::Model::Param_Model packet;
    ModelArchitecture arch;
    /// Only one of these should be used, depending on arch value.
    Filter_Model filter;
    Xdp_Model xdp;

    cstring counterIndexType;
    cstring counterValueType;

    static cstring reserved(cstring name) { return reservedPrefix + name; }
};

}  // namespace P4::EBPF

#endif /* BACKENDS_EBPF_EBPFMODEL_H_ */
