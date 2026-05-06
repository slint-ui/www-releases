---
title: "PointerScrollEvent"
description: "PointerScrollEvent content"
---
<!-- Generated with slint-doc-generator from internal/common/builtin_structs.rs -->

`PointerScrollEvent`

 Represents a Pointer scroll (or wheel) event sent by the windowing system.
 This structure is passed to the `scroll-event` callback of the `TouchArea` element.

- **`delta_x`** (_length_):  The amount of pixel in the horizontal direction
- **`delta_y`** (_length_):  The amount of pixel in the vertical direction
- **`modifiers`** (_KeyboardModifiers_):  The keyboard modifiers pressed during the event