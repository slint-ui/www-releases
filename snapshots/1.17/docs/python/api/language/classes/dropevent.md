---
title: "DropEvent"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import DropEvent
```

This structure is passed to the callbacks of the `DropArea` element

## Properties

### data

<Signature symbol="slint.language.DropEvent.data">data: <XRef to="slint.DataTransfer" plain /> | None</Signature>

The payload set on the source `DragArea`.

### position

<Signature symbol="slint.language.DropEvent.position">position: <XRef to="slint.LogicalPosition" plain /> | None</Signature>

The cursor position in the `DropArea`'s local coordinates.

### allow_copy

<Signature symbol="slint.language.DropEvent.allow_copy">allow_copy: <XRef to="bool" plain /></Signature>

Mirrors `DragArea.allow-copy`: true if the source allows the drop to copy the data.

### allow_move

<Signature symbol="slint.language.DropEvent.allow_move">allow_move: <XRef to="bool" plain /></Signature>

Mirrors `DragArea.allow-move`: true if the source allows the drop to move the data.

### allow_link

<Signature symbol="slint.language.DropEvent.allow_link">allow_link: <XRef to="bool" plain /></Signature>

Mirrors `DragArea.allow-link`: true if the source allows the drop to link to the data.

### proposed_action

<Signature symbol="slint.language.DropEvent.proposed_action">proposed_action: <XRef to="slint.language.DragAction" plain /> | None</Signature>

The action negotiated from current modifier state, clamped to the allowed set;
 when no modifier is pressed, the first allowed of move, copy, link.
 Updated on every `DragMove`. The target's `can-drop` callback can return this
 to honor the user's modifier choice, or override with any other allowed action.