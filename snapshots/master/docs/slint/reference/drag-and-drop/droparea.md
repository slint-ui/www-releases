---
title: "DropArea"
description: "DropArea element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';

Use `DropArea` to accept drops coming from a [DragArea](/master/docs/slint/reference/drag-and-drop/dragarea.md), or from another application on platforms that support it.
The `can-drop` callback runs while the cursor moves over the area to decide whether to accept the drag.
The `dropped` callback runs when the user releases the mouse inside the area after `can-drop` returned `true`.

See [DragAndDrop](/master/docs/slint/guide/development/drag-and-drop.md) for a usage guide and a complete example.

## Properties

### enabled
<SlintProperty propName="enabled" typeName="bool" defaultValue="true">
Set to `false` to stop the `DropArea` from accepting any drops.
</SlintProperty>

## Callbacks

### can-drop(event: DropEvent) -> bool
Return `true` from this callback to accept the drag, or `false` to reject it.
While the drag is accepted, `contains-drag` is `true` and the cursor changes to a "copy" shape.
The argument is a [DropEvent](/master/docs/slint/reference/global-structs-enums.md#dropevent) describing the drag.

### dropped(event: DropEvent)
Invoked when the user releases the mouse over the area after `can-drop` returned `true`.
Use this callback to read `event.data` and apply the drop.
The argument is a [DropEvent](/master/docs/slint/reference/global-structs-enums.md#dropevent) describing the drop.

### contains-drag
<SlintProperty propName="contains-drag" typeName="bool" propertyVisibility="out">
`true` while an accepted drag hovers over the area, `false` otherwise.
Bind it to a visual property to give the user feedback, for example a background color.
</SlintProperty>