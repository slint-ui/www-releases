---
title: "PointerEvent"
description: "PointerEvent content"
---
<!-- Generated with slint-doc-generator from internal/common/builtin_structs.rs -->

`PointerEvent`

 Represents a Pointer event sent by the windowing system.
 This structure is passed to the `pointer-event` callback of the `TouchArea` element.

- **`button`** (_PointerEventButton_):  The button that was pressed or released
- **`kind`** (_PointerEventKind_):  The kind of the event
- **`modifiers`** (_KeyboardModifiers_):  The keyboard modifiers pressed during the event
- **`touch_finger_id`** (_int_):  The unique ID of the touch point, indicating the finger ID. 0 means it's not a touch event (e.g., mouse).