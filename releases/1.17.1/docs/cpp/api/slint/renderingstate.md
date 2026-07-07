---
title: "slint::RenderingState Enum"
---
```cpp
enum class RenderingState
```

| Value | Description |
| --- | --- |
| `RenderingSetup` | The window has been created and the graphics adapter/context initialized. |
| `BeforeRendering` | The scene of items is about to be rendered. |
| `AfterRendering` |  |
| `RenderingTeardown` |  |

This enum describes the different rendering states, that will be provided to the parameter of the callback for `set_rendering_notifier` on the `slint::Window`.

When OpenGL is used for rendering, the context will be current. It's safe to call OpenGL functions, but it is crucial that the state of the context is preserved. So make sure to save and restore state such as `TEXTURE_BINDING_2D` or `ARRAY_BUFFER_BINDING` perfectly.