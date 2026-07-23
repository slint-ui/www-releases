---
title: "Traceability Matrix"
description: "Mapping between the requirement paragraphs of the Language Specification and the SC API Reference, and the test cases that verify them."
---
Each requirement paragraph in the [Language Specification](../../language/) and the [SC API Reference](../../reference/) carries a unique identifier,
shown as a `[sls.…]` badge at the end of the paragraph.
A test case declares which requirements it verifies by listing their identifiers in `//#sls.…` comments.
This matrix lists every requirement paragraph with the test cases that declare it.
Requirements not yet covered by any test are marked ❌.
Informative paragraphs — the document conventions (`sls.meta.…`) and examples — are not listed;
the examples are compiled by the doctests test instead.

Tests marked `case:` are executed test cases from `api/slint-sc/tests/cases/`,
tests marked `syntax:` are compiler syntax tests from `internal/compiler/tests/syntax/slint-sc/`.

**Coverage: 43 of 49 requirement paragraphs are covered by at least one test.**

## Slint Language Specification

### Source Files

| Paragraph | Tests |
| --- | --- |
| [`sls.source.file-extension`](../../language/source-files/#sls.source.file-extension) | [`syntax: source_file.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/source_file.slint) |
| [`sls.source.encoding.utf8`](../../language/source-files/#sls.source.encoding.utf8) | [`syntax: bom-encoding.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/bom-encoding.slint) |
| [`sls.source.encoding.bom`](../../language/source-files/#sls.source.encoding.bom) | [`syntax: bom-encoding.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/bom-encoding.slint) |
| [`sls.source.line-terminators`](../../language/source-files/#sls.source.line-terminators) | [`syntax: crlf-line-terminators.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/crlf-line-terminators.slint) |
| [`sls.source.bare-cr`](../../language/source-files/#sls.source.bare-cr) | [`syntax: crlf-line-terminators.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/crlf-line-terminators.slint) |
| [`sls.source.whitespace.chars`](../../language/source-files/#sls.source.whitespace.chars) | [`syntax: whitespace.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/whitespace.slint) |
| [`sls.source.whitespace.collapse`](../../language/source-files/#sls.source.whitespace.collapse) | [`syntax: whitespace.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/whitespace.slint) |
| [`sls.source.comment.line`](../../language/source-files/#sls.source.comment.line) | [`case: component/with_comments.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/with_comments.slint)<br/>[`syntax: comments.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/comments.slint) |
| [`sls.source.comment.block`](../../language/source-files/#sls.source.comment.block) | [`case: component/with_comments.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/with_comments.slint)<br/>[`syntax: comments.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/comments.slint) |
| [`sls.source.comment.whitespace-equivalent`](../../language/source-files/#sls.source.comment.whitespace-equivalent) | [`case: component/with_comments.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/with_comments.slint)<br/>[`syntax: comments.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/comments.slint) |
| [`sls.source.comment.no-doc-comments`](../../language/source-files/#sls.source.comment.no-doc-comments) | [`syntax: comments.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/comments.slint) |

### Lexical Structure

| Paragraph | Tests |
| --- | --- |
| [`sls.lex.tokens`](../../language/lexical-structure/#sls.lex.tokens) | [`syntax: whitespace.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/whitespace.slint) |
| [`sls.lex.identifier.classes`](../../language/lexical-structure/#sls.lex.identifier.classes) | [`syntax: identifiers.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifiers.slint) |
| [`sls.lex.identifier.no-leading-hyphen`](../../language/lexical-structure/#sls.lex.identifier.no-leading-hyphen) | [`syntax: identifier_leading_hyphen.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen.slint)<br/>[`syntax: identifier_leading_hyphen_element_id.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_element_id.slint)<br/>[`syntax: identifier_leading_hyphen_inherits.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_inherits.slint)<br/>[`syntax: identifier_leading_hyphen_property.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifier_leading_hyphen_property.slint) |
| [`sls.lex.identifier.normalization`](../../language/lexical-structure/#sls.lex.identifier.normalization) | [`syntax: identifiers.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifiers.slint) |
| [`sls.lex.identifier.normalization-example`](../../language/lexical-structure/#sls.lex.identifier.normalization-example) | [`syntax: identifier_normalization_collision.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifier_normalization_collision.slint) |
| [`sls.lex.identifier.canonical-form`](../../language/lexical-structure/#sls.lex.identifier.canonical-form) | [`syntax: identifier_normalization_collision.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifier_normalization_collision.slint) |
| [`sls.lex.contextual-keywords`](../../language/lexical-structure/#sls.lex.contextual-keywords) | [`syntax: identifiers.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/identifiers.slint) |

### File Structure

| Paragraph | Tests |
| --- | --- |
| [`sls.file.source-file`](../../language/file-structure/#sls.file.source-file) | [`syntax: source_file.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/source_file.slint) |
| [`sls.file.source-file.empty`](../../language/file-structure/#sls.file.source-file.empty) | [`syntax: empty_file.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/empty_file.slint) |
| [`sls.file.top-level-item`](../../language/file-structure/#sls.file.top-level-item) | [`syntax: enums.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/enums.slint)<br/>[`syntax: globals.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/globals.slint)<br/>[`syntax: source_file.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/source_file.slint)<br/>[`syntax: structs.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/structs.slint) |
| [`sls.file.component.definition-forms`](../../language/file-structure/#sls.file.component.definition-forms) | [`case: component/empty.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/empty.slint)<br/>[`syntax: component_declaration.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/component_declaration.slint) |
| [`sls.file.component.name`](../../language/file-structure/#sls.file.component.name) | [`syntax: source_file.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/source_file.slint) |
| [`sls.file.component.inherits`](../../language/file-structure/#sls.file.component.inherits) | [`syntax: inheritance.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/inheritance.slint) |
| [`sls.file.component.body-braces`](../../language/file-structure/#sls.file.component.body-braces) | [`syntax: source_file.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/source_file.slint) |
| [`sls.file.component.body`](../../language/file-structure/#sls.file.component.body) | [`case: component/nested_rectangles.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/nested_rectangles.slint)<br/>[`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/element_nesting.slint)<br/>[`syntax: for_and_if.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/for_and_if.slint) |
| [`sls.file.component.body.empty`](../../language/file-structure/#sls.file.component.body.empty) | [`case: component/empty.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/empty.slint) |
| [`sls.file.element.instantiation-form`](../../language/file-structure/#sls.file.element.instantiation-form) | [`case: component/nested_rectangles.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/nested_rectangles.slint)<br/>[`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/element_nesting.slint)<br/>[`syntax: elements.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/elements.slint) |
| [`sls.file.element.instantiation-typename`](../../language/file-structure/#sls.file.element.instantiation-typename) | [`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/element_nesting.slint)<br/>[`syntax: elements.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/elements.slint) |
| [`sls.file.element.body`](../../language/file-structure/#sls.file.element.body) | [`case: component/nested_rectangles.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/nested_rectangles.slint)<br/>[`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/element_nesting.slint)<br/>[`syntax: elements.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/elements.slint) |
| [`sls.file.element.tree`](../../language/file-structure/#sls.file.element.tree) | [`case: component/nested_rectangles.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/nested_rectangles.slint)<br/>[`syntax: element_nesting.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/element_nesting.slint)<br/>[`syntax: elements.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/elements.slint) |

### Exports

| Paragraph | Tests |
| --- | --- |
| [`sls.export.placement`](../../language/exports/#sls.export.placement) | [`syntax: source_file.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/source_file.slint) |
| [`sls.export.default-private`](../../language/exports/#sls.export.default-private) | [`syntax: component_declaration.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/component_declaration.slint) |
| [`sls.export.forms`](../../language/exports/#sls.export.forms) | [`syntax: export_specifiers.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/export_specifiers.slint) |
| [`sls.export.declaration-site`](../../language/exports/#sls.export.declaration-site) | [`case: component/empty.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/empty.slint)<br/>[`syntax: component_declaration.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/component_declaration.slint) |
| [`sls.export.list`](../../language/exports/#sls.export.list) | [`syntax: export_specifiers.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/export_specifiers.slint) |
| [`sls.export.rename`](../../language/exports/#sls.export.rename) | [`syntax: export_specifiers.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/export_specifiers.slint) |
| [`sls.export.left-must-exist`](../../language/exports/#sls.export.left-must-exist) | [`syntax: export_specifiers.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/export_specifiers.slint) |
| [`sls.export.no-duplicates`](../../language/exports/#sls.export.no-duplicates) | [`syntax: component_declaration.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/component_declaration.slint) |

### Bindings

| Paragraph | Tests |
| --- | --- |
| [`sls.binding.form`](../../language/bindings/#sls.binding.form) | [`case: component/background_color.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/background_color.slint)<br/>[`syntax: color_literals.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/color_literals.slint) |
| [`sls.binding.target-must-exist`](../../language/bindings/#sls.binding.target-must-exist) | [`syntax: bindings.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/bindings.slint) |
| [`sls.expr.forms`](../../language/bindings/#sls.expr.forms) | [`syntax: bindings.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/bindings.slint) |
| [`sls.expr.color.forms`](../../language/bindings/#sls.expr.color.forms) | [`case: component/background_color.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/api/slint-sc/tests/cases/component/background_color.slint)<br/>[`syntax: color_literals.slint`](https://github.com/slint-ui/slint/blob/10fe9bcb464d86e79c57de8dc09dcd0c70ed5a3e/internal/compiler/tests/syntax/slint-sc/color_literals.slint) |
| [`sls.expr.color.channels`](../../language/bindings/#sls.expr.color.channels) | ❌ |
| [`sls.expr.color.short-forms`](../../language/bindings/#sls.expr.color.short-forms) | ❌ |
| [`sls.expr.color.type`](../../language/bindings/#sls.expr.color.type) | ❌ |

## SC API Reference

### Rectangle

| Paragraph | Tests |
| --- | --- |
| [`sls.ref.rectangle.default-size`](../../reference/rectangle/#sls.ref.rectangle.default-size) | ❌ |
| [`sls.ref.rectangle.background`](../../reference/rectangle/#sls.ref.rectangle.background) | ❌ |

### Window

| Paragraph | Tests |
| --- | --- |
| [`sls.ref.window.geometry-constraints`](../../reference/window/#sls.ref.window.geometry-constraints) | ❌ |