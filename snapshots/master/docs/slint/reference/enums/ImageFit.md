---
title: "ImageFit"
description: "ImageFit content"
---
<!-- Generated with slint-doc-generator from internal/commons/enums.rs -->

`ImageFit`

 This enum defines how the source image or path shall fit into an `Image` or `Path` element.

* **`fill`**:  Scales and stretches the source to fit the width and height of the element.
* **`contain`**:  The source is scaled to fit into the element's dimensions while preserving the aspect ratio.
* **`cover`**:  The source is scaled to cover the element's dimensions while preserving the aspect ratio. If the aspect ratios don't match, the source will be clipped to fit.
* **`preserve`**:  Preserves the size of the source in logical pixels. The source will still be scaled by the scale factor that applies to all elements in the window. Any extra space will be left blank.