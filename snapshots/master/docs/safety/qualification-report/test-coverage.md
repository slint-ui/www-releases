---
title: "Test Coverage"
description: "LLVM source-based code coverage of the slint-sc runtime."
---
The tests of the `slint-sc` runtime crate run under LLVM source-based coverage instrumentation with [`cargo llvm-cov`](https://github.com/taiki-e/cargo-llvm-cov):
the unit tests, and the test driver that compiles the `.slint` test cases and runs them against the instrumented runtime.
This chapter reports the measured line, function, and region coverage per source file of the runtime, addressing [the test coverage requirement](/qualification-plan/test-coverage/).
A function counts as fully tested when every code region in it was executed, as partially tested when it was executed but some of its code regions weren't, and as untested when it was never executed.

Generated from commit [`0748d0a84c`](https://github.com/slint-ui/slint/tree/0748d0a84c56dc0fbdc9292dbf9aaf057b01b462).

**Line coverage: 100.0% (216/216). Function coverage: 100.0% (26/26). Region coverage: 100.0% (369/369).**

| Functions | Share |
| --- | --- |
| Fully tested | 100.0% (26/26) |
| Partially tested | 0.0% (0/26) |
| Untested | 0.0% (0/26) |

Per-line execution counts are in the [detailed coverage report](/coverage/index.html), linked per file in the tables below.

## api/slint-sc

| File | Lines | Functions | Regions | Per-line |
| --- | --- | --- | --- | --- |
| [`lib.rs`](https://github.com/slint-ui/slint/blob/0748d0a84c56dc0fbdc9292dbf9aaf057b01b462/api/slint-sc/lib.rs) | 100.0% (123/123) | 100.0% (22/22) | 100.0% (208/208) | [view](/coverage/coverage/api/slint-sc/lib.rs.html) |
| [`private_unstable_api/renderer.rs`](https://github.com/slint-ui/slint/blob/0748d0a84c56dc0fbdc9292dbf9aaf057b01b462/api/slint-sc/private_unstable_api/renderer.rs) | 100.0% (93/93) | 100.0% (4/4) | 100.0% (161/161) | [view](/coverage/coverage/api/slint-sc/private_unstable_api/renderer.rs.html) |
| **Sum** | **100.0% (216/216)** | **100.0% (26/26)** | **100.0% (369/369)** |  |

Functions: 26 fully tested, 0 partially tested, 0 untested.