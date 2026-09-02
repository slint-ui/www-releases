---
title: "slint::platform::set_platform Function"
---
```cpp
void slint::platform::set_platform(std::unique_ptr<Platform> platform)
```

Registers the platform with Slint. Must be called before Slint windows are created. Can only be called once in an application.