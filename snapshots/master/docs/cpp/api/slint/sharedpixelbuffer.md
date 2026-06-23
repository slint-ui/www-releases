---
title: "slint::SharedPixelBuffer Struct"
---
```cpp
template <typename Pixel>
struct SharedPixelBuffer;
```

```cpp
#include <slint.h>
```

[SharedPixelBuffer](./) is a container for storing image data as pixels. It is internally reference counted and cheap to copy.

You can construct a new empty shared pixel buffer with its default constructor, or you can copy it from an existing contiguous buffer that you might already have, using the range constructor.

See the documentation for [Image](../image/) for examples how to use this type to integrate Slint with external rendering functions.

## Public Functions

### `SharedPixelBuffer`

```cpp
slint::SharedPixelBuffer<Pixel>::SharedPixelBuffer()=default
```

Construct an empty [SharedPixelBuffer](./).

### `SharedPixelBuffer`

```cpp
slint::SharedPixelBuffer<Pixel>::SharedPixelBuffer(uint32_t width, uint32_t height)
```

Construct a [SharedPixelBuffer](./) with the given *width* and *height*. The pixels are default initialized.

### `SharedPixelBuffer`

```cpp
slint::SharedPixelBuffer<Pixel>::SharedPixelBuffer(uint32_t width, uint32_t height, const Pixel *data)
```

Construct a [SharedPixelBuffer](./) by copying the data from the *data* array. The array must be of size *width* \* *height* .

### `width`

```cpp
uint32_t slint::SharedPixelBuffer<Pixel>::width() const
```

Returns the width of the buffer in pixels.

### `height`

```cpp
uint32_t slint::SharedPixelBuffer<Pixel>::height() const
```

Returns the height of the buffer in pixels.

### `begin`

```cpp
const Pixel * slint::SharedPixelBuffer<Pixel>::begin() const
```

Returns a const pointer to the first pixel of this buffer.

### `end`

```cpp
const Pixel * slint::SharedPixelBuffer<Pixel>::end() const
```

Returns a const pointer past this buffer.

### `begin`

```cpp
Pixel * slint::SharedPixelBuffer<Pixel>::begin()
```

Returns a pointer to the first pixel of this buffer.

### `end`

```cpp
Pixel * slint::SharedPixelBuffer<Pixel>::end()
```

Returns a pointer past this buffer.

### `cbegin`

```cpp
const Pixel * slint::SharedPixelBuffer<Pixel>::cbegin() const
```

Returns a const pointer to the first pixel of this buffer.

### `cend`

```cpp
const Pixel * slint::SharedPixelBuffer<Pixel>::cend() const
```

Returns a const pointer past this buffer.

### `operator==`

```cpp
bool slint::SharedPixelBuffer<Pixel>::operator==(const SharedPixelBuffer &other) const =default
```

Compare two SharedPixelBuffers. They are considered equal if all their pixels are equal.