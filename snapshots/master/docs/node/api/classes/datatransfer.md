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

Defined in: api/node/rust-module.d.cts:102

`true` if this `DataTransfer` advertises an image representation.

##### Returns

`boolean`

***

### hasPlaintext

#### Get Signature

> **get** **hasPlaintext**(): `boolean`

Defined in: api/node/rust-module.d.cts:90

`true` if this `DataTransfer` advertises a plaintext representation.

##### Returns

`boolean`

***

### isEmpty

#### Get Signature

> **get** **isEmpty**(): `boolean`

Defined in: api/node/rust-module.d.cts:107

`true` if this `DataTransfer` carries no data: no plaintext, no image, and no
user data.

##### Returns

`boolean`

***

### userData

#### Get Signature

> **get** **userData**(): `unknown`

Defined in: api/node/rust-module.d.cts:119

Application-internal user data attached to this `DataTransfer`. Use this
when the drag-and-drop or clipboard operation stays inside the current
JavaScript application and you want to avoid serializing to plaintext or
an image.

Reading returns the JavaScript value previously assigned, or `null` if
none was set (or the user data was set by a non-JavaScript binding).
Assigning `null` or `undefined` clears any previously attached JS user
data.

##### Returns

`unknown`

#### Set Signature

> **set** **userData**(`value`): `void`

Defined in: api/node/rust-module.d.cts:120

##### Parameters

###### value

`unknown`

##### Returns

`void`

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: api/node/rust-module.d.cts:127

Returns `true` if this `DataTransfer` equals `other`. Two transfers
compare equal when one is an unmodified clone of the other; any
modification (including overwriting plaintext, image, or user data with
the same value) makes them unequal.

#### Parameters

##### other

`DataTransfer`

#### Returns

`boolean`

***

### fetchImage()

> **fetchImage**(): `SlintImageData` \| `null`

Defined in: api/node/rust-module.d.cts:100

Returns the image representation of this `DataTransfer`, or `null` if no
image is available.

#### Returns

`SlintImageData` \| `null`

***

### fetchPlaintext()

> **fetchPlaintext**(): `string` \| `null`

Defined in: api/node/rust-module.d.cts:88

Returns the plaintext representation of this `DataTransfer`, or `null` if no
plaintext is available.

#### Returns

`string` \| `null`

***

### setImage()

> **setImage**(`image`): `void`

Defined in: api/node/rust-module.d.cts:95

Sets the image representation of this `DataTransfer`. Calling this again
overwrites the previous image.

#### Parameters

##### image

`SlintImageData`

#### Returns

`void`

***

### setPlaintext()

> **setPlaintext**(`text`): `void`

Defined in: api/node/rust-module.d.cts:83

Sets the plaintext representation of this `DataTransfer`. Calling this again
overwrites the previous plaintext.

#### Parameters

##### text

`string`

#### Returns

`void`