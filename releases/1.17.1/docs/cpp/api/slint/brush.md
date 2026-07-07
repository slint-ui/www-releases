---
title: "slint::Brush Class"
---
```cpp
class Brush;
```

```cpp
#include <slint.h>
```

[Brush](./) is used to declare how to fill or outline shapes, such as rectangles, paths or text. A brush is either a solid color or a linear gradient.

## Friends

### `operator==`

```cpp
bool operator==(const Brush &a, const Brush &b)
```

Returns true if *a* is equal to *b*. If *a* holds a color, then *b* must also hold a color that is identical to *a's* color. If it holds a gradient, then the gradients must be identical. Returns false if the brushes differ in what they hold or their respective color or gradient are not equal.

:::note
Radial and conic gradient brushes store center and radius as fake header stops whose position fields use NaN as a sentinel for "use the bounding box default" and a negative value for the default radius. Two brushes with default (NaN / negative) metadata compare equal, matching the Rust `PartialEq` semantics. A plain memory comparison would treat NaN != NaN and give incorrect results, hence this custom function.
:::

### `operator!=`

```cpp
bool operator!=(const Brush &a, const Brush &b)
```

Returns true if *a* is not equal to *b*; false otherwise.

## Public Functions

### `Brush`

```cpp
slint::Brush::Brush()
```

Constructs a new brush that is a transparent color.

### `Brush`

```cpp
slint::Brush::Brush(const Color &color)
```

Constructs a new brush that is of color *color*.

### `color`

```cpp
Color slint::Brush::color() const
```

Returns the color of the brush. If the brush is a gradient, this function returns the color of the first stop.

### `brighter`

```cpp
Brush slint::Brush::brighter(float factor) const
```

Returns a new version of this brush that has the brightness increased by the specified factor. This is done by calling [Color::brighter](../color/#brighter) on all the colors of this brush.

### `darker`

```cpp
Brush slint::Brush::darker(float factor) const
```

Returns a new version of this color that has the brightness decreased by the specified factor. This is done by calling [Color::darker](../color/#darker) on all the colors of this brush.

### `transparentize`

```cpp
Brush slint::Brush::transparentize(float factor) const
```

Returns a new version of this brush with the opacity decreased by *factor*.

This is done by calling [Color::transparentize](../color/#transparentize) on all the colors of this brush.

### `with_alpha`

```cpp
Brush slint::Brush::with_alpha(float alpha) const
```

Returns a new version of this brush with the related color's opacities set to *alpha*.