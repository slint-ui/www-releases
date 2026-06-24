---
title: "slint::Color Class"
---
```cpp
class Color;
```

```cpp
#include <slint.h>
```

[Color](./) represents a color in the Slint run-time, represented using 8-bit channels for red, green, blue and the alpha (opacity).

## Friends

### `operator==`

```cpp
bool operator==(const Color &lhs, const Color &rhs)=default
```

Returns true if *lhs* has the same values for the individual color channels as *rhs*; false otherwise.

### `operator<<`

```cpp
std::ostream & operator<<(std::ostream &stream, const Color &color)
```

Writes the *color* to the specified *stream* and returns a reference to the stream.

## Public Functions

### `Color`

```cpp
slint::Color::Color()
```

Default constructs a new color that is entirely transparent.

### `Color`

```cpp
slint::Color::Color(const RgbaColor<uint8_t> &col)
```

Constructs a new color from the given RgbaColor\<uint8\_t\> *col*.

### `Color`

```cpp
slint::Color::Color(const RgbaColor<float> &col)
```

Constructs a new color from the given RgbaColor\<float\> *col*.

### `as_argb_encoded`

```cpp
uint32_t slint::Color::as_argb_encoded() const
```

Returns `(alpha, red, green, blue)` encoded as uint32\_t.

### `to_argb_uint`

```cpp
RgbaColor<uint8_t> slint::Color::to_argb_uint() const
```

Converts this color to an [RgbaColor](../rgbacolor/) struct for easy destructuring.

### `to_argb_float`

```cpp
RgbaColor<float> slint::Color::to_argb_float() const
```

Converts this color to an [RgbaColor](../rgbacolor/) struct for easy destructuring.

### `to_hsva`

```cpp
HsvaColor slint::Color::to_hsva() const
```

Convert this color to the HSV color space.

**Returns:** a new [HsvaColor](../hsvacolor/).

### `to_oklch`

```cpp
OklchColor slint::Color::to_oklch() const
```

Convert this color to the Oklch color space.

**Returns:** a new [OklchColor](../oklchcolor/).

### `red`

```cpp
uint8_t slint::Color::red() const
```

Returns the red channel of the color as u8 in the range 0..255.

### `green`

```cpp
uint8_t slint::Color::green() const
```

Returns the green channel of the color as u8 in the range 0..255.

### `blue`

```cpp
uint8_t slint::Color::blue() const
```

Returns the blue channel of the color as u8 in the range 0..255.

### `alpha`

```cpp
uint8_t slint::Color::alpha() const
```

Returns the alpha channel of the color as u8 in the range 0..255.

### `brighter`

```cpp
Color slint::Color::brighter(float factor) const
```

Returns a new version of this color that has the brightness increased by the specified factor. This is done by converting the color to the HSV color space and multiplying the brightness (value) with (1 + factor). The result is converted back to RGB and the alpha channel is unchanged. So for example `brighter(0.2)` will increase the brightness by 20%, and calling `brighter(-0.5)` will return a color that's 50% darker.

### `darker`

```cpp
Color slint::Color::darker(float factor) const
```

Returns a new version of this color that has the brightness decreased by the specified factor. This is done by converting the color to the HSV color space and dividing the brightness (value) by (1 + factor). The result is converted back to RGB and the alpha channel is unchanged. So for example `darker(0.3)` will decrease the brightness by 30%.

### `transparentize`

```cpp
Color slint::Color::transparentize(float factor) const
```

Returns a new version of this color with the opacity decreased by *factor*.

The transparency is obtained by multiplying the alpha channel by `(1 - factor)`.

### `mix`

```cpp
Color slint::Color::mix(const Color &other, float factor) const
```

Returns a new color that is a mix of *this* color and *other*. The specified *factor* is clamped to be between `0.0` and `1.0` and then applied to *this* color, while `1.0 - factor` is applied to *other*.

### `with_alpha`

```cpp
Color slint::Color::with_alpha(float alpha) const
```

Returns a new version of this color with the opacity set to *alpha*.

## Public Static Functions

### `from_argb_encoded`

```cpp
static Color slint::Color::from_argb_encoded(uint32_t argb_encoded)
```

Construct a color from an integer encoded as `0xAARRGGBB`

### `from_argb_uint8`

```cpp
static Color slint::Color::from_argb_uint8(uint8_t alpha, uint8_t red, uint8_t green, uint8_t blue)
```

Construct a color from the alpha, red, green and blue color channel parameters.

### `from_rgb_uint8`

```cpp
static Color slint::Color::from_rgb_uint8(uint8_t red, uint8_t green, uint8_t blue)
```

Construct a color from the red, green and blue color channel parameters. The alpha channel will have the value 255.

### `from_argb_float`

```cpp
static Color slint::Color::from_argb_float(float alpha, float red, float green, float blue)
```

Construct a color from the alpha, red, green and blue color channel parameters.

### `from_rgb_float`

```cpp
static Color slint::Color::from_rgb_float(float red, float green, float blue)
```

Construct a color from the red, green and blue color channel parameters. The alpha channel will have the value 255.

### `from_hsva`

```cpp
static Color slint::Color::from_hsva(float h, float s, float v, float a)
```

Construct a color from the HSV color space components. The hue is expected to be in the range between 0 and 360, and the other parameters between 0 and 1.

### `from_oklch`

```cpp
static Color slint::Color::from_oklch(float l, float c, float h, float a)
```

Construct a color from the Oklch color space components. Oklch is a perceptually uniform color space. The lightness is expected to be in the range between 0 and 1, chroma typically between 0 and 0.4, hue between 0 and 360, and alpha between 0 and 1.