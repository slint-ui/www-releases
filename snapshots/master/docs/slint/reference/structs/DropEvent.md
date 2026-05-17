---
title: "DropEvent"
description: "DropEvent content"
---
<!-- Generated with slint-doc-generator from internal/common/builtin_structs.rs -->

`DropEvent`

 This structure is passed to the callbacks of the `DropArea` element

- **`data`** (_data-transfer_):  The payload set on the source `DragArea`.
- **`position`** (_LogicalPosition_):  The cursor position in the `DropArea`'s local coordinates.
- **`allow_copy`** (_bool_):  Mirrors `DragArea.allow-copy`: true if the source allows the drop to copy the data.
- **`allow_move`** (_bool_):  Mirrors `DragArea.allow-move`: true if the source allows the drop to move the data.
- **`allow_link`** (_bool_):  Mirrors `DragArea.allow-link`: true if the source allows the drop to link to the data.
- **`proposed_action`** (_DragAction_):  The action negotiated from current modifier state and the source's `preferred-action`, clamped to the allowed set. Updated on every `DragMove`. The target's `can-drop` callback can return this to honor the user's modifier choice, or override with any other allowed action.