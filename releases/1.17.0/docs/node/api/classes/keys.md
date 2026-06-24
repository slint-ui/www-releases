---
title: "Keys"
---
Defined in: api/node/rust-module.d.cts:141

`Keys` represent a key combined with a list of modifiers (the `keys` type in the Slint language).

To construct a `Keys` instance from JavaScript, use the `Keys.fromParts()` method.

Use `toString()` to get a platform-native representation of the key binding
(e.g. "Ctrl+A" on Linux/Windows, "⌘A" on macOS).

## Constructors

### Constructor

> **new Keys**(): `Keys`

#### Returns

`Keys`

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: api/node/rust-module.d.cts:151

Returns `true` if this key binding is equal to `other`.

#### Parameters

##### other

`Keys`

#### Returns

`boolean`

***

### toString()

> **toString**(): `string`

Defined in: api/node/rust-module.d.cts:149

Returns the platform-native string representation of this key binding.

#### Returns

`string`

***

### fromParts()

> `static` **fromParts**(`parts`): `Keys`

Defined in: api/node/rust-module.d.cts:147

Create a `Keys` from a list of string parts, e.g. `["Control", "Shift?", "Z"]`.

Each element is either a modifier name or a key name. Throws an error on parse failure.

#### Parameters

##### parts

`string`[]

#### Returns

`Keys`