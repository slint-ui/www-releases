---
title: "StyledText"
---
Defined in: api/node/rust-module.d.cts:312

Styled text parsed from markdown or plain text.

Use `StyledText.fromMarkdown()` or `StyledText.fromPlainText()` to create instances.
Assign the result to a `styled-text` property in a Slint component to display it.

## Constructors

### Constructor

> **new StyledText**(): `StyledText`

#### Returns

`StyledText`

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: api/node/rust-module.d.cts:322

Returns `true` if this styled text is equal to `other`.

#### Parameters

##### other

`StyledText`

#### Returns

`boolean`

***

### fromMarkdown()

> `static` **fromMarkdown**(`markdown`): `StyledText`

Defined in: api/node/rust-module.d.cts:320

Parses markdown into styled text.

#### Parameters

##### markdown

`string`

#### Returns

`StyledText`

#### Throws

if the markdown contains unsupported syntax.

***

### fromPlainText()

> `static` **fromPlainText**(`text`): `StyledText`

Defined in: api/node/rust-module.d.cts:314

Creates styled text from plain text without applying markdown parsing.

#### Parameters

##### text

`string`

#### Returns

`StyledText`