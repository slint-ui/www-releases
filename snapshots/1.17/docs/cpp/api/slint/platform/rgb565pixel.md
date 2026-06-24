---
title: "slint::platform::Rgb565Pixel Struct"
description: "A 16bit pixel that has 5 red bits, 6 green bits and 5 blue bits."
---
```cpp
struct Rgb565Pixel;
```

```cpp
#include <slint-platform.h>
```

A 16bit pixel that has 5 red bits, 6 green bits and 5 blue bits.

## Public Attributes

### `b`

```cpp
uint16_t slint::platform::Rgb565Pixel::b
```

The blue component, encoded in 5 bits.

### `g`

```cpp
uint16_t slint::platform::Rgb565Pixel::g
```

The green component, encoded in 6 bits.

### `r`

```cpp
uint16_t slint::platform::Rgb565Pixel::r
```

The red component, encoded in 5 bits.

## Public Functions

### `Rgb565Pixel`

```cpp
constexpr constexpr slint::platform::Rgb565Pixel::Rgb565Pixel()
```

Default constructor.

### `Rgb565Pixel`

```cpp
explicit constexpr constexpr slint::platform::Rgb565Pixel::Rgb565Pixel(const Rgb8Pixel &pixel)
```

Constructor that constructs from an [Rgb8Pixel](../../rgb8pixel/).

### `red`

```cpp
constexpr constexpr uint8_t uint8_t slint::platform::Rgb565Pixel::red() const
```

Get the red component as an 8-bit value.

The bits are shifted so that the result is between 0 and 255.

**Returns:** The red component as an 8-bit value.

### `green`

```cpp
constexpr constexpr uint8_t uint8_t slint::platform::Rgb565Pixel::green() const
```

Get the green component as an 8-bit value.

The bits are shifted so that the result is between 0 and 255.

**Returns:** The green component as an 8-bit value.

### `blue`

```cpp
constexpr constexpr uint8_t uint8_t slint::platform::Rgb565Pixel::blue() const
```

Get the blue component as an 8-bit value.

The bits are shifted so that the result is between 0 and 255.

**Returns:** The blue component as an 8-bit value.

### `operator Rgb8Pixel`

```cpp
constexpr constexpr slint::platform::Rgb565Pixel::operator Rgb8Pixel() const
```

Convert to [Rgb8Pixel](../../rgb8pixel/).

## Friends

### `operator==`

```cpp
bool operator==(const Rgb565Pixel &lhs, const Rgb565Pixel &rhs)=default
```

Returns true if *lhs* *rhs* are pixels with identical colors.