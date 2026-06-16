---
title: "slint::language::DragAction"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> DragAction</span></span></code></pre>

| Value | Description |
| --- | --- |
| `None` | No action: the drag is rejected, no drop will be delivered. |
| `Copy` | The data is copied to the target; the source retains it. |
| `Move` |  |
| `Link` |  |

This enum describes the action negotiated between the source of a drag (`DragArea`) and its target (`DropArea`) during a drag-and-drop operation. The source declares which actions it permits, the target picks one in its `can-drop` callback, and the chosen action is reported back to the source via `drag-finished` so that, for example, a `move` source can remove the original data. The same enum is used for drags that come from another application or window once native drag-and-drop is in play.