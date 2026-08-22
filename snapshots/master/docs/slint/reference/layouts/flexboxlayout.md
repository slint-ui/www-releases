---
title: "FlexboxLayout"
description: "FlexboxLayout element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import CodeSnippetMD from '@slint/common-files/src/components/CodeSnippetMD.astro';

`FlexboxLayout` is a flexible box layout that arranges its children in rows or columns with automatic wrapping. It implements a CSS Flexbox-like layout model suitable for creating flexible, responsive UIs.


<CodeSnippetMD imagePath="/src/assets/generated/flexbox-layout-1.png" imageAlt="flexboxlayout example with row direction" imageWidth="300" imageHeight="150">
```slint playground
// This example demonstrates FlexboxLayout with row direction (default)
export component Foo inherits Window {
    width: 300px;
    height: 150px;
    FlexboxLayout {
        spacing: 8px;
        padding: 8px;
        flex-direction: row;
        Rectangle { background: red; width: 60px; height: 50px; }
        Rectangle { background: blue; width: 60px; height: 50px; }
        Rectangle { background: yellow; width: 60px; height: 50px; }
        Rectangle { background: green; width: 60px; height: 50px; }
        Rectangle { background: purple; width: 60px; height: 50px; }
    }
}
```
</CodeSnippetMD>


<CodeSnippetMD imagePath="/src/assets/generated/flexbox-layout-2.png" imageAlt="flexboxlayout example with column direction" imageWidth="200" imageHeight="300">
```slint playground
// This example demonstrates FlexboxLayout with column direction
export component Foo inherits Window {
    width: 200px;
    height: 300px;
    FlexboxLayout {
        spacing: 8px;
        padding: 8px;
        flex-direction: column;
        Rectangle { background: red; width: 50px; height: 60px; }
        Rectangle { background: blue; width: 50px; height: 60px; }
        Rectangle { background: yellow; width: 50px; height: 60px; }
        Rectangle { background: green; width: 50px; height: 60px; }
        Rectangle { background: purple; width: 50px; height: 60px; }
    }
}
```
</CodeSnippetMD>

## Overview

In row direction, items are placed from left to right. When the available width is exceeded, items automatically wrap to the next row. In column direction, items are placed from top to bottom and wrap to the next column when the available height is exceeded.

## Spacing Properties


### spacing
<SlintProperty propName="spacing" typeName="length">
The distance between the elements in the layout. CSS Flexbox usually calls this "gap", but "spacing" is used in Slint for consistency with other layout types.
This single value is applied as both horizontal and vertical spacing between items.
</SlintProperty>

To target specific directions with different values use the following properties:


### spacing-horizontal
<SlintProperty propName="spacing-horizontal" typeName="length">
The horizontal distance between items in the layout. CSS Flexbox calls this "column-gap".
</SlintProperty>

### spacing-vertical
<SlintProperty propName="spacing-vertical" typeName="length">
The vertical distance between items in the layout. CSS Flexbox calls this "row-gap".
</SlintProperty>

## Padding Properties

### padding
<SlintProperty propName="padding" typeName="length">
The padding around the layout as a whole. This single value is applied to all sides.
</SlintProperty>

To target specific sides with different values use the following properties:

### padding-left
<SlintProperty propName="padding-left" typeName="length"/>

### padding-right
<SlintProperty propName="padding-right" typeName="length"/>

### padding-top
<SlintProperty propName="padding-top" typeName="length"/>

### padding-bottom
<SlintProperty propName="padding-bottom" typeName="length"/>

## Alignment Properties


### alignment
<SlintProperty propName="alignment" typeName="enum" enumName="LayoutAlignment" defaultValue="start">
Set the alignment of items along the main axis. CSS Flexbox calls this "justify-content".
With `stretch`, items grow along the main axis to fill each line,
weighted by their `horizontal-stretch` (row) or `vertical-stretch` (column) factor.
When every factor is 0, the free space is split evenly.
Use `max-width`/`max-height` to cap an item's growth;
space a capped item cannot take stays free at the end of the line.
CSS Flexbox expresses this per item with `flex-grow` instead.
</SlintProperty>

## Direction Properties


### flex-direction
<SlintProperty propName="flex-direction" typeName="enum" enumName="FlexboxLayoutDirection">
The primary direction in which items are placed. Set to `row` to place items horizontally left-to-right (default), or `column` to place items vertically top-to-bottom.
It also supports `row-reverse` and `column-reverse` which invert the flow: `row-reverse` places items right-to-left (starting at the right edge), and `column-reverse` places items bottom-to-top (starting at the bottom edge).
</SlintProperty>

### cross-axis-line-alignment
<SlintProperty propName="cross-axis-line-alignment" typeName="enum" enumName="CrossAxisLineAlignment">
Set the distribution of flex lines along the cross axis. CSS Flexbox calls this "align-content";
the name here pairs with `cross-axis-alignment`, which aligns the items within one line.
The default value is `stretch`.
</SlintProperty>

### cross-axis-alignment
<SlintProperty propName="cross-axis-alignment" typeName="enum" enumName="CrossAxisAlignment">
Set the alignment of individual items along the cross axis within each flex line.
The default value is `stretch`.
</SlintProperty>

### flex-wrap
<SlintProperty propName="flex-wrap" typeName="enum" enumName="FlexboxLayoutWrap">
Controls whether flex items wrap onto multiple lines when they don't fit in the container.
The default value is `wrap`.
</SlintProperty>

## Cell elements
Cell elements inside a `FlexboxLayout` obtain the following new properties:

### cross-axis-self-alignment
<SlintProperty propName="cross-axis-self-alignment" typeName="enum" enumName="CrossAxisSelfAlignment" defaultValue="auto">
Overrides the container's `cross-axis-alignment` for this element. CSS Flexbox calls this "align-self".
The default value `auto` uses the container's `cross-axis-alignment`.
</SlintProperty>

### layout-order
<SlintProperty propName="layout-order" typeName="int" defaultValue="0">
Controls the visual order of the items, like the CSS `order` property:
items are laid out in ascending order value, and items with the same value keep
their declaration order.
```slint no-test
FlexboxLayout {
    Rectangle { layout-order: 2; }
    Rectangle { layout-order: 1; }  // appears first
}
```
</SlintProperty>

The other CSS per-item flexbox properties are expressed with the properties the
other layouts already use:

| CSS           | Slint                                                          |
| ------------- | -------------------------------------------------------------- |
| `flex-grow`   | `alignment: stretch` on the container, weighted per item by `horizontal-stretch` / `vertical-stretch`; `max-width` / `max-height` caps growing (space a capped item cannot take stays free) |
| `flex-shrink` | nothing to opt into: every item shrinks, in proportion to its preferred size; `min-width` / `min-height` refuses shrinking |
| `flex-basis`  | `preferred-width` (row) / `preferred-height` (column)          |
| `align-self`  | `cross-axis-self-alignment`                                    |

## Layout Behavior

The layouting algorithm for FlexboxLayout is entirely implemented by <a href="https://github.com/DioxusLabs/taffy">taffy</a>

You can learn more about the CSS Flexbox specification from
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts">the Mozilla developer website</a>
- <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide To Flexbox by CSS Tricks</a>. This is detailed guide with illustrations and comprehensive written explanation of the different Flexbox properties and how they work.