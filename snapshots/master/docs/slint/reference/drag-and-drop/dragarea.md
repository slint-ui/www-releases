---
title: "DragArea"
description: "DragArea element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';

Use `DragArea` to make any part of the UI draggable.
A drag starts when the user presses the mouse inside the area and moves past a small threshold,
and the value bound to `data` becomes the drag payload delivered to a [DropArea](/master/docs/slint/reference/drag-and-drop/droparea.md).
A click doesn't start a drag, so child elements like [TouchArea](/master/docs/slint/reference/gestures/toucharea.md) stay interactive.

The payload is a `data-transfer` value, which abstracts over the file-type transfer mechanisms supported by each platform.
`data-transfer` values are opaque in Slint code:
construct and read them via callbacks implemented in the host language.

The source declares which actions it permits via `allow-copy`, `allow-move`, and `allow-link`,
and a `preferred-action` that applies when no modifier key is pressed. The target picks the final
action from this set in its `can-drop` callback. Once a drop completes (or the drag is cancelled),
`drag-finished(action)` fires so a "move" source can remove the original data.

See [DragAndDrop](/master/docs/slint/guide/development/drag-and-drop.md) for a usage guide and a complete example.

## Properties

### enabled
<SlintProperty propName="enabled" typeName="bool" defaultValue="true">
Set to `false` to stop the `DragArea` from starting drags.
Events still reach the child elements.
</SlintProperty>

### data
<SlintProperty propName="data" typeName="data-transfer">
The payload that's transferred to a [DropArea](/master/docs/slint/reference/drag-and-drop/droparea.md) when a drop happens.
</SlintProperty>

### drag-image
<SlintProperty propName="drag-image" typeName="image">
Bitmap drawn under the cursor while a drag is in flight.
When unset (the default empty image), no overlay is drawn.
</SlintProperty>

### drag-image-offset-x
<SlintProperty propName="drag-image-offset-x" typeName="int">
Horizontal hot spot within `drag-image` that aligns with the cursor, in image pixel coordinates.
`0` puts the image's left edge at the cursor; following HTML5's `setDragImage(image, x, y)` convention.
</SlintProperty>

### drag-image-offset-y
<SlintProperty propName="drag-image-offset-y" typeName="int">
Vertical hot spot within `drag-image` that aligns with the cursor, in image pixel coordinates.
`0` puts the image's top edge at the cursor.
</SlintProperty>

### allow-copy
<SlintProperty propName="allow-copy" typeName="bool" defaultValue="true">
Whether the source allows the drop to copy the data. The source retains the data.
</SlintProperty>

### allow-move
<SlintProperty propName="allow-move" typeName="bool" defaultValue="false">
Whether the source allows the drop to move the data. The source should remove the
original from its model in the `drag-finished` callback when the action is `move`.
</SlintProperty>

### allow-link
<SlintProperty propName="allow-link" typeName="bool" defaultValue="false">
Whether the source allows the drop to link to the data. Neither side gives up ownership.
</SlintProperty>

### preferred-action
<SlintProperty propName="preferred-action" typeName="enum" enumName="DragAction" defaultValue="copy">
The action used when no modifier key is pressed. The runtime clamps it to the allowed set;
if the named action isn't allowed, falls back to the first allowed of move, copy, link.
</SlintProperty>

### dragging
<SlintProperty propName="dragging" typeName="bool" propertyVisibility="out">
`true` once the press has crossed the drag threshold and a drag is in flight,
`false` once the drop completes or the drag is cancelled.
</SlintProperty>

## Callbacks

### drag-finished(action: DragAction)
Fires when the drag ends: with the chosen action on a successful drop, or with
`DragAction.none` if the drag was cancelled.