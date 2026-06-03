---
title: "slint::language::ColorScheme"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> ColorScheme</span></span></code></pre>

| Value | Description |
| --- | --- |
| `Unknown` |  |
| `Dark` | The style chooses light colors for the background and dark for the foreground. |
| `Light` | The style chooses dark colors for the background and light for the foreground. |

This enum indicates the color scheme used by the widget style. Use this to explicitly switch between dark and light schemes, or choose Unknown to fall back to the system default.