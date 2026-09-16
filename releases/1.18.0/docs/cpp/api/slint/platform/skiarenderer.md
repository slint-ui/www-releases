---
title: "slint::platform::SkiaRenderer Class"
---
```cpp
class SkiaRenderer;
```

```cpp
#include <slint-platform.h>
```

**Inherits** [slint::platform::AbstractRenderer](../abstractrenderer/).

Slint's Skia renderer.

Create the renderer when you have created a native window with a non-zero size. Call the [render()](./#render) function to render the scene into the window.

## Public Functions

### `~SkiaRenderer` (virtual)

```cpp
slint::platform::SkiaRenderer::~SkiaRenderer()
```

### `SkiaRenderer`

```cpp
slint::platform::SkiaRenderer::SkiaRenderer(const SkiaRenderer &)=delete
```

### `operator=`

```cpp
SkiaRenderer & slint::platform::SkiaRenderer::operator=(const SkiaRenderer &)=delete
```

### `SkiaRenderer`

```cpp
explicit slint::platform::SkiaRenderer::SkiaRenderer(const NativeWindowHandle &window_handle, PhysicalSize initial_size)
```

Constructs a new Skia renderer for the given window - referenced by the provided WindowHandle - and the specified initial size.

### `render`

```cpp
void slint::platform::SkiaRenderer::render() const
```

Renders the scene into the window provided to the [SkiaRenderer](./)'s constructor.