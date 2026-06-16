---
title: "KeyboardModifiers"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import KeyboardModifiers
```

The <XRef to="KeyboardModifiers" /> struct provides booleans to indicate possible modifier keys on a keyboard, such as Shift, Control, etc.
 It is provided as part of <XRef to="KeyEvent" />'s `modifiers` field.

 Keyboard shortcuts on Apple platforms typically use the Command key (⌘), such as Command+C for "Copy". On other platforms
 the same shortcut is typically represented using Control+C. To make it easier to develop cross-platform applications, on macOS,
 Slint maps the Command key to the control modifier, and the Control key to the meta modifier.

 On Windows, the Windows key is mapped to the meta modifier.

## Properties

### alt

<Signature symbol="slint.language.KeyboardModifiers.alt">alt: <XRef to="bool" plain /></Signature>

Indicates the Alt key on a keyboard.

### control

<Signature symbol="slint.language.KeyboardModifiers.control">control: <XRef to="bool" plain /></Signature>

Indicates the Control key on a keyboard, except on macOS, where it is the Command key (⌘).

### shift

<Signature symbol="slint.language.KeyboardModifiers.shift">shift: <XRef to="bool" plain /></Signature>

Indicates the Shift key on a keyboard.

### meta

<Signature symbol="slint.language.KeyboardModifiers.meta">meta: <XRef to="bool" plain /></Signature>

Indicates the Control key on macos, and the Windows key on Windows.