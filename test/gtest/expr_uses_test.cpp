/*
Copyright 2017-present Barefoot Networks, Inc.

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

#include "midend/expr_uses.h"

#include <gtest/gtest.h>

#include "ir/ir.h"

using namespace P4;
using namespace P4::literals;

TEST(expr_uses, expr_uses) {
    auto obj1 = new IR::PathExpression("obj1");
    auto obj2 = new IR::PathExpression("obj2");
    auto obj1_f1 = new IR::Member(obj1, "f1");
    auto obj1_f11 = new IR::Member(obj1, "f11");
    auto obj2_f1 = new IR::Member(obj2, "f1");
    auto obj2_f11 = new IR::Member(obj2, "f11");
    auto add = new IR::Add(obj1_f1, obj2_f11);
    auto sub = new IR::Sub(obj1_f11, obj2_f1);
    auto add2 = new IR::Add(obj1_f1, obj1_f11);

    EXPECT_TRUE(exprUses(add, "obj1"_cs));
    EXPECT_TRUE(exprUses(add, "obj2"_cs));
    EXPECT_TRUE(exprUses(add, "obj1.f1"_cs));
    EXPECT_TRUE(exprUses(add, "obj1.f1[0]"_cs));
    EXPECT_FALSE(exprUses(add, "obj1.f11"_cs));
    EXPECT_FALSE(exprUses(add, "obj1.f11[1]"_cs));
    EXPECT_FALSE(exprUses(add, "obj2.f1"_cs));
    EXPECT_TRUE(exprUses(add, "obj2.f11"_cs));
    EXPECT_TRUE(exprUses(sub, "obj1"_cs));
    EXPECT_TRUE(exprUses(sub, "obj2"_cs));
    EXPECT_TRUE(exprUses(add2, "obj1.f1"_cs));
    EXPECT_TRUE(exprUses(add2, "obj1.f11"_cs));
}
