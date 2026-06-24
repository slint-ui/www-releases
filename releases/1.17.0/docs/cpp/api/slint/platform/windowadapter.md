---
title: "slint::platform::WindowAdapter Class"
---
```cpp
class WindowAdapter;
```

```cpp
#include <slint-platform.h>
```

Base class for the layer between a [slint::Window](../../window/) and the windowing system specific window type, such as a Win32 `HWND` handle or a `wayland_surface_t`.

Re-implement this class to establish the link between the two, and pass messages in both directions:

- When receiving messages from the windowing system about state changes, such as the window being resized, the user requested the window to be closed, input being received, etc. you need to call the corresponding event functions on the [Window](../../window/), such as [Window::dispatch\_resize\_event()](../../window/#dispatch_resize_event), Window::dispatch\_mouse\_press\_event(), or [Window::dispatch\_close\_requested\_event()](../../window/#dispatch_close_requested_event).
- Slint sends requests to change visibility, position, size, etc. via virtual functions such as [set\_visible()](./#set_visible), [set\_size()](./#set_size), [set\_position()](./#set_position), or [update\_window\_properties()](./#update_window_properties). Re-implement these functions and delegate the requests to the windowing system.

If the implementation of this bi-directional message passing protocol is incomplete, the user may experience unexpected behavior, or the intention of the developer calling functions on the [Window](../../window/) API may not be fulfilled.

Your [WindowAdapter](./) subclass must hold a renderer (either a [SoftwareRenderer](../softwarerenderer/) or a [SkiaRenderer](../skiarenderer/)). In the [renderer()](./#renderer) method, you must return a reference to it.

### Example

```cpp
class MyWindowAdapter : public slint::platform::WindowAdapter {
    slint::platform::SoftwareRenderer m_renderer;
    NativeHandle m_native_window; // a handle to the native window
public:
    void request_redraw() override { m_native_window.refresh(); }
    slint::PhysicalSize size() const override {
       return slint::PhysicalSize({m_native_window.width, m_native_window.height});
    }
    slint::platform::AbstractRenderer &renderer() override { return m_renderer; }
    void set_visible(bool v) override {
        if (v) {
            m_native_window.show();
        } else {
            m_native_window.hide();
        }
    }
    // ...
    void repaint_callback();
}
```

Rendering is typically asynchronous, and your windowing system or event loop would invoke a callback when it is time to render.

```cpp
void MyWindowAdapter::repaint_callback()
{
    slint::platform::update_timers_and_animations();
    m_renderer.render(m_native_window.buffer(), m_native_window.width);
    // if animations are running, schedule the next frame
    if (window().has_active_animations())  m_native_window.refresh();
}
```

## Types
- [WindowProperties](../windowadapter-windowproperties/)

## Public Functions

### `WindowAdapter`

```cpp
explicit slint::platform::WindowAdapter::WindowAdapter()
```

Construct a [WindowAdapter](./).

### `~WindowAdapter` (virtual)

```cpp
slint::platform::WindowAdapter::~WindowAdapter()=default
```

### `set_visible` (virtual)

```cpp
void slint::platform::WindowAdapter::set_visible(bool)
```

This function is called by Slint when the slint window is shown or hidden.

Re-implement this function to forward the call to show/hide the native window

When the window becomes visible, this is a good time to call [slint::Window::dispatch\_scale\_factor\_change\_event](../../window/#dispatch_scale_factor_change_event) to initialise the scale factor.

### `request_redraw` (virtual)

```cpp
void slint::platform::WindowAdapter::request_redraw()
```

This function is called when Slint detects that the window need to be repainted.

Reimplement this function to forward the call to the window manager.

You should not render the window in the implementation of this call. Instead you should do that in the next iteration of the event loop, or in a callback from the window manager.

### `set_size` (virtual)

```cpp
void slint::platform::WindowAdapter::set_size(slint::PhysicalSize)
```

Request a new size for the window to the specified size on the screen, in physical or logical pixels and excluding a window frame (if present).

This is called from [slint::Window::set\_size()](../../window/#set_size).

The default implementation does nothing

This function should send the size to the Windowing system. If the window size actually changes, you should call [slint::Window::dispatch\_resize\_event](../../window/#dispatch_resize_event) to propagate the new size to the slint view.

### `size` (pure virtual)

```cpp
slint::PhysicalSize slint::platform::WindowAdapter::size()=0
```

Returns the actual physical size of the window.

### `set_position` (virtual)

```cpp
void slint::platform::WindowAdapter::set_position(slint::PhysicalPosition)
```

Sets the position of the window on the screen, in physical screen coordinates and including a window frame (if present).

The default implementation does nothing

Called from [slint::Window::set\_position()](../../window/#set_position).

### `position` (virtual)

```cpp
std::optional<slint::PhysicalPosition> slint::platform::WindowAdapter::position()
```

Returns the position of the window on the screen, in physical screen coordinates and including a window frame (if present).

The default implementation returns std::nullopt.

Called from [slint::Window::position()](../../window/#position).

### `update_window_properties` (virtual)

```cpp
void slint::platform::WindowAdapter::update_window_properties(const WindowProperties &)
```

Re-implement this function to update the properties such as window title or layout constraints.

This function is called before `set_visible(true)`, and will be called again when the properties that were queried on the last call are changed. If you do not query any properties, it may not be called again.

### `renderer` (pure virtual)

```cpp
AbstractRenderer & slint::platform::WindowAdapter::renderer()=0
```

Re-implement this function to provide a reference to the renderer for use with the window adapter.

Your re-implementation should contain a renderer such as [SoftwareRenderer](../softwarerenderer/) or [SkiaRenderer](../skiarenderer/) and you must return a reference to it.

### `window`

```cpp
const Window & slint::platform::WindowAdapter::window() const
```

Return the [slint::Window](../../window/) associated with this window.

Note that this function can only be called if the window was initialized, which is only the case after it has been returned from a call to [Platform::create\_window\_adapter](../platform/#create_window_adapter)

### `window`

```cpp
Window & slint::platform::WindowAdapter::window()
```

Overload.