---
title: "Test Results"
description: "Results of the slint-sc compiler and runtime test suites."
---
This chapter reports the outcome of running the slint-sc test suites:
the unit and syntax tests of the compiler with the `slint-sc` feature, and the unit tests and `.slint` test driver cases of the `slint-sc` runtime crate.
The syntax tests are reported per test file rather than as the single test that drives them.

Generated from commit [`ff0cd0a52d`](https://github.com/slint-ui/slint/tree/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25).

**707 tests: 707 passed, 0 failed.**

| Suite | Tests | Passed | Failed |
| --- | --- | --- | --- |
| `i_slint_compiler` | 318 | 318 | 0 |
| `consistent_styles` | 1 | 1 | 0 |
| `llr_lowering` | 1 | 1 | 0 |
| `lower_shadows` | 2 | 2 | 0 |
| `single_cell_box_layout` | 4 | 4 | 0 |
| `syntax-tests` | 359 | 359 | 0 |
| `slint_sc` | 2 | 2 | 0 |
| `slint-sc-driver` | 20 | 20 | 0 |

## Slint Compiler

The `slint-sc/` subset of the compiler's syntax tests: each file is compiled in Slint SC mode and its diagnostics are checked against the expectations embedded in the file.

| Test file | Result |
| --- | --- |
| [`slint-sc/animations.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/animations.slint) | ✅ |
| [`slint-sc/binding_types.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/binding_types.slint) | ✅ |
| [`slint-sc/bindings.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/bindings.slint) | ✅ |
| [`slint-sc/bom-encoding.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/bom-encoding.slint) | ✅ |
| [`slint-sc/callbacks.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/callbacks.slint) | ✅ |
| [`slint-sc/change_callbacks.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/change_callbacks.slint) | ✅ |
| [`slint-sc/children_placeholder.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/children_placeholder.slint) | ✅ |
| [`slint-sc/color_literals.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/color_literals.slint) | ✅ |
| [`slint-sc/comments.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/comments.slint) | ✅ |
| [`slint-sc/component_braces_close.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/component_braces_close.slint) | ✅ |
| [`slint-sc/component_braces_open.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/component_braces_open.slint) | ✅ |
| [`slint-sc/component_declaration.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/component_declaration.slint) | ✅ |
| [`slint-sc/component_shadowing.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/component_shadowing.slint) | ✅ |
| [`slint-sc/contextual_keywords.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/contextual_keywords.slint) | ✅ |
| [`slint-sc/crlf-line-terminators.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/crlf-line-terminators.slint) | ✅ |
| [`slint-sc/dialog.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/dialog.slint) | ✅ |
| [`slint-sc/element_nesting.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/element_nesting.slint) | ✅ |
| [`slint-sc/element_unknown_type.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/element_unknown_type.slint) | ✅ |
| [`slint-sc/elements.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/elements.slint) | ✅ |
| [`slint-sc/empty_file.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/empty_file.slint) | ✅ |
| [`slint-sc/enums.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/enums.slint) | ✅ |
| [`slint-sc/export_duplicate.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/export_duplicate.slint) | ✅ |
| [`slint-sc/export_specifiers.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/export_specifiers.slint) | ✅ |
| [`slint-sc/expressions.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/expressions.slint) | ✅ |
| [`slint-sc/expressions_extra.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/expressions_extra.slint) | ✅ |
| [`slint-sc/for_and_if.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/for_and_if.slint) | ✅ |
| [`slint-sc/functions.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/functions.slint) | ✅ |
| [`slint-sc/geometry_root.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/geometry_root.slint) | ✅ |
| [`slint-sc/globals.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/globals.slint) | ✅ |
| [`slint-sc/identifier_leading_hyphen.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen.slint) | ✅ |
| [`slint-sc/identifier_leading_hyphen_element_id.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_element_id.slint) | ✅ |
| [`slint-sc/identifier_leading_hyphen_inherits.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_inherits.slint) | ✅ |
| [`slint-sc/identifier_leading_hyphen_property.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_property.slint) | ✅ |
| [`slint-sc/identifier_normalization_collision.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/identifier_normalization_collision.slint) | ✅ |
| [`slint-sc/identifier_normalization_distinct.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/identifier_normalization_distinct.slint) | ✅ |
| [`slint-sc/identifiers.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/identifiers.slint) | ✅ |
| [`slint-sc/imports.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/imports.slint) | ✅ |
| [`slint-sc/inheritance.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/inheritance.slint) | ✅ |
| [`slint-sc/inherits_not_yet_defined.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/inherits_not_yet_defined.slint) | ✅ |
| [`slint-sc/inherits_unknown.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/inherits_unknown.slint) | ✅ |
| [`slint-sc/init_callback.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/init_callback.slint) | ✅ |
| [`slint-sc/layout.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/layout.slint) | ✅ |
| [`slint-sc/length_literal_space.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/length_literal_space.slint) | ✅ |
| [`slint-sc/path.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/path.slint) | ✅ |
| [`slint-sc/popup.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/popup.slint) | ✅ |
| [`slint-sc/properties.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/properties.slint) | ✅ |
| [`slint-sc/property_protected.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/property_protected.slint) | ✅ |
| [`slint-sc/source_file.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/source_file.slint) | ✅ |
| [`slint-sc/states.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/states.slint) | ✅ |
| [`slint-sc/structs.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/structs.slint) | ✅ |
| [`slint-sc/timer.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/timer.slint) | ✅ |
| [`slint-sc/two_way_bindings.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/two_way_bindings.slint) | ✅ |
| [`slint-sc/types.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/types.slint) | ✅ |
| [`slint-sc/units.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/units.slint) | ✅ |
| [`slint-sc/whitespace.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/whitespace.slint) | ✅ |
| [`slint-sc/window_instantiation.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/window_instantiation.slint) | ✅ |
| [`slint-sc/window_root.slint`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/internal/compiler/tests/syntax/slint-sc/window_root.slint) | ✅ |

## Slint SC Runtime

The test driver cases: each case is a `.slint` file compiled with `slint-compiler`; the embedded Rust test code is built against the runtime and executed.

| Case | Result |
| --- | --- |
| [`component/background_color`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/background_color.slint) | ✅ |
| [`component/baseless_implicit_size`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/baseless_implicit_size.slint) | ✅ |
| [`component/component_inheritance`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/component_inheritance.slint) | ✅ |
| [`component/empty`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/empty.slint) | ✅ |
| [`component/inherits`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/inherits.slint) | ✅ |
| [`component/name`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/name.slint) | ✅ |
| [`component/nested_rectangles`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/nested_rectangles.slint) | ✅ |
| [`component/properties`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/properties.slint) | ✅ |
| [`component/rectangle_centered`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/rectangle_centered.slint) | ✅ |
| [`component/rectangle_nesting`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/rectangle_nesting.slint) | ✅ |
| [`component/rectangle_position`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/rectangle_position.slint) | ✅ |
| [`component/rectangle_wider_than_window`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/rectangle_wider_than_window.slint) | ✅ |
| [`component/user_component`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/user_component.slint) | ✅ |
| [`component/window_background`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/component/window_background.slint) | ✅ |
| [`export/lists`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/export/lists.slint) | ✅ |
| [`export/placement`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/export/placement.slint) | ✅ |
| [`expr/color_literals`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/expr/color_literals.slint) | ✅ |
| [`lexical/contextual_keywords`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/lexical/contextual_keywords.slint) | ✅ |
| [`lexical/unicode_identifiers`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/lexical/unicode_identifiers.slint) | ✅ |
| [`lexical/with_comments`](https://github.com/slint-ui/slint/blob/ff0cd0a52d841b17ea95c1b5cd9d5dc97f0fdc25/api/slint-sc/tests/cases/lexical/with_comments.slint) | ✅ |