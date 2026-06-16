---
title: "Rectangle"
description: "Rectangle element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import CodeSnippetMD from '@slint/common-files/src/components/CodeSnippetMD.astro';

By default, a `Rectangle` is just an empty item that shows nothing. By setting a color or configuring a border,
it's then possible to draw a rectangle on the screen.

When not part of a layout, its width and height default to 100% of the parent element.

```slint playground
export component ExampleRectangle inherits Window {
    width: 200px; height: 800px; background: transparent;

    Rectangle {
        x: 10px; y: 10px;
        width: 180px;
        height: 180px;
        background: #315afd;
    }

    // Rectangle with a border
    Rectangle {
        x: 10px; y: 210px;
        width: 180px;
        height: 180px;
        background: green;
        border-width: 2px;
        border-color: red;
    }

    // Transparent Rectangle with a border and a radius
    Rectangle {
        x: 10px; y: 410px;
        width: 180px;
        height: 180px;
        border-width: 4px;
        border-color: black;
        border-radius: 30px;
    }

    // A radius of width/2 makes it a circle
    Rectangle {
        x: 10px; y: 610px;
        width: 180px;
        height: 180px;
        background: yellow;
        border-width: 2px;
        border-color: blue;
        border-radius: self.width/2;
    }
}
```

## Properties

### background
<SlintProperty propName="background" typeName="brush" defaultValue="transparent">
The background brush of this `Rectangle`.

```slint
property <brush> rainbow-gradient: @linear-gradient(40deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%);

Rectangle {
    x: 10px;
    y: 10px;
    width: 180px;
    height: 180px;
    background: #315afd;
}


Rectangle {
    x: 10px;
    y: 210px;
    width: 180px;
    height: 180px;
    background: rainbow-gradient;
}
```
</SlintProperty>