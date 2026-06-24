---
title: "slint::RgbaColor Struct"
---
```cpp
template <typename T>
struct RgbaColor;
```

```cpp
#include <slint.h>
```

[RgbaColor](./) stores the red, green, blue and alpha components of a color with the precision of the template parameter T. For example if T is float, the values are normalized between 0 and 1. If T is uint8\_t, they values range is 0 to 255.

## Public Attributes

### `alpha`

```cpp
T slint::RgbaColor<T>::alpha
```

The alpha component.

### `red`

```cpp
T slint::RgbaColor<T>::red
```

The red component.

### `green`

```cpp
T slint::RgbaColor<T>::green
```

The green component.

### `blue`

```cpp
T slint::RgbaColor<T>::blue
```

The blue component.

## Public Functions

### `RgbaColor`

```cpp
slint::RgbaColor<T>::RgbaColor(const Color &col)
```

Creates a new [RgbaColor](./) instance from a given color. This template function is specialized and thus implemented for T == uint8\_t and T == float.

### `RgbaColor`

```cpp
slint::RgbaColor<uint8_t>::RgbaColor(const Color &color)
```

Constructs a new RgbaColor\<uint8\_t\> from the color *color*.

### `RgbaColor`

```cpp
slint::RgbaColor<float>::RgbaColor(const Color &color)
```

Constructs a new RgbaColor\<float\> from the color *color*.