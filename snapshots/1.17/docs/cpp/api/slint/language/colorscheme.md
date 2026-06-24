---
title: "slint::language::ColorScheme Enum"
---
```cpp
enum class ColorScheme
```

| Value | Description |
| --- | --- |
| `Unknown` |  |
| `Dark` | The style chooses light colors for the background and dark for the foreground. |
| `Light` | The style chooses dark colors for the background and light for the foreground. |

This enum indicates the color scheme used by the widget style. Use this to explicitly switch between dark and light schemes, or choose Unknown to fall back to the system default.