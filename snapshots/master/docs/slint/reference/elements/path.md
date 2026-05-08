---
title: "Path"
description: "Path element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';

The `Path` element allows rendering a generic shape, composed of different geometric commands. A path
shape can be filled and outlined.

When not part of a layout, its width or height defaults to 100% of the parent element when not specified.

A path can be defined in two different ways:

-   Using SVG path commands as a string
-   Using path command elements in `.slint` markup.

The coordinates used in the geometric commands are within the imaginary coordinate system of the path.
When rendering on the screen, the shape is drawn relative to the `x` and `y` properties. If the `width`
and `height` properties are non-zero, then the entire shape is fit into these bounds - by scaling
accordingly.

## Properties

### fill
<SlintProperty propName="fill" typeName="brush">
The color for filling the shape of the path.
</SlintProperty>

### fill-rule
<SlintProperty propName="fill-rule" typeName="enum" enumName="FillRule" defaultValue="nonzero">
The fill rule to use for the path.
</SlintProperty>

### stroke
<SlintProperty propName="stroke" typeName="brush">
The color for drawing the outline of the path.
</SlintProperty>

### stroke-width
<SlintProperty propName="stroke-width" typeName="length">
The width of the outline.
</SlintProperty>

### stroke-line-cap
<SlintProperty propName="stroke-line-cap" typeName="enum" enumName="LineCap" defaultValue="butt">
The appearance of the ends of the path's outline.
</SlintProperty>

### stroke-line-join
<SlintProperty propName="stroke-line-join" typeName="enum" enumName="LineJoin" defaultValue="miter">
The appearance of the joins between segments of stroked paths.
</SlintProperty>

### stroke-miter-limit
<SlintProperty propName="stroke-miter-limit" typeName="float" defaultValue="4">
The limit on the ratio of the miter length to the stroke width when `stroke-line-join` is set to `miter`.
When the limit is exceeded, the join is rendered as a bevel instead.
</SlintProperty>

### width
<SlintProperty propName="width" typeName="length">
If non-zero, the path will be scaled to fit into the specified width.
</SlintProperty>

### height
<SlintProperty propName="height" typeName="length">
If non-zero, the path will be scaled to fit into the specified height.
</SlintProperty>

## Viewbox Properties

### viewbox-x
<SlintProperty propName="viewbox-x" typeName="float"/>

### viewbox-y
<SlintProperty propName="viewbox-y" typeName="float"/>

### viewbox-width
<SlintProperty propName="viewbox-width" typeName="float"/>

### viewbox-height
<SlintProperty propName="viewbox-height" typeName="float"/>

These four properties allow defining the position and size of the viewport of the path in path coordinates.

If the `viewbox-width` or `viewbox-height` is less or equal than zero, the viewbox properties are
ignored and instead the bounding rectangle of all path elements is used to define the view port.

### fit
<SlintProperty propName="fit" typeName="enum" enumName="ImageFit" defaultValue="contain">
Defines how the path's view box is scaled to fit the element's width and height.
If no view box is defined, the implicit bounding rectangle is used.
</SlintProperty>

### clip
<SlintProperty propName="clip" typeName="bool" defaultValue="false"/>

 By default, when a path has a view box defined and the elements render
outside of it, they are still rendered. When this property is set to `true`, then rendering will be
clipped at the boundaries of the view box.

### anti-alias
<SlintProperty propName="anti-alias" typeName="bool" defaultValue="true"/>

 By default, the fill and stroke of a path is rendered with anti-aliasing, for best quality. Some GPUs
 have performance issues when rendering with anti-aliasing and animation. Setting the value to `false`
 might improve the frame-rate at the expense of a smoother looking path.

## Path Using SVG Commands

SVG is a popular file format for defining scalable graphics, which are often composed of paths. In SVG
paths are composed using [commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands),
which in turn are written in a string. In `.slint` the path commands are provided to the `commands`
property. The following example renders a shape consists of an arc and a rectangle, composed of `line-to`,
`move-to` and `arc` commands:

```slint
export component Example inherits Path {
    width: 100px;
    height: 100px;
    commands: "M 0 0 L 0 100 A 1 1 0 0 0 100 100 L 100 0 Z";
    stroke: red;
    stroke-width: 1px;
}
```

The commands are provided in a property:

### Commands
<SlintProperty propName="commands" typeName="string">
A string providing the commands according to the SVG path specification.
This property can only be set in a binding and cannot be accessed in an expression.
</SlintProperty>

## Path Using SVG Path Elements

The shape of the path can also be described using elements that resemble the SVG path commands but use the
`.slint` markup syntax. The earlier example using SVG commands can also be written like that:

```slint
export component Example inherits Path {
    width: 100px;
    height: 100px;
    stroke: blue;
    stroke-width: 1px;

    MoveTo {
        x: 0;
        y: 0;
    }
    LineTo {
        x: 0;
        y: 100;
    }
    ArcTo {
        radius-x: 1;
        radius-y: 1;
        x: 100;
        y: 100;
    }
    LineTo {
        x: 100;
        y: 0;
    }
    Close {
    }
}
```

Note how the coordinates of the path elements don't use units - they operate within the imaginary
coordinate system of the scalable path.