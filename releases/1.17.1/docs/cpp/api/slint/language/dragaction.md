---
title: "slint::language::DragAction Enum"
---
```cpp
enum class DragAction
```

| Value | Description |
| --- | --- |
| `None` | No action: the drag is rejected, no drop will be delivered. |
| `Copy` | The data is copied to the target; the source retains it. |
| `Move` |  |
| `Link` |  |

This enum describes the action negotiated between the source of a drag (`DragArea`) and its target (`DropArea`) during a drag-and-drop operation. The source declares which actions it permits, the target picks one in its `can-drop` callback, and the chosen action is reported back to the source via `drag-finished` so that, for example, a `move` source can remove the original data. The same enum is used for drags that come from another application or window once native drag-and-drop is in play.