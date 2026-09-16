---
title: "Image"
description: "Image element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import CodeSnippetMD from '@slint/common-files/src/components/CodeSnippetMD.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';

<CodeSnippetMD imagePath="/src/assets/generated/image-1.png" imageAlt="image example" imageWidth="300" imageHeight="200">
```slint
Image {
    source: @image-url("mini-banner.png");
}
```
</CodeSnippetMD>

Use the `Image` element to display an
[image](/reference/property-types/images/). \{#sls.meta.image.purpose}

## Properties

### colorize
<SlintProperty propName="colorize" typeName="brush">
When set, the image is used as an alpha mask and is drawn in the given color (or with the gradient).
<CodeSnippetMD imagePath="/src/assets/generated/image-2.png" imageAlt="image example" imageWidth="300" imageHeight="200">
```slint
Image {
    source: @image-url("slint-logo-simple-dark.png");
    colorize: darkorange;
}
```
</CodeSnippetMD>
</SlintProperty>

### source
<SlintProperty propName="source" typeName="image">
The [image](/reference/property-types/images/) to draw, created with
[`@image-url()`](/reference/language/expressions/#sls.expr.image.form)
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

### image-fit
<SlintProperty propName="image-fit" typeName="enum" enumName="ImageFit" defaultValue="`contain` when the `Image` element is part of a layout, `fill` otherwise">
<CodeSnippetMD imagePath="/src/assets/generated/image-3.png" imageAlt="image fill example" imageWidth="300" imageHeight="200">
```slint
Image {
    width: 200px; height: 50px;
    source: @image-url("mini-banner.png");
    image-fit: fill;
}
```
</CodeSnippetMD>

<CodeSnippetMD imagePath="/src/assets/generated/image-4.png" imageAlt="image contain example" imageWidth="300" imageHeight="200">
```slint
Image {
    width: 250px; height: 40px;
    source: @image-url("mini-banner.png");
    image-fit: contain;
}
```
</CodeSnippetMD>

<CodeSnippetMD imagePath="/src/assets/generated/image-5.png" imageAlt="image cover example" imageWidth="300" imageHeight="200">
```slint
Image {
    width: 250px; height: 250px;
    source: @image-url("mini-banner.png");
    image-fit: cover;
}
```
</CodeSnippetMD>

<CodeSnippetMD imagePath="/src/assets/generated/image-6.png" imageAlt="image preserve example" imageWidth="400" imageHeight="400">
```slint
Image {
    width: 400px; height: 400px;
    source: @image-url("mini-banner.png");
    image-fit: preserve;
}
```
</CodeSnippetMD>
</SlintProperty>

### image-rendering
<SlintProperty propName="image-rendering" typeName="enum" enumName="ImageRendering" defaultValue="smooth">
<CodeSnippetMD imagePath="/src/assets/generated/image-7.png" imageAlt="image smooth example" imageWidth="300" imageHeight="300">
```slint
Image {
    width: 800px;
    source: @image-url("mini-banner.png");
    image-rendering: smooth;
}
```
</CodeSnippetMD>

<CodeSnippetMD imagePath="/src/assets/generated/image-8.png" imageAlt="image pixelated example" imageWidth="300" imageHeight="300">
```slint
Image {
    width: 800px;
    source: @image-url("mini-banner.png");
    image-rendering: pixelated;
}
```
</CodeSnippetMD>
</SlintProperty>

### horizontal-alignment
<SlintProperty propName="horizontal-alignment" typeName="enum" enumName="ImageHorizontalAlignment" defaultValue="center">
The horizontal alignment of the image within the element.
</SlintProperty>

### vertical-alignment
<SlintProperty propName="vertical-alignment" typeName="enum" enumName="ImageVerticalAlignment" defaultValue="center">
The vertical alignment of the image within the element.
</SlintProperty>

## Image Tiling


### horizontal-tiling
<SlintProperty propName="horizontal-tiling" typeName="enum" enumName="ImageTiling" defaultValue="none">
How the image is tiled horizontally.
</SlintProperty>

### vertical-tiling
<SlintProperty propName="vertical-tiling" typeName="enum" enumName="ImageTiling" defaultValue="none">
<CodeSnippetMD imagePath="/src/assets/generated/image-9.png" imageAlt="image horizontal tiling repeat example" imageWidth="400" imageHeight="400">
```slint
Image {
    width: 400px;
    height: 400px;
    source: @image-url("slint-logo.png");
    horizontal-tiling: repeat;
}
```
</CodeSnippetMD>

<CodeSnippetMD imagePath="/src/assets/generated/image-10.png" imageAlt="image horizontal tiling round example" imageWidth="400" imageHeight="400">
```slint
Image {
    width: 400px;
    height: 400px;
    source: @image-url("slint-logo.png");
    horizontal-tiling: round;
}
```
</CodeSnippetMD>
<CodeSnippetMD imagePath="/src/assets/generated/image-11.png" imageAlt="image vertical tiling repeat example" imageWidth="400" imageHeight="400">
```slint
Image {
    width: 400px;
    height: 400px;
    source: @image-url("slint-logo.png");
    vertical-tiling: repeat;
}
```
</CodeSnippetMD>

<CodeSnippetMD imagePath="/src/assets/generated/image-12.png" imageAlt="image vertical tiling round example" imageWidth="400" imageHeight="400">
```slint
Image {
    width: 400px;
    height: 400px;
    source: @image-url("slint-logo.png");
    vertical-tiling: round;
}
```
</CodeSnippetMD>

<CodeSnippetMD imagePath="/src/assets/generated/image-13.png" imageAlt="image vertical and horizontal tiling round example" imageWidth="400" imageHeight="400">
```slint
Image {
    width: 400px;
    height: 400px;
    source: @image-url("slint-logo.png");
    vertical-tiling: round;
    horizontal-tiling: round;
}
```
</CodeSnippetMD>
</SlintProperty>

## Source Clip


### source-clip-x
<SlintProperty propName="source-clip-x" typeName="int"/>

### source-clip-y
<SlintProperty propName="source-clip-y" typeName="int"/>

### source-clip-width
<SlintProperty propName="source-clip-width" typeName="int" defaultValue="source.width - source.clip-x"/>

### source-clip-height
<SlintProperty propName="source-clip-height" typeName="int" defaultValue="source.height - source.clip-y"/>

Properties in source image coordinates that define the region of the source image that is rendered.
By default the entire source image is visible:


<NotInSC>
## Accessibility

### Alternative text

Consider giving an alternative text description of your image by setting the `accessible-label` property:

```slint
Image {
    width: 100px;
    height: 100px;
    source: @image-url("slint-logo.png");
    accessible-label: "Slint logo";
}
```

### Filtering out images for users of assistive technologies

By default, images have the `accessible-role` property set to `image`.
If your image is purely decorative and doesn't convey any information,
consider removing it from the accessibility tree:

```slint
Image {
    source: @image-url("mini-banner.png");
    accessible-role: none;
}
```
</NotInSC>