---
title: "DragAction"
---
> **DragAction** = *typeof* [`DragAction`](/master/docs/node/api/variables/language/#dragaction)\[keyof *typeof* [`DragAction`](/master/docs/node/api/variables/language/#dragaction)\]

Defined in: api/node/typescript/generated/language.ts:431

This enum describes the action negotiated between the source of a drag (`DragArea`)
and its target (`DropArea`) during a drag-and-drop operation. The source declares
which actions it permits, the target picks one in its `can-drop` callback, and the
chosen action is reported back to the source via `drag-finished` so that, for
example, a `move` source can remove the original data. The same enum is used for
drags that come from another application or window once native drag-and-drop is
in play.

Variants:
- `language.DragAction.None` (`"none"`) — No action: the drag is rejected, no drop will be delivered.
- `language.DragAction.Copy` (`"copy"`) — The data is copied to the target; the source retains it.
- `language.DragAction.Move` (`"move"`) — The data is moved to the target; the source should remove it once the operation completes.
- `language.DragAction.Link` (`"link"`) — A link to the source data is created at the target; neither side gives up ownership.