---
title: "slint::platform::SoftwareRenderer Class"
---
```cpp
class SoftwareRenderer;
```

```cpp
#include <slint-platform.h>
```

**Inherits** [slint::platform::AbstractRenderer](../abstractrenderer/).

Slint's software renderer.

To be used as a template parameter of the [WindowAdapter](../windowadapter/).

Use the [render()](./#render) function to render in a buffer

## Types
- [PhysicalRegion](../softwarerenderer-physicalregion/)

## Public Types

### `RepaintBufferType`

```cpp
enum class RepaintBufferType
```

| Value | Description |
| --- | --- |
| `NewBuffer` | The full window is always redrawn. No attempt at partial rendering will be made. |
| `ReusedBuffer` |  |
| `SwappedBuffers` |  |

This enum describes which parts of the buffer passed to the [SoftwareRenderer](./) may be re-used to speed up painting.

### `RenderingRotation`

```cpp
enum class RenderingRotation
```

| Value | Description |
| --- | --- |
| `NoRotation` | No rotation. |
| `Rotate90` | Rotate 90° to the left. |
| `Rotate180` | 180° rotation (upside-down) |
| `Rotate270` | Rotate 90° to the right. |

This enum describes the rotation that is applied to the buffer when rendering. To be used in [set\_rendering\_rotation()](./#set_rendering_rotation)

## Public Functions

### `~SoftwareRenderer` (virtual)

```cpp
slint::platform::SoftwareRenderer::~SoftwareRenderer()
```

### `SoftwareRenderer`

```cpp
slint::platform::SoftwareRenderer::SoftwareRenderer(const SoftwareRenderer &)=delete
```

### `operator=`

```cpp
SoftwareRenderer & slint::platform::SoftwareRenderer::operator=(const SoftwareRenderer &)=delete
```

### `SoftwareRenderer`

```cpp
explicit slint::platform::SoftwareRenderer::SoftwareRenderer(RepaintBufferType buffer_type)
```

Constructs a new [SoftwareRenderer](./) with the *buffer\_type* as strategy for handling the differences between rendering buffers.

### `render`

```cpp
PhysicalRegion slint::platform::SoftwareRenderer::render(std::span<slint::Rgb8Pixel> buffer, std::size_t pixel_stride) const
```

Render the window scene into a pixel buffer

The buffer must be at least as large as the associated [slint::Window](../../window/)

The stride is the amount of pixels between two lines in the buffer. It is must be at least as large as the width of the window.

### `render`

```cpp
PhysicalRegion slint::platform::SoftwareRenderer::render(std::span<Rgb565Pixel> buffer, std::size_t pixel_stride) const
```

Render the window scene into an RGB 565 encoded pixel buffer

The buffer must be at least as large as the associated [slint::Window](../../window/)

The stride is the amount of pixels between two lines in the buffer. It is must be at least as large as the width of the window.

### `render_by_line`

```cpp
PhysicalRegion slint::platform::SoftwareRenderer::render_by_line(Callback process_line_callback) const
```

Render the window scene, line by line. The provided Callback will be invoked for each line that needs to rendered.

The renderer uses a cache internally and will only render the part of the window which are dirty.

This function returns the physical region that was rendered considering the rotation.

The callback must be an invocable with the signature (size\_t line, size\_t begin, size\_t end, auto render\_fn). It is invoked with the line number as first parameter, and the start x and end x coordinates of the line as second and third parameter. The implementation must provide a line buffer (as [std::span](https://en.cppreference.com/w/cpp/container/span)) and invoke the provided fourth parameter (render\_fn) with it, to fill it with pixels. After the line buffer is filled with pixels, your implementation is free to flush that line to the screen for display.

The first template parameter (PixelType) must be specified and can be either [Rgb565Pixel](../rgb565pixel/) or [Rgb8Pixel](../../rgb8pixel/).

### `set_rendering_rotation`

```cpp
void slint::platform::SoftwareRenderer::set_rendering_rotation(RenderingRotation rotation)
```

Set how the window needs to be rotated in the buffer.

This is typically used to implement screen rotation in software