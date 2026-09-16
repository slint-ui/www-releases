---
title: "Image"
description: "Image element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import CodeSnippetMD from '@slint/common-files/src/components/CodeSnippetMD.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';

```slint
Image {
    source: @image-url("mini-banner.png");
}
```

Use the `Image` element to display an
[image](/reference/property-types/images/). \{#sls.meta.image.purpose}

<OnlyInSC>
The element draws the image of its `source` property pixel for pixel:
the image's top-left pixel is at the element's position, and one image
pixel covers one frame-buffer pixel, without scaling. \{#sls.ref.image.draw}

The element is always the size of its source image: `width` and `height`
hold the dimensions of that image, and setting them is an
error. \{#sls.ref.image.size}
</OnlyInSC>

## Properties

### source
<SlintProperty propName="source" typeName="image">
The [image](/reference/property-types/images/) to draw, created with
[`@image-url()`](/language/expressions/#sls.expr.image.form)
or set by the application: by default no image, drawing
nothing. \{#sls.ref.image.source}

Access an `image`'s source dimension using its `source.width` and
`source.height` properties. \{#sls.ref.image.source.dimensions}

```slint
export component Example inherits Window {
    in property <image> some_image: @image-url("images/logo.png");

    out property <int> image-width: some_image.width;
    out property <int> image-height: some_image.height;
}
```
</SlintProperty>