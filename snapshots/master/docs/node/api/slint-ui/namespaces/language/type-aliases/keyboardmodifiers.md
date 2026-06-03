---
title: "KeyboardModifiers"
---
> **KeyboardModifiers** = `object`

Defined in: api/node/typescript/generated/language.ts:275

The `KeyboardModifiers` struct provides booleans to indicate possible modifier keys on a keyboard, such as Shift, Control, etc.
It is provided as part of `KeyEvent`'s `modifiers` field.

Keyboard shortcuts on Apple platforms typically use the Command key (⌘), such as Command+C for "Copy". On other platforms
the same shortcut is typically represented using Control+C. To make it easier to develop cross-platform applications, on macOS,
Slint maps the Command key to the control modifier, and the Control key to the meta modifier.

On Windows, the Windows key is mapped to the meta modifier.

## Properties

### alt

> **alt**: `boolean`

Defined in: api/node/typescript/generated/language.ts:279

Indicates the Alt key on a keyboard.

***

### control

> **control**: `boolean`

Defined in: api/node/typescript/generated/language.ts:283

Indicates the Control key on a keyboard, except on macOS, where it is the Command key (⌘).

***

### meta

> **meta**: `boolean`

Defined in: api/node/typescript/generated/language.ts:291

Indicates the Control key on macos, and the Windows key on Windows.

***

### shift

> **shift**: `boolean`

Defined in: api/node/typescript/generated/language.ts:287

Indicates the Shift key on a keyboard.