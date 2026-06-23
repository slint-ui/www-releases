---
title: "slint::OklchColor Struct"
---
```cpp
struct OklchColor;
```

```cpp
#include <slint.h>
```

[OklchColor](./) stores the lightness, chroma, hue, and alpha components of a color in the Oklch color space (a perceptually uniform color space).

## Public Attributes

### `lightness`

```cpp
float slint::OklchColor::lightness
```

The lightness component, between 0 (black) and 1 (white).

### `chroma`

```cpp
float slint::OklchColor::chroma
```

The chroma component (saturation), typically between 0 (grayscale) and ~0.4 (vivid).

### `hue`

```cpp
float slint::OklchColor::hue
```

The hue component in degrees between 0 and 360.

### `alpha`

```cpp
float slint::OklchColor::alpha
```

The alpha component, between 0 and 1.