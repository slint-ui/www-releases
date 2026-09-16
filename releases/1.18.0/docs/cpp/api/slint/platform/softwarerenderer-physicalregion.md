---
title: "slint::platform::SoftwareRenderer::PhysicalRegion Struct"
---
```cpp
struct PhysicalRegion;
```

```cpp
#include <slint-platform.h>
```

Represents a region on the screen, used for partial rendering.

The region may be composed of multiple sub-regions.

## Types
- [Rect](../softwarerenderer-physicalregion-rect/)

## Public Functions

### `bounding_box_size`

```cpp
PhysicalSize slint::platform::SoftwareRenderer::PhysicalRegion::bounding_box_size() const
```

Returns the size of the bounding box of this region.

### `bounding_box_origin`

```cpp
PhysicalPosition slint::platform::SoftwareRenderer::PhysicalRegion::bounding_box_origin() const
```

Returns the origin of the bounding box of this region.

### `rectangles`

```cpp
auto slint::platform::SoftwareRenderer::PhysicalRegion::rectangles() const
```

Returns a view on all the rectangles in this region. The rectangles do not overlap. The returned type is a C++ view over [PhysicalRegion::Rect](../softwarerenderer-physicalregion-rect/) structs.

It can be used like so:

```cpp
for (auto [origin, size] : region.rectangles()) {
    // Do something with the rect
}
```