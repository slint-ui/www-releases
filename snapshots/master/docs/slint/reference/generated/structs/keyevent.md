---
title: "KeyEvent"
description: "KeyEvent content"
---
<!-- Generated with slint-doc-generator from internal/common/builtin_structs.rs -->

`KeyEvent`

 This structure is generated and passed to the key press and release callbacks of the `FocusScope` element.

- **`text`** (_string_):  The unicode representation of the key pressed.
- **`modifiers`** (_KeyboardModifiers_):  The keyboard modifiers active at the time of the key press event.
- **`repeat`** (_bool_):  This field is set to true for key press events that are repeated, i.e. the key is held down. It's always false for key release events.