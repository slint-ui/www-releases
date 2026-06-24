---
title: "slint::platform::WindowAdapter::WindowProperties::LayoutConstraints Struct"
---
```cpp
struct LayoutConstraints;
```

```cpp
#include <slint-platform.h>
```

This struct describes the layout constraints of a window.

It is the return value of [WindowProperties::layout\_constraints()](../windowadapter-windowproperties/#layout_constraints).

## Public Attributes

### `min`

```cpp
std::optional<LogicalSize> std::optional<LogicalSize> slint::platform::WindowAdapter::WindowProperties::LayoutConstraints::min
```

This represents the minimum size the window can be. If this is set, the window should not be able to be resized smaller than this size. If it is left unset, there is no minimum size.

### `max`

```cpp
std::optional<LogicalSize> std::optional<LogicalSize> slint::platform::WindowAdapter::WindowProperties::LayoutConstraints::max
```

This represents the maximum size the window can be. If this is set, the window should not be able to be resized larger than this size. If it is left unset, there is no maximum size.

### `preferred`

```cpp
LogicalSize slint::platform::WindowAdapter::WindowProperties::LayoutConstraints::preferred
```

This represents the preferred size of the window. This is the size of the window should have by default