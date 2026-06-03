---
title: "slint::RenderingState"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> RenderingState</span></span></code></pre>

| Value | Description |
| --- | --- |
| `RenderingSetup` | The window has been created and the graphics adapter/context initialized. |
| `BeforeRendering` | The scene of items is about to be rendered. |
| `AfterRendering` |  |
| `RenderingTeardown` |  |

This enum describes the different rendering states, that will be provided to the parameter of the callback for `set_rendering_notifier` on the `slint::Window`.

When OpenGL is used for rendering, the context will be current. It's safe to call OpenGL functions, but it is crucial that the state of the context is preserved. So make sure to save and restore state such as `TEXTURE_BINDING_2D` or `ARRAY_BUFFER_BINDING` perfectly.