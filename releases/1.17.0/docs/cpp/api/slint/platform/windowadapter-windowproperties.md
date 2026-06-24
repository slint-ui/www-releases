---
title: "slint::platform::WindowAdapter::WindowProperties Struct"
---
```cpp
struct WindowProperties;
```

```cpp
#include <slint-platform.h>
```

This struct contains getters that provide access to properties of the [Window](../../window/) element, and is used with [WindowAdapter::update\_window\_properties()](../windowadapter/#update_window_properties).

## Types
- [LayoutConstraints](../windowadapter-windowproperties-layoutconstraints/)

## Public Functions

### `title`

```cpp
SharedString slint::platform::WindowAdapter::WindowProperties::title() const
```

Returns the title of the window.

### `background`

```cpp
Brush slint::platform::WindowAdapter::WindowProperties::background() const
```

Returns the background brush of the window.

### `fullscreen`

```cpp
bool slint::platform::WindowAdapter::WindowProperties::fullscreen() const
```

Use [is\_fullscreen()](./#is_fullscreen) instead

### `is_fullscreen`

```cpp
bool slint::platform::WindowAdapter::WindowProperties::is_fullscreen() const
```

Returns true if the window should be shown fullscreen; false otherwise.

### `is_minimized`

```cpp
bool slint::platform::WindowAdapter::WindowProperties::is_minimized() const
```

Returns true if the window should be minimized; false otherwise.

### `is_maximized`

```cpp
bool slint::platform::WindowAdapter::WindowProperties::is_maximized() const
```

Returns true if the window should be maximized; false otherwise.

### `layout_constraints`

```cpp
LayoutConstraints slint::platform::WindowAdapter::WindowProperties::layout_constraints() const
```

Returns the layout constraints of the window.