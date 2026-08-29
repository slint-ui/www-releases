---
title: "ImageData"
---
Defined in: [api/node/typescript/index.ts:119](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L119)

An image data type that can be displayed by the Image element.

This interface is inspired by the web [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) interface.

## Properties

### path?

> `readonly` `optional` **path?**: `string`

Defined in: [api/node/typescript/index.ts:124](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L124)

Returns the path of the image, if it was loaded from disk. Otherwise
the property is undefined.

## Accessors

### data

#### Get Signature

> **get** **data**(): `Uint8Array`

Defined in: [api/node/typescript/index.ts:129](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L129)

Returns the image as buffer.

##### Returns

`Uint8Array`

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [api/node/typescript/index.ts:139](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L139)

Returns the height of the image in pixels.

##### Returns

`number`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [api/node/typescript/index.ts:134](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L134)

Returns the width of the image in pixels.

##### Returns

`number`