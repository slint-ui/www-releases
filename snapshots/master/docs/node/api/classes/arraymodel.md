---
title: "ArrayModel"
---
Defined in: [api/node/typescript/models.ts:180](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L180)

ArrayModel wraps a JavaScript array for use in `.slint` views. The underlying
array can be modified with the [[ArrayModel.push]] and [[ArrayModel.remove]] methods.

## Extends

- [`Model`](/master/docs/node/api/classes/model/)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new ArrayModel**\<`T`\>(`arr`): `ArrayModel`\<`T`\>

Defined in: [api/node/typescript/models.ts:191](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L191)

Creates a new ArrayModel.

#### Parameters

##### arr

`T`[]

#### Returns

`ArrayModel`\<`T`\>

#### Overrides

`Model<T>.constructor`

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [api/node/typescript/models.ts:199](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L199)

Returns the number of entries in the array model.

##### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`T`\>

Defined in: [api/node/typescript/models.ts:138](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L138)

#### Returns

`Iterator`\<`T`\>

#### Inherited from

[`Model`](/master/docs/node/api/classes/model/).[`[iterator]`](/master/docs/node/api/classes/model/#iterator)

***

### entries()

> **entries**(): `IterableIterator`\<\[`number`, `T`\]\>

Defined in: [api/node/typescript/models.ts:287](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L287)

Returns an iterable of key, value pairs for every entry in the array.

#### Returns

`IterableIterator`\<\[`number`, `T`\]\>

***

### insert()

> **insert**(`index`, ...`values`): `void`

Defined in: [api/node/typescript/models.ts:271](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L271)

Inserts new values into the array that's backing the model at the given
index and notifies the run-time about the added rows.

#### Parameters

##### index

`number`

zero-based index at which to insert; clamped to [0, length].

##### values

...`T`[]

list of values to insert.

#### Returns

`void`

***

### pop()

> **pop**(): `T` \| `undefined`

Defined in: [api/node/typescript/models.ts:245](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L245)

Removes the last element from the array and returns it.

#### Returns

`T` \| `undefined`

The removed element or undefined if the array is empty.

***

### push()

> **push**(...`values`): `void`

Defined in: [api/node/typescript/models.ts:234](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L234)

Pushes new values to the array that's backing the model and notifies
the run-time about the added rows.

#### Parameters

##### values

...`T`[]

list of values that will be pushed to the array.

#### Returns

`void`

***

### remove()

> **remove**(`index`, `size`): `void`

Defined in: [api/node/typescript/models.ts:260](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L260)

Removes the specified number of element from the array that's backing
the model, starting at the specified index.

#### Parameters

##### index

`number`

index of first row to remove.

##### size

`number`

number of rows to remove.

#### Returns

`void`

***

### rowCount()

> **rowCount**(): `number`

Defined in: [api/node/typescript/models.ts:206](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L206)

Returns the number of entries in the array model.

#### Returns

`number`

#### Overrides

[`Model`](/master/docs/node/api/classes/model/).[`rowCount`](/master/docs/node/api/classes/model/#rowcount)

***

### rowData()

> **rowData**(`row`): `T`

Defined in: [api/node/typescript/models.ts:215](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L215)

Returns the data at the specified row.

#### Parameters

##### row

`number`

index in range 0..(rowCount() - 1).

#### Returns

`T`

undefined if row is out of range otherwise the data.

#### Overrides

[`Model`](/master/docs/node/api/classes/model/).[`rowData`](/master/docs/node/api/classes/model/#rowdata)

***

### setRowData()

> **setRowData**(`row`, `data`): `void`

Defined in: [api/node/typescript/models.ts:224](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L224)

Stores the given data on the given row index and notifies run-time about the changed row.

#### Parameters

##### row

`number`

index in range 0..(rowCount() - 1).

##### data

`T`

new data item to store on the given row index

#### Returns

`void`

#### Overrides

[`Model`](/master/docs/node/api/classes/model/).[`setRowData`](/master/docs/node/api/classes/model/#setrowdata)

***

### values()

> **values**(): `IterableIterator`\<`T`\>

Defined in: [api/node/typescript/models.ts:280](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L280)

Returns an iterable of values in the array.

#### Returns

`IterableIterator`\<`T`\>