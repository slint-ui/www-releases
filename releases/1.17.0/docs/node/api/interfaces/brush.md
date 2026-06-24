---
title: "Brush"
---
Defined in: api/node/rust-module.d.cts:387

A brush is a data structure that is used to describe how
a shape, such as a rectangle, path or even text, shall be filled.
A brush can also be applied to the outline of a shape, that means
the fill of the outline itself.

## Properties

### color?

> `optional` **color?**: [`RgbaColor`](/1.17.0/docs/node/api/interfaces/rgbacolor/)

Defined in: api/node/rust-module.d.cts:393

Defines a solid color brush from rgba.

If no color is set it defaults to transparent.