---
title: "slint::SetRenderingNotifierError"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> SetRenderingNotifierError</span></span></code></pre>

| Value | Description |
| --- | --- |
| `Unsupported` | The rendering backend does not support rendering notifiers. |
| `AlreadySet` | There is already a rendering notifier set, multiple notifiers are not supported. |

This enum describes the different error scenarios that may occur when the application registers a rendering notifier on a `slint::Window`.