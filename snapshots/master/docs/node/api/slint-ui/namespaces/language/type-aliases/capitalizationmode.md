---
title: "CapitalizationMode"
---
> **CapitalizationMode** = *typeof* [`CapitalizationMode`](/master/docs/node/api/variables/language/#capitalizationmode)\[keyof *typeof* [`CapitalizationMode`](/master/docs/node/api/variables/language/#capitalizationmode)\]

Defined in: api/node/typescript/generated/language.ts:411

This enum describes the auto-capitalization behavior that the input method
(e.g. a soft keyboard) should apply while text is entered in a `TextInput`.

Variants:
- `language.CapitalizationMode.None` (`"none"`) — No auto-capitalization.
- `language.CapitalizationMode.Sentences` (`"sentences"`) — Capitalize the first character of each sentence.
- `language.CapitalizationMode.Words` (`"words"`) — Capitalize the first character of each word.
- `language.CapitalizationMode.Characters` (`"characters"`) — Capitalize all characters.