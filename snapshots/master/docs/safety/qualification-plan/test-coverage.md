---
title: "Test Coverage"
description: "LLVM source-based code coverage of the slint-sc runtime."
---
The tests of the `slint-sc` runtime crate run under LLVM source-based coverage instrumentation with [`cargo llvm-cov`](https://github.com/taiki-e/cargo-llvm-cov):
the unit tests, and the test driver that compiles the `.slint` test cases and runs them against the instrumented runtime.
This chapter reports the measured line, function, and region coverage per source file of the runtime, addressing [SR_TEST_COVERAGE](/requirements/test-coverage/).
A function counts as fully tested when every code region in it was executed, as partially tested when it was executed but some of its code regions weren't, and as untested when it was never executed.

Generated from commit [`d56b88d190`](https://github.com/slint-ui/slint/tree/d56b88d190a8eb74efb3cbe4087bafac6927fe35).

**Line coverage: 93.2% (55/59). Function coverage: 90.0% (9/10). Region coverage: 94.7% (108/114).**

| Functions | Share |
| --- | --- |
| Fully tested | 90.0% (9/10) |
| Partially tested | 0.0% (0/10) |
| Untested | 10.0% (1/10) |

Per-line execution counts are in the [detailed coverage report](/coverage/index.html), linked per file in the tables below.

## api/slint-sc

| File | Lines | Functions | Regions | Per-line |
| --- | --- | --- | --- | --- |
| [`lib.rs`](https://github.com/slint-ui/slint/blob/d56b88d190a8eb74efb3cbe4087bafac6927fe35/api/slint-sc/lib.rs) | 86.2% (25/29) | 87.5% (7/8) | 88.0% (44/50) | [view](/coverage/coverage/api/slint-sc/lib.rs.html) |
| [`private_unstable_api/renderer.rs`](https://github.com/slint-ui/slint/blob/d56b88d190a8eb74efb3cbe4087bafac6927fe35/api/slint-sc/private_unstable_api/renderer.rs) | 100.0% (30/30) | 100.0% (2/2) | 100.0% (64/64) | [view](/coverage/coverage/api/slint-sc/private_unstable_api/renderer.rs.html) |
| **Sum** | **93.2% (55/59)** | **90.0% (9/10)** | **94.7% (108/114)** |  |

Functions: 9 fully tested, 0 partially tested, 1 untested.