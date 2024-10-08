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

#include <gtest/gtest.h>

#include <vector>

#include "frontends/p4/callGraph.h"

namespace P4::Test {

template <class T>
static void sameSet(std::unordered_set<T> &set, std::vector<T> vector) {
    EXPECT_EQ(vector.size(), set.size());
    for (T v : vector) EXPECT_NEQ(set.end(), set.find(v));
}

template <class T>
static void sameSet(std::set<T> &set, std::vector<T> vector) {
    EXPECT_EQ(vector.size(), set.size());
    for (T v : vector) EXPECT_NEQ(set.end(), set.find(v));
}

TEST(CallGraph, Acyclic) {
    P4::CallGraph<char> acyclic("acyclic");
    // a->b->c
    // \_____^

    acyclic.calls('a', 'b');
    acyclic.calls('a', 'c');
    acyclic.calls('b', 'c');

    std::vector<char> sorted;
    acyclic.sort(sorted);
    EXPECT_EQ(3u, sorted.size());
    EXPECT_EQ('c', sorted.at(0));
    EXPECT_EQ('b', sorted.at(1));
    EXPECT_EQ('a', sorted.at(2));
}

}  // namespace P4::Test
