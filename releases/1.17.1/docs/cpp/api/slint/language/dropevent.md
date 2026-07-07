---
title: "slint::language::DropEvent Struct"
description: "This structure is passed to the callbacks of the `DropArea` element."
---
```cpp
struct DropEvent;
```

```cpp
#include <slint.h>
```

This structure is passed to the callbacks of the `DropArea` element.

## Public Attributes

### `data`

```cpp
DataTransfer slint::language::DropEvent::data
```

The payload set on the source `DragArea`.

### `position`

```cpp
LogicalPosition slint::language::DropEvent::position
```

The cursor position in the `DropArea`'s local coordinates.

### `proposed_action`

```cpp
DragAction slint::language::DropEvent::proposed_action
```

The action negotiated from current modifier state, clamped to the allowed set; when no modifier is pressed, the first allowed of move, copy, link. Updated on every `DragMove`. The target's `can-drop` callback can return this to honor the user's modifier choice, or override with any other allowed action.