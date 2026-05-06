---
title: "LayoutAlignment"
description: "LayoutAlignment content"
---
<!-- Generated with slint-doc-generator from internal/commons/enums.rs -->

`LayoutAlignment`

 Enum representing the `alignment` property of a
 `HorizontalBox`, a `VerticalBox`,
 a `HorizontalLayout`, or `VerticalLayout`.

* **`stretch`**:  Use the minimum size of all elements in a layout, distribute remaining space based on `*-stretch` among all elements.
* **`center`**:  Use the preferred size for all elements, distribute remaining space evenly before the first and after the last element.
* **`start`**:  Use the preferred size for all elements, put remaining space after the last element.
* **`end`**:  Use the preferred size for all elements, put remaining space before the first element.
* **`space-between`**:  Use the preferred size for all elements, distribute remaining space evenly between elements.
* **`space-around`**:  Use the preferred size for all elements, distribute remaining space evenly between the elements, and use half spaces at the start and end.
* **`space-evenly`**:  Use the preferred size for all elements, distribute remaining space evenly before the first element, after the last element and between elements.