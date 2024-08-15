/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "P4C", "index.html", [
    [ "P4 Compiler Documentation", "index.html", "index" ],
    [ "Repository", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html", [
      [ "Compiler source code organization", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#compiler-source-code-organization", null ],
      [ "Additional documentation", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#additional-documentation", null ],
      [ "Writing documentation", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#writing-documentation", [
        [ "Documentation Comments Style Guide", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#documentation-comments-style-guide", null ],
        [ "Git usage", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#git-usage", null ],
        [ "Debugging", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#debugging", null ],
        [ "Testing", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#testing", [
          [ "Adding new test data", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#adding-new-test-data", null ]
        ] ],
        [ "Coding conventions", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#coding-conventions", null ],
        [ "Compiler Driver", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_r_e_a_d_m_e.html#compiler-driver", null ]
      ] ]
    ] ],
    [ "P4C", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html", [
      [ "Getting started", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#getting-started", [
        [ "Installing packaged versions of P4C", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#installing-packaged-versions-of-p4c", [
          [ "Ubuntu", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#ubuntu", null ],
          [ "Debian", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#debian", null ]
        ] ],
        [ "Installing P4C from source", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#installing-p4c-from-source", null ]
      ] ],
      [ "Dependencies", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#dependencies", [
        [ "Ubuntu dependencies", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#ubuntu-dependencies", [
          [ "CMake", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#cmake", null ]
        ] ],
        [ "Fedora dependencies", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#fedora-dependencies", null ],
        [ "macOS dependencies", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#macos-dependencies", null ],
        [ "Garbage collector", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#garbage-collector", null ],
        [ "Crash dumps", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#crash-dumps", null ]
      ] ],
      [ "Development tools", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#development-tools", [
        [ "Git setup", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#git-setup", null ]
      ] ],
      [ "Docker", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#docker", null ],
      [ "Bazel", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#bazel", null ],
      [ "Build system", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#build-system", [
        [ "Defining new CMake targets", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#defining-new-cmake-targets", [
          [ "IR definition files", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#ir-definition-files", null ],
          [ "Source files", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#source-files", null ],
          [ "Target", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#target", null ],
          [ "Tests", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#tests", null ],
          [ "Installation", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#installation", null ]
        ] ]
      ] ],
      [ "Known issues", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#known-issues", [
        [ "Frontend", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#frontend", [
          [ "P4_14 features not supported in P4_16", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#p4_14-features-not-supported-in-p4_16", null ]
        ] ],
        [ "Backends", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#backends", [
          [ "Bmv2 Backend", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#bmv2-backend", null ]
        ] ]
      ] ],
      [ "How to Contribute", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#how-to-contribute", null ],
      [ "P4 Compiler Onboarding", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#p4-compiler-onboarding", null ],
      [ "Contact", "md__2home_2runner_2work_2p4c_2p4c_2_r_e_a_d_m_e.html#contact", null ]
    ] ],
    [ "Revision History", "md_00__revision__history.html", null ],
    [ "Overview", "md_01__overview.html", [
      [ "Additional documentation", "md_01__overview.html#additional-documentation-1", null ]
    ] ],
    [ "Common P4C utility functions", "md__2home_2runner_2work_2p4c_2p4c_2lib_2_r_e_a_d_m_e.html", null ],
    [ "P4 Compiler Intermediate representation", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html", [
      [ "Introduction", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html#introduction", null ],
      [ "Visitors and Transforms", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html#visitors-and-transforms", null ],
      [ "Overall flow", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html#overall-flow", [
        [ "Frontend", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html#frontend-1", null ],
        [ "Mid-end", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html#mid-end", null ],
        [ "Pass Managers", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html#pass-managers", null ],
        [ "Exception Use", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html#exception-use", null ]
      ] ],
      [ "IR Classes", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_i_r.html#ir-classes", null ]
    ] ],
    [ "P4C Intermediate Representation (IR) Classes", "irdefs.html", null ],
    [ "Changelog", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html", [
      [ "Semantic Versioning", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#semantic-versioning", null ],
      [ "Release v1.2.4.14 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v12414-viewhttpsgithubcomp4langp4cpull4844", [
        [ "Breaking Changes 🛠", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#breaking-changes-", null ],
        [ "P4 Specification Implementation", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#p4-specification-implementation", null ],
        [ "Changes to the Compiler Core", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-compiler-core", null ],
        [ "Changes to the BMv2 Back Ends", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-bmv2-back-ends", null ],
        [ "Changes to the TC Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-tc-back-end", null ],
        [ "Changes to the P4Tools Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-p4tools-back-end", null ],
        [ "Other Changes", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#other-changes", null ]
      ] ],
      [ "Release v1.2.4.13 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v12413-viewhttpsgithubcomp4langp4cpull4767", [
        [ "Breaking Changes 🛠", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#breaking-changes--1", null ],
        [ "Changes to the Compiler Core", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-compiler-core-1", null ],
        [ "Changes to the TC Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-tc-back-end-1", null ],
        [ "Changes to the DPDK Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-dpdk-back-end", null ],
        [ "Changes to the P4Tools Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-p4tools-back-end-1", null ],
        [ "Other Changes", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#other-changes-1", null ]
      ] ],
      [ "Release v1.2.4.12 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v12412-viewhttpsgithubcomp4langp4cpull4699", [
        [ "Breaking Changes 🛠", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#breaking-changes--2", null ],
        [ "P4 Specification Implementation", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#p4-specification-implementation-1", null ],
        [ "Changes to the Compiler Core", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-compiler-core-2", null ],
        [ "Changes to the Control Plane", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-control-plane", null ],
        [ "Changes to the eBPF Back Ends", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-ebpf-back-ends", null ],
        [ "Changes to the TC Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-tc-back-end-2", null ],
        [ "Changes to the P4Tools Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-p4tools-back-end-2", null ],
        [ "Other Changes", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#other-changes-2", null ]
      ] ],
      [ "Release v1.2.4.11 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v12411-viewhttpsgithubcomp4langp4cpull4646", [
        [ "Changes to the Compiler Core", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-compiler-core-3", null ],
        [ "Changes to the eBPF Back Ends", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-ebpf-back-ends-1", null ],
        [ "Changes to the TC Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-tc-back-end-3", null ],
        [ "Changes to the P4Tools Back End", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#changes-to-the-p4tools-back-end-3", null ],
        [ "Other Changes", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#other-changes-3", null ]
      ] ],
      [ "Release v1.2.4.10 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v12410-viewhttpsgithubcomp4langp4cpull4587", null ],
      [ "Release v1.2.4.9 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1249-viewhttpsgithubcomp4langp4cpull4490", null ],
      [ "Release v1.2.4.8 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1248-viewhttpsgithubcomp4langp4cpull4386", null ],
      [ "Release v1.2.4.7 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1247-viewhttpsgithubcomp4langp4cpull4312", null ],
      [ "Release v1.2.4.6 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1246-viewhttpsgithubcomp4langp4cpull4271", null ],
      [ "Release v1.2.4.5 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1245-viewhttpsgithubcomp4langp4cpull4217", null ],
      [ "Release v1.2.4.4 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1244-viewhttpsgithubcomp4langp4cpull4180", null ],
      [ "Release v1.2.4.3 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1243-viewhttpsgithubcomp4langp4cpull4124", null ],
      [ "Release v1.2.4.1 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1241-viewhttpsgithubcomp4langp4cpull4052", null ],
      [ "Release v1.2.4", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v124", null ],
      [ "Release v1.2.3.9 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1239-viewhttpsgithubcomp4langp4cpull3998", null ],
      [ "Release v1.2.3.8 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1238-viewhttpsgithubcomp4langp4cpull3957", null ],
      [ "Release v1.2.3.7 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1237-viewhttpsgithubcomp4langp4cpull3909", null ],
      [ "Release v1.2.3.6 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1236-viewhttpsgithubcomp4langp4cpull3871", null ],
      [ "Release v1.2.3.5 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1235-viewhttpsgithubcomp4langp4cpull3815", null ],
      [ "Release v1.2.3.4 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1234-viewhttpsgithubcomp4langp4cpull3747", null ],
      [ "Release v1.2.3.3 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1233-viewhttpsgithubcomp4langp4cpull3648", null ],
      [ "Release v1.2.3.2 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1232-viewhttpsgithubcomp4langp4cpull3546", null ],
      [ "Release v1.2.3.1 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1231-viewhttpsgithubcomp4langp4cpull3505", null ],
      [ "Release v1.2.3.0 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1230-viewhttpsgithubcomp4langp4cpull3466", null ],
      [ "Release v1.2.2.3 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-v1223-viewhttpsgithubcomp4langp4cpull3418", null ],
      [ "Release 1.2.2.2 [view]", "md__2home_2runner_2work_2p4c_2p4c_2_c_h_a_n_g_e_l_o_g.html#release-1222-viewhttpsgithubcomp4langp4cpull3247", null ]
    ] ],
    [ "Behavioral Model Backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2bmv2_2_r_e_a_d_m_e.html", [
      [ "Dependencies", "md__2home_2runner_2work_2p4c_2p4c_2backends_2bmv2_2_r_e_a_d_m_e.html#dependencies-1", null ],
      [ "Unsupported P4_16 language features", "md__2home_2runner_2work_2p4c_2p4c_2backends_2bmv2_2_r_e_a_d_m_e.html#unsupported-p4_16-language-features", null ]
    ] ],
    [ "DPDK backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2dpdk_2_r_e_a_d_m_e.html", [
      [ "How to use it?", "md__2home_2runner_2work_2p4c_2p4c_2backends_2dpdk_2_r_e_a_d_m_e.html#how-to-use-it", null ],
      [ "Known issues", "md__2home_2runner_2work_2p4c_2p4c_2backends_2dpdk_2_r_e_a_d_m_e.html#known-issues-1", [
        [ "Unsupported Language Features", "md__2home_2runner_2work_2p4c_2p4c_2backends_2dpdk_2_r_e_a_d_m_e.html#unsupported-language-features", null ],
        [ "Unsupported PSA externs and features", "md__2home_2runner_2work_2p4c_2p4c_2backends_2dpdk_2_r_e_a_d_m_e.html#unsupported-psa-externs-and-features", null ],
        [ "DPDK target limitations", "md__2home_2runner_2work_2p4c_2p4c_2backends_2dpdk_2_r_e_a_d_m_e.html#dpdk-target-limitations", null ]
      ] ],
      [ "Contacts", "md__2home_2runner_2work_2p4c_2p4c_2backends_2dpdk_2_r_e_a_d_m_e.html#contacts", null ]
    ] ],
    [ "eBPF Backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html", [
      [ "Target architectures", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#target-architectures", null ],
      [ "Background", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#background", [
        [ "P4", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#p4", null ],
        [ "eBPF", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#ebpf", [
          [ "Safe code", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#safe-code", null ],
          [ "Kernel hooks", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#kernel-hooks", null ],
          [ "eBPF Tables", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#ebpf-tables", null ],
          [ "Concurrency", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#concurrency", null ]
        ] ]
      ] ],
      [ "Compiling P4 to eBPF", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#compiling-p4-to-ebpf", [
        [ "Dependencies", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#dependencies-2", null ],
        [ "Supported capabilities", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#supported-capabilities", null ],
        [ "Translating P4 to C", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#translating-p4-to-c", [
          [ "Translating parsers", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#translating-parsers", null ],
          [ "Translating match-action pipelines", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#translating-match-action-pipelines", null ]
        ] ]
      ] ],
      [ "autotoc_md0", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#autotoc_md0", null ],
      [ "How to run the generated eBPF program", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#how-to-run-the-generated-ebpf-program", null ],
      [ "How to inject custom extern function to the generated eBPF program?", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#how-to-inject-custom-extern-function-to-the-generated-ebpf-program", [
        [ "Basic principles", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#basic-principles", null ],
        [ "Definition", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#definition", null ],
        [ "Compilation", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#compilation", null ],
        [ "Calling convention", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2_r_e_a_d_m_e.html#calling-convention", null ]
      ] ]
    ] ],
    [ "PSA implementation for eBPF backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html", [
      [ "Prerequisites", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#prerequisites", null ],
      [ "Design", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#design", [
        [ "TC-based design (default)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#tc-based-design-default", null ],
        [ "XDP-based design", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#xdp-based-design", null ],
        [ "Packet paths", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#packet-paths", [
          [ "NTK (Normal Packet To Kernel)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#ntk-normal-packet-to-kernel", null ],
          [ "NFP (Normal Packet From Port)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#nfp-normal-packet-from-port", null ],
          [ "RESUBMIT", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#resubmit", null ],
          [ "NU (Normal Unicast), NM (Normal Multicast), CI2E (Clone Ingress to Egress)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#nu-normal-unicast-nm-normal-multicast-ci2e-clone-ingress-to-egress", null ],
          [ "CE2E (Clone Egress to Egress)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#ce2e-clone-egress-to-egress", null ],
          [ "Sending packet to CPU", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#sending-packet-to-cpu", null ],
          [ "NTP (Normal packet to port)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#ntp-normal-packet-to-port", null ],
          [ "RECIRCULATE", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#recirculate", null ]
        ] ],
        [ "Metadata", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#metadata", null ],
        [ "XDP2TC mode", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#xdp2tc-mode", null ],
        [ "Control-plane API", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#control-plane-api", null ],
        [ "P4 match kinds", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#p4-match-kinds", [
          [ "exact", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#exact", null ],
          [ "lpm", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#lpm", null ],
          [ "ternary", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#ternary", null ]
        ] ],
        [ "PSA externs", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#psa-externs", [
          [ "ActionProfile", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#actionprofile", null ],
          [ "ActionSelector", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#actionselector", null ],
          [ "Digest", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#digest", null ],
          [ "Meters", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#meters", [
            [ "Direct Meter", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#direct-meter", null ]
          ] ],
          [ "value_set", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#value_set", null ],
          [ "Random", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#random", null ]
        ] ]
      ] ],
      [ "Getting started", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#getting-started-1", [
        [ "Installation", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#installation-1", null ],
        [ "Using PSA-eBPF", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#using-psa-ebpf", [
          [ "Prerequisites", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#prerequisites-1", null ],
          [ "Compilation", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#compilation-1", [
            [ "Optional flags", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#optional-flags", null ]
          ] ],
          [ "NIKSS API and nikss-ctl", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#nikss-api-and-nikss-ctl", null ]
        ] ],
        [ "Running PTF tests", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#running-ptf-tests", null ],
        [ "Troubleshooting", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#troubleshooting", null ]
      ] ],
      [ "Performance optimizations", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#performance-optimizations", [
        [ "Table caching", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#table-caching", null ]
      ] ],
      [ "TODO / Limitations", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#todo--limitations", null ],
      [ "Roadmap", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#roadmap", [
        [ "Planned features", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#planned-features", null ],
        [ "Long-term goals", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#long-term-goals", null ],
        [ "Support", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ebpf_2psa_2_r_e_a_d_m_e.html#support", null ]
      ] ]
    ] ],
    [ "Graphs Backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2graphs_2_r_e_a_d_m_e.html", [
      [ "Dependencies", "md__2home_2runner_2work_2p4c_2p4c_2backends_2graphs_2_r_e_a_d_m_e.html#dependencies-3", null ],
      [ "Usage", "md__2home_2runner_2work_2p4c_2p4c_2backends_2graphs_2_r_e_a_d_m_e.html#usage", null ],
      [ "Format of json output", "md__2home_2runner_2work_2p4c_2p4c_2backends_2graphs_2_r_e_a_d_m_e.html#format-of-json-output", null ],
      [ "Example", "md__2home_2runner_2work_2p4c_2p4c_2backends_2graphs_2_r_e_a_d_m_e.html#example", null ]
    ] ],
    [ "p4fmt (P4 Formatter)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4fmt_2_r_e_a_d_m_e.html", [
      [ "Build", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4fmt_2_r_e_a_d_m_e.html#build", null ],
      [ "Usage", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4fmt_2_r_e_a_d_m_e.html#usage-1", null ],
      [ "Reference Checker for P4Fmt", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4fmt_2_r_e_a_d_m_e.html#reference-checker-for-p4fmt", null ]
    ] ],
    [ "P4test Backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4test_2_r_e_a_d_m_e.html", null ],
    [ "P4Tools - Testing Tools For P4 Targets", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_r_e_a_d_m_e.html", [
      [ "Directory Structure", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_r_e_a_d_m_e.html#directory-structure", null ],
      [ "P4Tools", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_r_e_a_d_m_e.html#p4tools", null ],
      [ "Building", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_r_e_a_d_m_e.html#building", null ],
      [ "Dependencies", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_r_e_a_d_m_e.html#dependencies-4", null ],
      [ "Development Style", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_r_e_a_d_m_e.html#development-style", [
        [ "C++ Coding style", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_r_e_a_d_m_e.html#c-coding-style", null ]
      ] ]
    ] ],
    [ "P4Tools Contributors", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_c_o_n_t_r_i_b_u_t_o_r_s.html", [
      [ "Core Developers", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_c_o_n_t_r_i_b_u_t_o_r_s.html#core-developers", null ],
      [ "History", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2_c_o_n_t_r_i_b_u_t_o_r_s.html#history", null ]
    ] ],
    [ "P4Smith", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html", [
      [ "Table of Contents", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#table-of-contents", null ],
      [ "Installation", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#installation-2", null ],
      [ "Extensions", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#extensions", [
        [ "core.p4 using the test compiler p4test", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#corep4-using-the-test-compiler-p4test", null ],
        [ "v1model.p4 and psa.p4 on BMv2", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#v1modelp4-and-psap4-on-bmv2", null ],
        [ "pna.p4 on the DPDK SoftNIC", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#pnap4-on-the-dpdk-softnic", null ],
        [ "tna.p4 on Tofino 1", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#tnap4-on-tofino-1", null ]
      ] ],
      [ "Usage", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#usage-2", null ],
      [ "Further Reading", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#further-reading", null ],
      [ "Contributing", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#contributing", null ],
      [ "License", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#license", null ]
    ] ],
    [ "P4Testgen", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html", [
      [ "Table of Contents", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#table-of-contents-1", null ],
      [ "Features", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#features", null ],
      [ "Installation", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#installation-3", [
        [ "Dependencies", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#dependencies-5", null ]
      ] ],
      [ "Extensions", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#extensions-1", [
        [ "v1model.p4 on BMv2", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#v1modelp4-on-bmv2", null ],
        [ "pna.p4 on the DPDK SoftNIC", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#pnap4-on-the-dpdk-softnic-1", null ],
        [ "ebpf_model.p4 on the eBPF kernel target", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#ebpf_modelp4-on-the-ebpf-kernel-target", null ]
      ] ],
      [ "Definitions", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#definitions", null ],
      [ "Usage", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#usage-3", [
        [ "Coverage", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#coverage", null ],
        [ "Generating Specific Tests", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#generating-specific-tests", [
          [ "Restricted Tests", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#restricted-tests", null ],
          [ "Finding Assertion Violations", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#finding-assertion-violations", null ]
        ] ],
        [ "Interacting with Test Frameworks", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#interacting-with-test-frameworks", null ],
        [ "Detecting P4 Program Flaws", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#detecting-p4-program-flaws", null ]
      ] ],
      [ "Limitations", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#limitations", null ],
      [ "Further Reading", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#further-reading-1", null ],
      [ "Contributing", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#contributing-1", null ],
      [ "License", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2_r_e_a_d_m_e.html#license-1", null ]
    ] ],
    [ "P4Testgen Benchmarks", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2benchmarks_2_r_e_a_d_m_e.html", null ],
    [ "P4Testgen BMv2 target tests", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2targets_2bmv2_2test_2_r_e_a_d_m_e.html", [
      [ "CMake Files", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2targets_2bmv2_2test_2_r_e_a_d_m_e.html#cmake-files", null ],
      [ "How to Run tests", "md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2testgen_2targets_2bmv2_2test_2_r_e_a_d_m_e.html#how-to-run-tests", null ]
    ] ],
    [ "TC backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2tc_2_r_e_a_d_m_e.html", [
      [ "How to use it?", "md__2home_2runner_2work_2p4c_2p4c_2backends_2tc_2_r_e_a_d_m_e.html#how-to-use-it-1", null ],
      [ "Contacts", "md__2home_2runner_2work_2p4c_2p4c_2backends_2tc_2_r_e_a_d_m_e.html#contacts-1", null ]
    ] ],
    [ "Introduction to uBPF Backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html", [
      [ "Background", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#background-1", [
        [ "P4", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#p4-1", null ],
        [ "uBPF", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#ubpf", null ]
      ] ],
      [ "Compiling P4 to uBPF", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#compiling-p4-to-ubpf", [
        [ "Translation between P4 and C", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#translation-between-p4-and-c", null ],
        [ "How to use?", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#how-to-use", [
          [ "Custom C extern functions", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#custom-c-extern-functions", null ]
        ] ],
        [ "Known limitations", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#known-limitations", null ],
        [ "Contact", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2_r_e_a_d_m_e.html#contact-1", null ]
      ] ]
    ] ],
    [ "uBPF Backend test programs", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html", [
      [ "Examples", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#examples", [
        [ "Packet modification", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#packet-modification", [
          [ "IPv4 + MPLS (simple-actions.p4)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#ipv4--mpls-simple-actionsp4", null ],
          [ "IPv6 (ipv6-actions.p4)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#ipv6-ipv6-actionsp4", null ]
        ] ],
        [ "Registers", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#registers", [
          [ "Rate limiter (rate-limiter.p4)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#rate-limiter-rate-limiterp4", null ],
          [ "Rate limiter (rate-limiter-structs.p4)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#rate-limiter-rate-limiter-structsp4", null ],
          [ "Packet counter (packet-counter.p4)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#packet-counter-packet-counterp4", null ],
          [ "Simple firewall (simple-firewall.p4)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#simple-firewall-simple-firewallp4", null ]
        ] ],
        [ "Tunneling", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#tunneling", [
          [ "VXLAN", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#vxlan", null ],
          [ "GPRS Tunneling Protocol (GTP)", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2docs_2_e_x_a_m_p_l_e_s.html#gprs-tunneling-protocol-gtp", null ]
        ] ]
      ] ]
    ] ],
    [ "uBPF Backend testing", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2tests_2_r_e_a_d_m_e.html", [
      [ "Steps to run tests", "md__2home_2runner_2work_2p4c_2p4c_2backends_2ubpf_2tests_2_r_e_a_d_m_e.html#steps-to-run-tests", null ]
    ] ],
    [ "BMv2 \"pna_nic\" Backend", "md__2home_2runner_2work_2p4c_2p4c_2backends_2bmv2_2pna__nic_2_r_e_a_d_m_e.html", null ],
    [ "portable_common", "md__2home_2runner_2work_2p4c_2p4c_2backends_2bmv2_2portable__common_2_r_e_a_d_m_e.html", null ],
    [ "Contribute to the P4 Compiler Project", "md__2home_2runner_2work_2p4c_2p4c_2_c_o_n_t_r_i_b_u_t_i_n_g.html", [
      [ "Contributing License", "md__2home_2runner_2work_2p4c_2p4c_2_c_o_n_t_r_i_b_u_t_i_n_g.html#contributing-license", null ],
      [ "Coding Standard Philosophy", "md__2home_2runner_2work_2p4c_2p4c_2_c_o_n_t_r_i_b_u_t_i_n_g.html#coding-standard-philosophy", null ],
      [ "How to Contribute", "md__2home_2runner_2work_2p4c_2p4c_2_c_o_n_t_r_i_b_u_t_i_n_g.html#how-to-contribute-1", [
        [ "Guidelines", "md__2home_2runner_2work_2p4c_2p4c_2_c_o_n_t_r_i_b_u_t_i_n_g.html#guidelines", null ],
        [ "Finding a Task", "md__2home_2runner_2work_2p4c_2p4c_2_c_o_n_t_r_i_b_u_t_i_n_g.html#finding-a-task", null ]
      ] ],
      [ "Reporting Issues", "md__2home_2runner_2work_2p4c_2p4c_2_c_o_n_t_r_i_b_u_t_i_n_g.html#reporting-issues", null ],
      [ "Feature Requests", "md__2home_2runner_2work_2p4c_2p4c_2_c_o_n_t_r_i_b_u_t_i_n_g.html#feature-requests", null ]
    ] ],
    [ "Coding Standard", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_coding_standard_philosophy.html", [
      [ "Commenting the code", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_coding_standard_philosophy.html#commenting-the-code", null ],
      [ "Handling errors", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_coding_standard_philosophy.html#handling-errors", null ],
      [ "Git commits and pull requests", "md__2home_2runner_2work_2p4c_2p4c_2docs_2_coding_standard_philosophy.html#git-commits-and-pull-requests", null ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Topics", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"class_p4_1_1_b_m_v2_1_1_pna_nic_backend.html",
"class_p4_1_1_control_plane_a_p_i_1_1_p4_info_maps.html#ae66c42a97f9980ced4fdb8c3cc6f4f8e",
"class_p4_1_1_d_p_d_k_1_1_direction_to_reg_read.html#a871c67b6817f6cf934877a0080b02b61",
"class_p4_1_1_do_copy_structures.html",
"class_p4_1_1_e_b_p_f_1_1_e_b_p_f_ingress_pipeline.html",
"class_p4_1_1_e_b_p_f_1_1_x_d_p_egress_deparser_p_s_a.html#a1d80e3d5ff6159309795ac9000dd9e57",
"class_p4_1_1_indent_ctl_1_1_temp_indent.html",
"class_p4_1_1_p4_tools_1_1_abstract_p4c_tool_options.html",
"class_p4_1_1_p4_tools_1_1_p4_testgen_1_1_bmv2_1_1_bmv2_test_framework.html",
"class_p4_1_1_p4_tools_1_1_p4_testgen_1_1_bmv2_1_1_token.html#a9863f75b297433f9926180f64adb0232",
"class_p4_1_1_p4_tools_1_1_p4_testgen_1_1_expr_stepper.html#a3945f4f06322955d67376315fab31503",
"class_p4_1_1_p4_tools_1_1_p4_testgen_1_1_pna_1_1_shared_pna_table_stepper.html",
"class_p4_1_1_p4_tools_1_1_p4_testgen_1_1_test_framework.html#ad60083c943dc2d73fa987575a6eb1f58",
"class_p4_1_1_p4_tools_1_1_trace_events_1_1_packet.html#a0a01f5c07a85f8ed06802ad2f4b1e5bf",
"class_p4_1_1_pass_manager_1_1_visitor_ref.html",
"class_p4_1_1_simplify_select_cases.html",
"class_p4_1_1_test_1_1_z3_solver_tests.html",
"class_p4_1_1_validate_parsed_program.html",
"functions_s.html",
"md__2home_2runner_2work_2p4c_2p4c_2backends_2p4tools_2modules_2smith_2_r_e_a_d_m_e.html#table-of-contents",
"namespace_p4_1_1_p4_tools.html#a349e089838f8795119fdb00ca428b3c8",
"struct_p4_1_1_control_plane_a_p_i_1_1_standard_1_1_register_traits_3_01_arch_1_1_v1_m_o_d_e_l2020_01_4.html",
"struct_p4_1_1_p4_v1_1_1_digest_receiver___model.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';