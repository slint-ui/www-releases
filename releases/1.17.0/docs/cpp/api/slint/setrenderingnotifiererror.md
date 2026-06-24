---
title: "slint::SetRenderingNotifierError Enum"
---
```cpp
enum class SetRenderingNotifierError
```

| Value | Description |
| --- | --- |
| `Unsupported` | The rendering backend does not support rendering notifiers. |
| `AlreadySet` | There is already a rendering notifier set, multiple notifiers are not supported. |

This enum describes the different error scenarios that may occur when the application registers a rendering notifier on a `slint::Window`.