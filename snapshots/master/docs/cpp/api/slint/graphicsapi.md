---
title: "slint::GraphicsAPI"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> GraphicsAPI</span></span></code></pre>

| Value | Description |
| --- | --- |
| `NativeOpenGL` | The rendering is done using OpenGL. |
| `Inaccessible` | The rendering is done using APIs inaccessible from C++, such as WGPU. |

This enum describes a low-level access to specific graphics APIs used by the renderer.