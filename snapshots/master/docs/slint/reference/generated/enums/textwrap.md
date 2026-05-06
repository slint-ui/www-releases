---
title: "TextWrap"
description: "TextWrap content"
---
<!-- Generated with slint-doc-generator from internal/commons/enums.rs -->

`TextWrap`

 This enum describes the how the text wraps if it is too wide to fit in the width of a `Text` or `StyledText` element.

* **`no-wrap`**:  The text won't wrap, but instead will overflow.
* **`word-wrap`**:  The text will be wrapped at word boundaries if possible, or at any location for very long words.
* **`char-wrap`**:  The text will be wrapped at any character. Currently only supported by the Qt and Software renderers.