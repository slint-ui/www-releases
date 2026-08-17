---
title: "Test Coverage"
description: "LLVM source-based code coverage of the slint-sc runtime."
---
The tests of the `slint-sc` runtime crate run under LLVM source-based coverage instrumentation with [`cargo llvm-cov`](https://github.com/taiki-e/cargo-llvm-cov):
the unit tests, and the test driver that compiles the `.slint` test cases and runs them against the instrumented runtime.
This chapter reports the measured line, function, and region coverage per source file of the runtime, addressing [the test coverage requirement](/qualification-plan/test-coverage/).
A function counts as fully tested when every code region in it was executed, as partially tested when it was executed but some of its code regions weren't, and as untested when it was never executed.

Generated from commit [`a9ea814a58`](https://github.com/slint-ui/slint/tree/a9ea814a5813e7460fa1a867924872095a4d678d).

**Line coverage: 100.0% (157/157). Function coverage: 100.0% (18/18). Region coverage: 100.0% (320/320).**

| Functions | Share |
| --- | --- |
| Fully tested | 100.0% (18/18) |
| Partially tested | 0.0% (0/18) |
| Untested | 0.0% (0/18) |

Per-line execution counts are in the [detailed coverage report](/coverage/index.html), linked per file in the tables below.

## api/slint-sc

| File | Lines | Functions | Regions | Per-line |
| --- | --- | --- | --- | --- |
| [`lib.rs`](https://github.com/slint-ui/slint/blob/a9ea814a5813e7460fa1a867924872095a4d678d/api/slint-sc/lib.rs) | 100.0% (89/89) | 100.0% (14/14) | 100.0% (159/159) | [view](/coverage/coverage/api/slint-sc/lib.rs.html) |
| [`private_unstable_api/renderer.rs`](https://github.com/slint-ui/slint/blob/a9ea814a5813e7460fa1a867924872095a4d678d/api/slint-sc/private_unstable_api/renderer.rs) | 100.0% (68/68) | 100.0% (4/4) | 100.0% (161/161) | [view](/coverage/coverage/api/slint-sc/private_unstable_api/renderer.rs.html) |
| **Sum** | **100.0% (157/157)** | **100.0% (18/18)** | **100.0% (320/320)** |  |

Functions: 18 fully tested, 0 partially tested, 0 untested.