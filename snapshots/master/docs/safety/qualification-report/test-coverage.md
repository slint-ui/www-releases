---
title: "Test Coverage"
description: "LLVM source-based code coverage of the slint-sc runtime."
---
The tests of the `slint-sc` runtime crate run under LLVM source-based coverage instrumentation with [`cargo llvm-cov`](https://github.com/taiki-e/cargo-llvm-cov):
the unit tests, and the test driver that compiles the `.slint` test cases and runs them against the instrumented runtime.
This chapter reports the measured line, function, and region coverage per source file of the runtime, addressing [the test coverage requirement](/qualification-plan/test-coverage/).
A function counts as fully tested when every code region in it was executed, as partially tested when it was executed but some of its code regions weren't, and as untested when it was never executed.

Generated from commit [`a17b7a6914`](https://github.com/slint-ui/slint/tree/a17b7a6914e97cd68935f88f7ef79c0faf0ad24b).

**Line coverage: 100.0% (319/319). Function coverage: 100.0% (37/37). Region coverage: 100.0% (559/559).**

| Functions | Share |
| --- | --- |
| Fully tested | 100.0% (37/37) |
| Partially tested | 0.0% (0/37) |
| Untested | 0.0% (0/37) |

Per-line execution counts are in the [detailed coverage report](/coverage/index.html), linked per file in the tables below.

## api/slint-sc

| File | Lines | Functions | Regions | Per-line |
| --- | --- | --- | --- | --- |
| [`lib.rs`](https://github.com/slint-ui/slint/blob/a17b7a6914e97cd68935f88f7ef79c0faf0ad24b/api/slint-sc/lib.rs) | 100.0% (146/146) | 100.0% (25/25) | 100.0% (249/249) | [view](/coverage/coverage/api/slint-sc/lib.rs.html) |
| [`private_unstable_api/renderer.rs`](https://github.com/slint-ui/slint/blob/a17b7a6914e97cd68935f88f7ef79c0faf0ad24b/api/slint-sc/private_unstable_api/renderer.rs) | 100.0% (173/173) | 100.0% (12/12) | 100.0% (310/310) | [view](/coverage/coverage/api/slint-sc/private_unstable_api/renderer.rs.html) |
| **Sum** | **100.0% (319/319)** | **100.0% (37/37)** | **100.0% (559/559)** |  |

Functions: 37 fully tested, 0 partially tested, 0 untested.