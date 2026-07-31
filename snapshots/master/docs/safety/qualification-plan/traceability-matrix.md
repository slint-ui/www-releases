---
title: "Traceability Matrix"
description: "Mapping between the requirement paragraphs of the Language Specification and the SC API Reference, and the test cases that verify them."
---
Each requirement paragraph in the [Language Specification](/language/), the [SC API Reference](/reference/), and the other chapters of this manual carries a unique identifier,
shown as a `[sls.…]` badge at the end of the paragraph.
A test case declares which requirements it verifies by listing their identifiers in `//#sls.…` comments.
This matrix lists every requirement paragraph with the test cases that declare it.
Requirements not yet covered by any test are marked ❌.
Informative paragraphs — those whose identifier contains a `meta` segment, and examples — are not listed;
the examples are compiled by the doctests test instead.

Tests marked `case:` are executed test cases from `api/slint-sc/tests/cases/`,
`syntax:` are compiler syntax tests from `internal/compiler/tests/syntax/slint-sc/`,
and `rust:` are Rust unit tests and test drivers of the `slint-sc` crate and the compiler.

**Coverage: 88 of 98 requirement paragraphs are covered by at least one test.**

## Slint Language Specification

### Source Files

| Paragraph | Tests |
| --- | --- |
| [`sls.source.encoding.utf8`](/language/source-files/#sls.source.encoding.utf8) | [`syntax: bom-encoding.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/bom-encoding.slint) |
| [`sls.source.encoding.bom`](/language/source-files/#sls.source.encoding.bom) | [`syntax: bom-encoding.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/bom-encoding.slint) |
| [`sls.source.line-terminators`](/language/source-files/#sls.source.line-terminators) | [`syntax: crlf-line-terminators.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/crlf-line-terminators.slint) |
| [`sls.source.bare-cr`](/language/source-files/#sls.source.bare-cr) | [`syntax: crlf-line-terminators.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/crlf-line-terminators.slint) |
| [`sls.source.whitespace.collapse`](/language/source-files/#sls.source.whitespace.collapse) | [`syntax: whitespace.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/whitespace.slint) |
| [`sls.source.comment.line`](/language/source-files/#sls.source.comment.line) | [`case: lexical/with_comments.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/lexical/with_comments.slint)<br/>[`syntax: comments.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/comments.slint) |
| [`sls.source.comment.block`](/language/source-files/#sls.source.comment.block) | [`case: lexical/with_comments.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/lexical/with_comments.slint)<br/>[`syntax: comments.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/comments.slint) |
| [`sls.source.comment.whitespace-equivalent`](/language/source-files/#sls.source.comment.whitespace-equivalent) | [`case: lexical/with_comments.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/lexical/with_comments.slint)<br/>[`syntax: comments.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/comments.slint) |
| [`sls.source.comment.no-doc-comments`](/language/source-files/#sls.source.comment.no-doc-comments) | [`syntax: comments.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/comments.slint) |

### Lexical Structure

| Paragraph | Tests |
| --- | --- |
| [`sls.lex.tokens`](/language/lexical-structure/#sls.lex.tokens) | [`rust: lexer.rs`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/lexer.rs) |
| [`sls.lex.number`](/language/lexical-structure/#sls.lex.number) | [`rust: lexer.rs`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/lexer.rs) |
| [`sls.lex.identifier.classes`](/language/lexical-structure/#sls.lex.identifier.classes) | [`case: lexical/unicode_identifiers.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/lexical/unicode_identifiers.slint)<br/>[`rust: lexer.rs`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/lexer.rs) |
| [`sls.lex.identifier.no-leading-digit`](/language/lexical-structure/#sls.lex.identifier.no-leading-digit) | [`rust: lexer.rs`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/lexer.rs) |
| [`sls.lex.identifier.no-leading-hyphen`](/language/lexical-structure/#sls.lex.identifier.no-leading-hyphen) | [`syntax: identifier_leading_hyphen.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen.slint)<br/>[`syntax: identifier_leading_hyphen_element_id.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_element_id.slint)<br/>[`syntax: identifier_leading_hyphen_inherits.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_inherits.slint)<br/>[`syntax: identifier_leading_hyphen_property.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_property.slint)<br/>[`rust: lexer.rs`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/lexer.rs) |
| [`sls.lex.identifier.normalization`](/language/lexical-structure/#sls.lex.identifier.normalization) | [`syntax: identifier_normalization_collision.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/identifier_normalization_collision.slint)<br/>[`syntax: identifier_normalization_distinct.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/identifier_normalization_distinct.slint) |
| [`sls.lex.identifier.normalization-example`](/language/lexical-structure/#sls.lex.identifier.normalization-example) | [`syntax: identifier_normalization_collision.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/identifier_normalization_collision.slint) |
| [`sls.lex.identifier.canonical-form`](/language/lexical-structure/#sls.lex.identifier.canonical-form) | [`syntax: identifier_normalization_collision.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/identifier_normalization_collision.slint) |
| [`sls.lex.contextual-keywords`](/language/lexical-structure/#sls.lex.contextual-keywords) | [`case: lexical/contextual_keywords.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/lexical/contextual_keywords.slint)<br/>[`syntax: contextual_keywords.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/contextual_keywords.slint) |

### File Structure

| Paragraph | Tests |
| --- | --- |
| [`sls.file.source-file`](/language/file-structure/#sls.file.source-file) | [`syntax: source_file.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/source_file.slint) |
| [`sls.file.source-file.empty`](/language/file-structure/#sls.file.source-file.empty) | [`syntax: empty_file.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/empty_file.slint) |
| [`sls.file.top-level-item`](/language/file-structure/#sls.file.top-level-item) | [`syntax: enums.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/enums.slint)<br/>[`syntax: globals.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/globals.slint)<br/>[`syntax: source_file.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/source_file.slint)<br/>[`syntax: structs.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/structs.slint) |
| [`sls.file.component.definition-forms`](/language/file-structure/#sls.file.component.definition-forms) | [`case: component/user_component.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/user_component.slint) |
| [`sls.file.component.name`](/language/file-structure/#sls.file.component.name) | [`case: component/name.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/name.slint) |
| [`sls.file.component.inherits`](/language/file-structure/#sls.file.component.inherits) | [`case: component/inherits.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/inherits.slint) |
| [`sls.file.component.inherits.meaning`](/language/file-structure/#sls.file.component.inherits.meaning) | [`case: component/component_inheritance.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/component_inheritance.slint) |
| [`sls.file.component.inherits.body-applies`](/language/file-structure/#sls.file.component.inherits.body-applies) | [`case: component/inherits.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/inherits.slint) |
| [`sls.file.component.inherits.properties`](/language/file-structure/#sls.file.component.inherits.properties) | [`case: component/inherits.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/inherits.slint) |
| [`sls.file.component.inherits.base`](/language/file-structure/#sls.file.component.inherits.base) | [`case: component/component_inheritance.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/component_inheritance.slint)<br/>[`syntax: inherits_not_yet_defined.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/inherits_not_yet_defined.slint)<br/>[`syntax: inherits_unknown.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/inherits_unknown.slint) |
| [`sls.file.component.body-braces`](/language/file-structure/#sls.file.component.body-braces) | [`syntax: component_braces_close.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/component_braces_close.slint)<br/>[`syntax: component_braces_open.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/component_braces_open.slint) |
| [`sls.file.component.body`](/language/file-structure/#sls.file.component.body) | [`case: component/nested_rectangles.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/nested_rectangles.slint)<br/>[`syntax: bindings.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/bindings.slint)<br/>[`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/element_nesting.slint)<br/>[`syntax: for_and_if.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/for_and_if.slint) |
| [`sls.file.component.body.empty`](/language/file-structure/#sls.file.component.body.empty) | [`case: component/empty.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/empty.slint) |
| [`sls.file.element.instantiation-form`](/language/file-structure/#sls.file.element.instantiation-form) | [`case: component/nested_rectangles.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/nested_rectangles.slint)<br/>[`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/element_nesting.slint) |
| [`sls.file.element.instantiation-typename`](/language/file-structure/#sls.file.element.instantiation-typename) | [`case: component/user_component.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/user_component.slint)<br/>[`syntax: element_unknown_type.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/element_unknown_type.slint) |
| [`sls.file.element.no-window-instantiation`](/language/file-structure/#sls.file.element.no-window-instantiation) | [`syntax: window_instantiation.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/window_instantiation.slint) |
| [`sls.file.element.body`](/language/file-structure/#sls.file.element.body) | [`case: component/background_color.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/background_color.slint)<br/>[`case: component/nested_rectangles.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/nested_rectangles.slint)<br/>[`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/element_nesting.slint) |
| [`sls.file.element.tree`](/language/file-structure/#sls.file.element.tree) | [`case: component/nested_rectangles.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/nested_rectangles.slint)<br/>[`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/element_nesting.slint) |

### Exports

| Paragraph | Tests |
| --- | --- |
| [`sls.export.placement`](/language/exports/#sls.export.placement) | ❌ |
| [`sls.export.default-private`](/language/exports/#sls.export.default-private) | ❌ |
| [`sls.export.forms`](/language/exports/#sls.export.forms) | ❌ |
| [`sls.export.declaration-site`](/language/exports/#sls.export.declaration-site) | [`case: component/empty.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/empty.slint) |
| [`sls.export.list`](/language/exports/#sls.export.list) | ❌ |
| [`sls.export.rename`](/language/exports/#sls.export.rename) | ❌ |
| [`sls.export.left-must-exist`](/language/exports/#sls.export.left-must-exist) | [`syntax: export_specifiers.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/export_specifiers.slint) |
| [`sls.export.no-duplicates`](/language/exports/#sls.export.no-duplicates) | ❌ |

### Properties

| Paragraph | Tests |
| --- | --- |
| [`sls.prop.def`](/language/properties/#sls.prop.def) | [`case: component/inherits.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/inherits.slint) |
| [`sls.prop.def.value`](/language/properties/#sls.prop.def.value) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.prop.decl.form`](/language/properties/#sls.prop.decl.form) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint)<br/>[`syntax: properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/properties.slint) |
| [`sls.prop.decl.visibility`](/language/properties/#sls.prop.decl.visibility) | [`syntax: properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/properties.slint)<br/>[`syntax: property_protected.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/property_protected.slint) |
| [`sls.prop.decl.in`](/language/properties/#sls.prop.decl.in) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.prop.decl.out`](/language/properties/#sls.prop.decl.out) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.prop.decl.in-out`](/language/properties/#sls.prop.decl.in-out) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.prop.decl.private`](/language/properties/#sls.prop.decl.private) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.prop.decl.root-only`](/language/properties/#sls.prop.decl.root-only) | [`syntax: properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/properties.slint) |
| [`sls.prop.decl.types`](/language/properties/#sls.prop.decl.types) | [`syntax: properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/properties.slint) |
| [`sls.prop.decl.default`](/language/properties/#sls.prop.decl.default) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |

### Bindings

| Paragraph | Tests |
| --- | --- |
| [`sls.binding.form`](/language/bindings/#sls.binding.form) | [`case: component/background_color.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/background_color.slint)<br/>[`syntax: color_literals.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/color_literals.slint) |
| [`sls.binding.target-must-exist`](/language/bindings/#sls.binding.target-must-exist) | [`syntax: bindings.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/bindings.slint) |
| [`sls.type.kinds`](/language/bindings/#sls.type.kinds) | ❌ |
| [`sls.type.conversions`](/language/bindings/#sls.type.conversions) | [`syntax: binding_types.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/binding_types.slint) |
| [`sls.binding.type`](/language/bindings/#sls.binding.type) | [`syntax: binding_types.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/binding_types.slint) |

### Expressions

| Paragraph | Tests |
| --- | --- |
| [`sls.expr.forms`](/language/expressions/#sls.expr.forms) | [`syntax: bindings.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/bindings.slint) |
| [`sls.expr.color.forms`](/language/expressions/#sls.expr.color.forms) | [`syntax: color_literals.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/color_literals.slint) |
| [`sls.expr.color.channels`](/language/expressions/#sls.expr.color.channels) | [`case: expr/color_literals.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/expr/color_literals.slint) |
| [`sls.expr.color.short-forms`](/language/expressions/#sls.expr.color.short-forms) | [`case: expr/color_literals.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/expr/color_literals.slint) |
| [`sls.expr.color.type`](/language/expressions/#sls.expr.color.type) | ❌ |
| [`sls.expr.length.form`](/language/expressions/#sls.expr.length.form) | [`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint)<br/>[`syntax: length_literal_space.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/length_literal_space.slint)<br/>[`syntax: units.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/units.slint) |
| [`sls.expr.length.integral`](/language/expressions/#sls.expr.length.integral) | [`syntax: units.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/units.slint) |
| [`sls.expr.length.px-only`](/language/expressions/#sls.expr.length.px-only) | [`syntax: units.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/units.slint) |
| [`sls.expr.length.type`](/language/expressions/#sls.expr.length.type) | [`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint) |

### Geometry

| Paragraph | Tests |
| --- | --- |
| [`sls.geom.properties`](/language/geometry/#sls.geom.properties) | [`syntax: units.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/units.slint) |
| [`sls.geom.relative`](/language/geometry/#sls.geom.relative) | [`case: component/rectangle_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_nesting.slint) |
| [`sls.geom.window.root`](/language/geometry/#sls.geom.window.root) | [`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint)<br/>[`syntax: geometry_root.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/geometry_root.slint) |
| [`sls.geom.window`](/language/geometry/#sls.geom.window) | [`syntax: elements.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/elements.slint) |
| [`sls.geom.default-position`](/language/geometry/#sls.geom.default-position) | [`case: component/baseless_implicit_size.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/baseless_implicit_size.slint)<br/>[`case: component/rectangle_centered.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_centered.slint)<br/>[`case: component/rectangle_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_nesting.slint) |
| [`sls.geom.default-size`](/language/geometry/#sls.geom.default-size) | [`case: component/rectangle_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_nesting.slint) |

### Colors and Brushes

| Paragraph | Tests |
| --- | --- |
| [`sls.type.color`](/reference/property-types/colors-and-brushes/#sls.type.color) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.type.brush`](/reference/property-types/colors-and-brushes/#sls.type.brush) | [`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint) |
| [`sls.type.convert.color-to-brush`](/reference/property-types/colors-and-brushes/#sls.type.convert.color-to-brush) | [`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint)<br/>[`syntax: binding_types.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/binding_types.slint) |

### Primitive & Numeric Types

| Paragraph | Tests |
| --- | --- |
| [`sls.type.length`](/reference/property-types/numeric-types/#sls.type.length) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint)<br/>[`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint) |

## SC API Reference

### Rectangle

| Paragraph | Tests |
| --- | --- |
| [`sls.ref.rectangle.background`](/reference/rectangle/#sls.ref.rectangle.background) | [`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint) |
| [`sls.ref.rectangle.empty`](/reference/rectangle/#sls.ref.rectangle.empty) | [`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint) |

### Window

| Paragraph | Tests |
| --- | --- |
| [`sls.ref.window.background`](/reference/window/#sls.ref.window.background) | [`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint) |

## Safety Manual

### Generated Code

| Paragraph | Tests |
| --- | --- |
| [`sls.gen.output`](/reference/generated-code/#sls.gen.output) | [`rust: tests/driver.rs`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/driver.rs) |
| [`sls.gen.component`](/reference/generated-code/#sls.gen.component) | [`case: component/empty.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/empty.slint)<br/>[`case: component/name.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/name.slint)<br/>[`case: component/user_component.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/user_component.slint) |
| [`sls.gen.window-root`](/reference/generated-code/#sls.gen.window-root) | [`syntax: window_root.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/internal/compiler/tests/syntax/slint-sc/window_root.slint) |
| [`sls.gen.new`](/reference/generated-code/#sls.gen.new) | [`case: component/empty.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/empty.slint) |
| [`sls.gen.render-rgb8`](/reference/generated-code/#sls.gen.render-rgb8) | [`case: component/window_background.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/window_background.slint) |
| [`sls.gen.render-error`](/reference/generated-code/#sls.gen.render-error) | [`case: component/window_background.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/window_background.slint) |
| [`sls.gen.prop.field`](/reference/generated-code/#sls.gen.prop.field) | ❌ |
| [`sls.gen.prop.names`](/reference/generated-code/#sls.gen.prop.names) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.gen.prop.get`](/reference/generated-code/#sls.gen.prop.get) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.gen.prop.set`](/reference/generated-code/#sls.gen.prop.set) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |
| [`sls.gen.prop.types`](/reference/generated-code/#sls.gen.prop.types) | [`case: component/properties.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/properties.slint) |

### Rendering

| Paragraph | Tests |
| --- | --- |
| [`sls.paint.invocation`](/reference/rendering/#sls.paint.invocation) | ❌ |
| [`sls.paint.model`](/reference/rendering/#sls.paint.model) | [`case: component/rectangle_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_nesting.slint)<br/>[`case: component/rectangle_position.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_position.slint) |
| [`sls.paint.order`](/reference/rendering/#sls.paint.order) | [`case: component/rectangle_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_nesting.slint) |
| [`sls.paint.clip`](/reference/rendering/#sls.paint.clip) | [`case: component/rectangle_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_nesting.slint)<br/>[`case: component/rectangle_wider_than_window.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_wider_than_window.slint) |
| [`sls.paint.no-parent-clip`](/reference/rendering/#sls.paint.no-parent-clip) | [`case: component/rectangle_nesting.slint`](https://github.com/slint-ui/slint/blob/2d33ec83a38459addc8ebed489749ba0c80e8e5b/api/slint-sc/tests/cases/component/rectangle_nesting.slint) |