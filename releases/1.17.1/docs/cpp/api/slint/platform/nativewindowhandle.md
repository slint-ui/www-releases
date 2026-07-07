---
title: "slint::platform::NativeWindowHandle Class"
---
```cpp
class NativeWindowHandle;
```

```cpp
#include <slint-platform.h>
```

An opaque, low-level window handle that internalizes everything necessary to exchange messages with the windowing system. This includes the connection to the display server, if necessary.

Note that this class does not provide any kind of ownership. The caller is responsible for ensuring that the pointers supplied to the constructor are valid throughout the lifetime of the [NativeWindowHandle](./).

## Public Functions

### `NativeWindowHandle`

```cpp
slint::platform::NativeWindowHandle::NativeWindowHandle()=delete
```

### `NativeWindowHandle`

```cpp
slint::platform::NativeWindowHandle::NativeWindowHandle(const NativeWindowHandle &)=delete
```

### `operator=`

```cpp
NativeWindowHandle & slint::platform::NativeWindowHandle::operator=(const NativeWindowHandle &)=delete
```

### `NativeWindowHandle`

```cpp
slint::platform::NativeWindowHandle::NativeWindowHandle(NativeWindowHandle &&other)
```

Creates a new [NativeWindowHandle](./) by moving the handle data from *other* into this [NativeWindowHandle](./).

### `operator=`

```cpp
NativeWindowHandle & slint::platform::NativeWindowHandle::operator=(NativeWindowHandle &&other)
```

Creates a new [NativeWindowHandle](./) by moving the handle data from *other* into this [NativeWindowHandle](./).

### `~NativeWindowHandle`

```cpp
slint::platform::NativeWindowHandle::~NativeWindowHandle()
```

Destroys the [NativeWindowHandle](./).

## Public Static Functions

### `from_x11_xcb`

```cpp
static NativeWindowHandle slint::platform::NativeWindowHandle::from_x11_xcb(uint32_t window, uint32_t visual_id, xcb_connection_t *connection, int screen)
```

Creates a new [NativeWindowHandle](./) from the given xcb\_window\_t *window*, xcb\_visualid\_t *visual\_id*, XCB *connection*, and *screen* number.

### `from_x11_xlib`

```cpp
static NativeWindowHandle slint::platform::NativeWindowHandle::from_x11_xlib(uint32_t window, unsigned long visual_id, void *display, int screen)
```

Creates a new [NativeWindowHandle](./) from the given XLib *window*, VisualID *visual\_id*, Display *display*, and *screen* number.

### `from_wayland`

```cpp
static NativeWindowHandle slint::platform::NativeWindowHandle::from_wayland(wl_surface *surface, wl_display *display)
```

Creates a new [NativeWindowHandle](./) from the given wayland *surface*, and *display*.

### `from_appkit`

```cpp
static NativeWindowHandle slint::platform::NativeWindowHandle::from_appkit(NSView *nsview, NSWindow *nswindow)
```

Creates a new [NativeWindowHandle](./) from the given *nsview*, and *nswindow*.

### `from_win32`

```cpp
static NativeWindowHandle slint::platform::NativeWindowHandle::from_win32(void *hwnd, void *hinstance)
```

Creates a new [NativeWindowHandle](./) from the given HWND *hwnd*, and HINSTANCE *hinstance*.