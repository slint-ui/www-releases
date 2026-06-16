---
title: "DropArea"
description: "DropArea element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';

Use `DropArea` to accept drops coming from a [DragArea](/master/docs/slint/reference/drag-and-drop/dragarea.md), or from another application on platforms that support it.
The `can-drop` callback runs while the cursor moves over the area to decide whether to accept the drag,
and which action (copy/move/link) to perform.
The `dropped` callback runs when the user releases the mouse inside the area after `can-drop` returned
a non-`none` action.

See [DragAndDrop](/master/docs/slint/guide/development/drag-and-drop.md) for a usage guide and a complete example.

## Properties

### enabled
<SlintProperty propName="enabled" typeName="bool" defaultValue="true">
Set to `false` to stop the `DropArea` from accepting any drops.
</SlintProperty>

## Callbacks

### can-drop(event: DropEvent) -> DragAction
Return the action this target wants to perform with the drag, or `DragAction.none` to reject.
The runtime clamps the returned value to the source's allowed set: anything the source did not
allow is treated as `none`.
The argument is a [DropEvent](/master/docs/slint/reference/global-structs-enums.md#dropevent) describing the drag.

### dropped(event: DropEvent) -> DragAction
Invoked when the user releases the mouse over the area after `can-drop` returned a non-`none`
action. Use this callback to read `event.data` and apply the drop. The returned
`DragAction` is reported to the source via `drag-finished`; return `event.proposed-action`
to mirror what was negotiated during hover, or a different action to refine the choice at
drop time. The runtime clamps the return value against the source's allowed set.

### contains-drag
<SlintProperty propName="contains-drag" typeName="bool" propertyVisibility="out">
`true` while an accepted drag hovers over the area, `false` otherwise.
Bind it to a visual property to give the user feedback, for example a background color.
</SlintProperty>

### current-action
<SlintProperty propName="current-action" typeName="enum" enumName="DragAction" propertyVisibility="out">
The action the runtime is currently negotiating with the source: `none` when no drag is hovering,
or `copy`/`move`/`link` once a concrete action is settled.
</SlintProperty>