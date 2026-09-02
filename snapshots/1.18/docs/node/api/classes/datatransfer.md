---
title: "DataTransfer"
---
Defined in: api/node/rust-module.d.cts:76

Represents some form of type-indexed possibly-lazy data transfer.

Used for accessing the platform clipboard and drag-and-drop APIs.

## Constructors

### Constructor

> **new DataTransfer**(): `DataTransfer`

Defined in: api/node/rust-module.d.cts:78

Constructs an empty `DataTransfer`.

#### Returns

`DataTransfer`

## Accessors

### hasImage

#### Get Signature

> **get** **hasImage**(): `boolean`

Defined in: api/node/rust-module.d.cts:104

`true` if this `DataTransfer` advertises an image representation.

##### Returns

`boolean`

***

### hasPlainText

#### Get Signature

> **get** **hasPlainText**(): `boolean`

Defined in: api/node/rust-module.d.cts:91

`true` if this `DataTransfer` advertises a plain text representation.

##### Returns

`boolean`

***

### image

#### Get Signature

> **get** **image**(): `SlintImageData` \| `null`

Defined in: api/node/rust-module.d.cts:96

The image representation of this `DataTransfer`, or `null` if no
image is available.

##### Returns

`SlintImageData` \| `null`

#### Set Signature

> **set** **image**(`image`): `void`

Defined in: api/node/rust-module.d.cts:102

Sets the image representation of this `DataTransfer`. Assigning `null`
or `undefined` clears any previously-set image; assigning any other
image overwrites it.

##### Parameters

###### image

`SlintImageData` \| `null` \| `undefined`

##### Returns

`void`

***

### isEmpty

#### Get Signature

> **get** **isEmpty**(): `boolean`

Defined in: api/node/rust-module.d.cts:109

`true` if this `DataTransfer` carries no data: no plain text, no image, and no
user data.

##### Returns

`boolean`

***

### plainText

#### Get Signature

> **get** **plainText**(): `string` \| `null`

Defined in: api/node/rust-module.d.cts:83

The plain text representation of this `DataTransfer`, or `null` if no
plain text is available.

##### Returns

`string` \| `null`

#### Set Signature

> **set** **plainText**(`text`): `void`

Defined in: api/node/rust-module.d.cts:89

Sets the plain text representation of this `DataTransfer`. Assigning
`null`, `undefined`, or the empty string clears any previously-set
plain text; assigning any other string overwrites it.

##### Parameters

###### text

`string` \| `null` \| `undefined`

##### Returns

`void`

***

### userData

#### Get Signature

> **get** **userData**(): `unknown`

Defined in: api/node/rust-module.d.cts:121

Application-internal user data attached to this `DataTransfer`. Use this
when the drag-and-drop or clipboard operation stays inside the current
JavaScript application and you want to avoid serializing to plain text or
an image.

Reading returns the JavaScript value previously assigned, or `null` if
none was set (or the user data was set by a non-JavaScript binding).
Assigning `null` or `undefined` clears any previously attached JS user
data.

##### Returns

`unknown`

#### Set Signature

> **set** **userData**(`value`): `void`

Defined in: api/node/rust-module.d.cts:122

##### Parameters

###### value

`unknown`

##### Returns

`void`

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: api/node/rust-module.d.cts:129

Returns `true` if this `DataTransfer` equals `other`. Two transfers
compare equal when one is an unmodified clone of the other; any
modification (including overwriting plain text, image, or user data with
the same value) makes them unequal.

#### Parameters

##### other

`DataTransfer`

#### Returns

`boolean`