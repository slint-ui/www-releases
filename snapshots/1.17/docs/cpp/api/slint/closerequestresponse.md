---
title: "slint::CloseRequestResponse"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> CloseRequestResponse</span></span></code></pre>

| Value | Description |
| --- | --- |
| `HideWindow` | The [Window](../window/) will be hidden (default action) |
| `KeepWindowShown` | The close request is rejected and the window will be kept shown. |

This enum describes whether a [Window](../window/) is allowed to be hidden when the user tries to close the window. It is the return type of the callback provided to \[[Window::on\_close\_requested](../window/#on_close_requested)\].