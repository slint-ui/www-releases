---
title: "slint::GraphicsAPI Enum"
---
```cpp
enum class GraphicsAPI
```

| Value | Description |
| --- | --- |
| `NativeOpenGL` | The rendering is done using OpenGL. |
| `Inaccessible` | The rendering is done using APIs inaccessible from C++, such as WGPU. |

This enum describes a low-level access to specific graphics APIs used by the renderer.