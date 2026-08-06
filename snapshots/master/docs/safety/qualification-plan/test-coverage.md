---
title: "Test Coverage"
description: "LLVM source-based code coverage of the slint-sc runtime."
---
The tests of the `slint-sc` runtime crate run under LLVM source-based coverage instrumentation with [`cargo llvm-cov`](https://github.com/taiki-e/cargo-llvm-cov):
the unit tests, and the test driver that compiles the `.slint` test cases and runs them against the instrumented runtime.
This chapter reports the measured line, function, and region coverage per source file of the runtime, addressing [SR_TEST_COVERAGE](/requirements/test-coverage/).
A function counts as fully tested when every code region in it was executed, as partially tested when it was executed but some of its code regions weren't, and as untested when it was never executed.

Generated from commit [`3fac9597be`](https://github.com/slint-ui/slint/tree/3fac9597bec6b38bafa737a90592d8faacbe037d).

**Line coverage: 100.0% (71/71). Function coverage: 100.0% (12/12). Region coverage: 100.0% (136/136).**

| Functions | Share |
| --- | --- |
| Fully tested | 100.0% (12/12) |
| Partially tested | 0.0% (0/12) |
| Untested | 0.0% (0/12) |

Per-line execution counts are in the [detailed coverage report](/coverage/index.html), linked per file in the tables below.

## api/slint-sc

| File | Lines | Functions | Regions | Per-line |
| --- | --- | --- | --- | --- |
| [`lib.rs`](https://github.com/slint-ui/slint/blob/3fac9597bec6b38bafa737a90592d8faacbe037d/api/slint-sc/lib.rs) | 100.0% (41/41) | 100.0% (10/10) | 100.0% (72/72) | [view](/coverage/coverage/api/slint-sc/lib.rs.html) |
| [`private_unstable_api/renderer.rs`](https://github.com/slint-ui/slint/blob/3fac9597bec6b38bafa737a90592d8faacbe037d/api/slint-sc/private_unstable_api/renderer.rs) | 100.0% (30/30) | 100.0% (2/2) | 100.0% (64/64) | [view](/coverage/coverage/api/slint-sc/private_unstable_api/renderer.rs.html) |
| **Sum** | **100.0% (71/71)** | **100.0% (12/12)** | **100.0% (136/136)** |  |

Functions: 12 fully tested, 0 partially tested, 0 untested.