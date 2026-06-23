---
title: "slint::Window Class"
---
```cpp
class Window;
```

```cpp
#include <slint.h>
```

This class represents a window towards the windowing system, that's used to render the scene of a component. It provides API to control windowing system specific aspects such as the position on the screen.

## Public Functions

### `Window`

```cpp
slint::Window::Window(const Window &other)=delete
```

### `operator=`

```cpp
Window & slint::Window::operator=(const Window &other)=delete
```

### `Window`

```cpp
slint::Window::Window(Window &&other)=delete
```

### `operator=`

```cpp
Window & slint::Window::operator=(Window &&other)=delete
```

### `~Window`

```cpp
slint::Window::~Window()=default
```

Destroys this window. [Window](./) instances are explicitly shared and reference counted. If this window instance is the last one referencing the window towards the windowing system, then it will also become hidden and destroyed.

### `show`

```cpp
void slint::Window::show()
```

Shows the window on the screen. An additional strong reference on the associated component is maintained while the window is visible.

Call [hide()](./#hide) to make the window invisible again, and drop the additional strong reference.

### `hide`

```cpp
void slint::Window::hide()
```

Hides the window, so that it is not visible anymore. The additional strong reference on the associated component, that was created when [show()](./#show) was called, is dropped.

### `is_visible`

```cpp
bool slint::Window::is_visible() const
```

Returns the visibility state of the window. This function can return false even if you previously called [show()](./#show) on it, for example if the user minimized the window.

### `set_rendering_notifier`

```cpp
std::optional<SetRenderingNotifierError> slint::Window::set_rendering_notifier(F &&callback) const
```

This function allows registering a callback that's invoked during the different phases of rendering. This allows custom rendering on top or below of the scene.

The provided callback must be callable with a [slint::RenderingState](../renderingstate/) and the [slint::GraphicsAPI](../graphicsapi/) argument.

On success, the function returns a [std::optional](https://en.cppreference.com/w/cpp/utility/optional) without value. On error, the function returns the error code as value in the [std::optional](https://en.cppreference.com/w/cpp/utility/optional).

### `on_close_requested`

```cpp
void slint::Window::on_close_requested(F &&callback) const
```

This function allows registering a callback that's invoked when the user tries to close a window. The callback has to return a CloseRequestResponse.

### `request_redraw`

```cpp
void slint::Window::request_redraw() const
```

This function issues a request to the windowing system to redraw the contents of the window.

### `position`

```cpp
slint::PhysicalPosition slint::Window::position() const
```

Returns the position of the window on the screen, in physical screen coordinates and including a window frame (if present).

### `set_position`

```cpp
void slint::Window::set_position(const slint::LogicalPosition &pos)
```

Sets the position of the window on the screen, in physical screen coordinates and including a window frame (if present). Note that on some windowing systems, such as Wayland, this functionality is not available.

### `set_position`

```cpp
void slint::Window::set_position(const slint::PhysicalPosition &pos)
```

Sets the position of the window on the screen, in physical screen coordinates and including a window frame (if present). Note that on some windowing systems, such as Wayland, this functionality is not available.

### `size`

```cpp
slint::PhysicalSize slint::Window::size() const
```

Returns the size of the window on the screen, in physical screen coordinates and excluding a window frame (if present).

### `set_size`

```cpp
void slint::Window::set_size(const slint::LogicalSize &size)
```

Resizes the window to the specified size on the screen, in logical pixels and excluding a window frame (if present).

### `set_size`

```cpp
void slint::Window::set_size(const slint::PhysicalSize &size)
```

Resizes the window to the specified size on the screen, in physical pixels and excluding a window frame (if present).

### `scale_factor`

```cpp
float slint::Window::scale_factor() const
```

This function returns the scale factor that allows converting between logical and physical pixels.

### `is_fullscreen`

```cpp
bool slint::Window::is_fullscreen() const
```

Returns if the window is currently fullscreen.

### `set_fullscreen`

```cpp
void slint::Window::set_fullscreen(bool fullscreen)
```

Set or unset the window to display fullscreen.

### `is_maximized`

```cpp
bool slint::Window::is_maximized() const
```

Returns if the window is currently maximized.

### `set_maximized`

```cpp
void slint::Window::set_maximized(bool maximized)
```

Maximize or unmaximize the window.

### `is_minimized`

```cpp
bool slint::Window::is_minimized() const
```

Returns if the window is currently minimized.

### `set_minimized`

```cpp
void slint::Window::set_minimized(bool minimized)
```

Minimize or unminimize the window.

### `dispatch_key_press_event`

```cpp
void slint::Window::dispatch_key_press_event(const SharedString &text)
```

Dispatch a key press event to the scene.

Use this when you're implementing your own backend and want to forward user input events.

The *text* is the unicode representation of the key.

### `dispatch_key_press_repeat_event`

```cpp
void slint::Window::dispatch_key_press_repeat_event(const SharedString &text)
```

Dispatch an auto-repeated key press event to the scene.

Use this when you're implementing your own backend and want to forward user input events.

The *text* is the unicode representation of the key.

### `dispatch_key_release_event`

```cpp
void slint::Window::dispatch_key_release_event(const SharedString &text)
```

Dispatch a key release event to the scene.

Use this when you're implementing your own backend and want to forward user input events.

The *text* is the unicode representation of the key.

### `dispatch_pointer_press_event`

```cpp
void slint::Window::dispatch_pointer_press_event(LogicalPosition pos, PointerEventButton button)
```

Dispatches a pointer or mouse press event to the scene.

Use this function when you're implementing your own backend and want to forward user pointer/mouse events.

*pos* represents the logical position of the pointer relative to the window. *button* is the button that was pressed.

### `dispatch_pointer_release_event`

```cpp
void slint::Window::dispatch_pointer_release_event(LogicalPosition pos, PointerEventButton button)
```

Dispatches a pointer or mouse release event to the scene.

Use this function when you're implementing your own backend and want to forward user pointer/mouse events.

*pos* represents the logical position of the pointer relative to the window. *button* is the button that was released.

### `dispatch_pointer_exit_event`

```cpp
void slint::Window::dispatch_pointer_exit_event()
```

Dispatches a pointer exit event to the scene.

Use this function when you're implementing your own backend and want to forward user pointer/mouse events.

This event is triggered when the pointer exits the window.

### `dispatch_pointer_move_event`

```cpp
void slint::Window::dispatch_pointer_move_event(LogicalPosition pos)
```

Dispatches a pointer move event to the scene.

Use this function when you're implementing your own backend and want to forward user pointer/mouse events.

*pos* represents the logical position of the pointer relative to the window.

### `dispatch_pointer_scroll_event`

```cpp
void slint::Window::dispatch_pointer_scroll_event(LogicalPosition pos, float delta_x, float delta_y, slint::cbindgen_private::types::TouchPhase scroll_phase=slint::cbindgen_private::types::TouchPhase::Moved)
```

Dispatches a scroll (or wheel) event to the scene.

Use this function when you're implementing your own backend and want to forward user wheel events.

*parameter* represents the logical position of the pointer relative to the window. *delta\_x* and *delta\_y* represent the scroll delta values in the X and Y directions in logical pixels. *scroll\_phase* represents the current phase of scrolling. If no phase is available like for mouse scroll wheels, use the default

### `dispatch_resize_event`

```cpp
void slint::Window::dispatch_resize_event(slint::LogicalSize s)
```

Set the logical size of this window after a resize event

The backend must send this event to ensure that the `width` and `height` property of the root [Window](./) element are properly set.

### `dispatch_scale_factor_change_event`

```cpp
void slint::Window::dispatch_scale_factor_change_event(float factor)
```

The window's scale factor has changed. This can happen for example when the display's resolution changes, the user selects a new scale factor in the system settings, or the window is moved to a different screen. Platform implementations should dispatch this event also right after the initial window creation, to set the initial scale factor the windowing system provided for the window.

### `dispatch_window_active_changed_event`

```cpp
void slint::Window::dispatch_window_active_changed_event(bool active)
```

The [Window](./) was activated or de-activated.

The backend should dispatch this event with true when the window gains focus and false when the window loses focus.

### `dispatch_close_requested_event`

```cpp
void slint::Window::dispatch_close_requested_event()
```

The user requested to close the window.

The backend should send this event when the user tries to close the window,for example by pressing the close button.

This will have the effect of invoking the callback set in [Window::on\_close\_requested()](./#on_close_requested) and then hiding the window depending on the return value of the callback.

### `has_active_animations`

```cpp
bool slint::Window::has_active_animations() const
```

Returns true if there is an animation currently active on any property in the [Window](./).

### `take_snapshot`

```cpp
std::optional<SharedPixelBuffer<Rgba8Pixel>> slint::Window::take_snapshot() const
```

Takes a snapshot of the window contents and returns it as RGBA8 encoded pixel buffer.

Note that this function may be slow to call as it may need to re-render the scene.

### `wayland_surface`

```cpp
wl_surface * slint::Window::wayland_surface() const
```

Returns the wl\_surface for this window.

If the underlying window handle hasn't been created yet or isn't applicable for the platform, this will return nullptr.

### `wayland_display`

```cpp
wl_display * slint::Window::wayland_display() const
```

Returns the wl\_display for this window.

If the underlying window handle hasn't been created yet or isn't applicable for the platform, this will return nullptr.

### `appkit_view`

```cpp
NSView * slint::Window::appkit_view() const
```

Returns the NSView for this window.

If the underlying window handle hasn't been created yet or isn't applicable for the platform, this will return nullptr.

### `win32_hwnd`

```cpp
HWND slint::Window::win32_hwnd() const
```

Returns the HINSTANCE for this window.

If the underlying window handle hasn't been created yet or isn't applicable for the platform, this will return nullptr.

### `win32_hinstance`

```cpp
HINSTANCE slint::Window::win32_hinstance() const
```

Returns the HINSTANCE for this window.

If the underlying window handle hasn't been created yet or isn't applicable for the platform, this will return nullptr.