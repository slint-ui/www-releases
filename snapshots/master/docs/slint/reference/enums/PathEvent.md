---
title: "PathEvent"
description: "PathEvent content"
---
<!-- Generated with slint-doc-generator from internal/commons/enums.rs -->

`PathEvent`

 PathEvent is a low-level data structure describing the composition of a path. Typically it is
 generated at compile time from a higher-level description, such as SVG commands.

* **`begin`**:  The beginning of the path.
* **`line`**:  A straight line on the path.
* **`quadratic`**:  A quadratic bezier curve on the path.
* **`cubic`**:  A cubic bezier curve on the path.
* **`end-open`**:  The end of the path that remains open.
* **`end-closed`**:  The end of a path that is closed.