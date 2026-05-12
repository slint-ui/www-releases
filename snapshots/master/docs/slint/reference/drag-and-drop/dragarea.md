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