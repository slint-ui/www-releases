---
title: "KeyboardModifiers"
description: "KeyboardModifiers content"
---
<!-- Generated with slint-doc-generator from internal/common/builtin_structs.rs -->

`KeyboardModifiers`

 The `KeyboardModifiers` struct provides booleans to indicate possible modifier keys on a keyboard, such as Shift, Control, etc.
 It is provided as part of `KeyEvent`'s `modifiers` field.

 Keyboard shortcuts on Apple platforms typically use the Command key (⌘), such as Command+C for "Copy". On other platforms
 the same shortcut is typically represented using Control+C. To make it easier to develop cross-platform applications, on macOS,
 Slint maps the Command key to the control modifier, and the Control key to the meta modifier.

 On Windows, the Windows key is mapped to the meta modifier.

- **`alt`** (_bool_):  Indicates the Alt key on a keyboard.
- **`control`** (_bool_):  Indicates the Control key on a keyboard, except on macOS, where it is the Command key (⌘).
- **`shift`** (_bool_):  Indicates the Shift key on a keyboard.
- **`meta`** (_bool_):  Indicates the Control key on macos, and the Windows key on Windows.