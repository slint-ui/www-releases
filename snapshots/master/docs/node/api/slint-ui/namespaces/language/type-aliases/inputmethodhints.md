---
title: "InputMethodHints"
---
> **InputMethodHints** = `object`

Defined in: api/node/typescript/generated/language.ts:679

This structure holds the hints that a `TextInput` gives to the platform's input method
(e.g. a soft keyboard) about the expected input.
The input method may take these hints into account, but might also ignore them.

## Properties

### auto\_complete

> **auto\_complete**: `boolean`

Defined in: api/node/typescript/generated/language.ts:694

Hint that the input method may offer auto-completion suggestions for the entered text.
Defaults to `true`.

***

### auto\_correct

> **auto\_correct**: `boolean`

Defined in: api/node/typescript/generated/language.ts:689

Hint that the input method may automatically correct spelling mistakes as the user types.
Defaults to `true`.

***

### capitalization

> **capitalization**: [`CapitalizationMode`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/capitalizationmode/)

Defined in: api/node/typescript/generated/language.ts:684

The auto-capitalization behavior that the input method should apply.
Defaults to `"sentences"`.