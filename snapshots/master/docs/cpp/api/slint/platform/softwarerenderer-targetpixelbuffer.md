---
title: "slint::platform::SoftwareRenderer::TargetPixelBuffer Struct"
---
```cpp
template <typename PixelType>
struct TargetPixelBuffer;
```

```cpp
#include <slint-platform.h>
```

Abstract base class for a target pixel buffer where certain drawing operations can be delegated. Use this to implement support for hardware accelerators such as DMA2D, PPA, or PXP on Microcontrollers.

**Note**: This class is still experimental - its API is subject to changes and not stabilized yet. To use the class, you must enable the `SLINT_FEATURE_EXPERIMENTAL=ON` CMake option.

## Public Functions

### `~TargetPixelBuffer` (virtual)

```cpp
slint::platform::SoftwareRenderer::TargetPixelBuffer<PixelType>::~TargetPixelBuffer()
```

### `line_slice` (pure virtual)

```cpp
std::span<PixelType> slint::platform::SoftwareRenderer::TargetPixelBuffer<PixelType>::line_slice(std::size_t line_number)=0
```

Returns a span of pixels for the specified line number.

### `num_lines` (pure virtual)

```cpp
std::size_t slint::platform::SoftwareRenderer::TargetPixelBuffer<PixelType>::num_lines()=0
```

Returns the number of lines in the buffer. This is the height of the buffer in pixels.

### `draw_texture` (pure virtual)

```cpp
bool slint::platform::SoftwareRenderer::TargetPixelBuffer<PixelType>::draw_texture(const DrawTextureArgs &texture, const PhysicalRegion &clip)=0
```

Draw a portion of provided texture to the specified pixel coordinates. Each pixel of the texture is to be blended with the given colorize color as well as the alpha value.

### `fill_background` (pure virtual)

```cpp
bool slint::platform::SoftwareRenderer::TargetPixelBuffer<PixelType>::fill_background(const Brush &brush, const PhysicalRegion &clip)=0
```

Fill the background of the buffer with the given brush.

### `draw_rectangle` (pure virtual)

```cpp
bool slint::platform::SoftwareRenderer::TargetPixelBuffer<PixelType>::draw_rectangle(const DrawRectangleArgs &args, const PhysicalRegion &clip)=0
```

Draw a rectangle specified by the DrawRectangleArgs. That rectangle must be clipped to the given region.