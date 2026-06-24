---
title: "slint::set_xdg_app_id Function"
---
```cpp
void slint::set_xdg_app_id(std::string_view xdg_app_id)
```

Sets the application id for use on Wayland or X11 with [xdg](https://specifications.freedesktop.org/desktop-entry-spec/latest/) compliant window managers. This must be set before the window is shown.