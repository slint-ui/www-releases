---
title: "ArrayModel"
---
Defined in: [api/node/typescript/models.ts:181](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L181)

ArrayModel wraps a JavaScript array for use in `.slint` views. The underlying
array can be modified with the [[ArrayModel.push]], [[ArrayModel.remove]], and
[[ArrayModel.splice]] methods.

## Extends

- [`Model`](/1.17.0/docs/node/api/classes/model/)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new ArrayModel**\<`T`\>(`arr`): `ArrayModel`\<`T`\>

Defined in: [api/node/typescript/models.ts:192](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L192)

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

Defined in: [api/node/typescript/models.ts:200](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L200)

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

[`Model`](/1.17.0/docs/node/api/classes/model/).[`[iterator]`](/1.17.0/docs/node/api/classes/model/#iterator)

***

### entries()

> **entries**(): `IterableIterator`\<\[`number`, `T`\]\>

Defined in: [api/node/typescript/models.ts:304](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L304)

Returns an iterable of key, value pairs for every entry in the array.

#### Returns

`IterableIterator`\<\[`number`, `T`\]\>

***

### pop()

> **pop**(): `T` \| `undefined`

Defined in: [api/node/typescript/models.ts:246](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L246)

Removes the last element from the array and returns it.

#### Returns

`T` \| `undefined`

The removed element or undefined if the array is empty.

***

### push()

> **push**(...`values`): `void`

Defined in: [api/node/typescript/models.ts:235](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L235)

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

Defined in: [api/node/typescript/models.ts:207](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L207)

Returns the number of entries in the array model.

#### Returns

`number`

#### Overrides

[`Model`](/1.17.0/docs/node/api/classes/model/).[`rowCount`](/1.17.0/docs/node/api/classes/model/#rowcount)

***

### rowData()

> **rowData**(`row`): `T`

Defined in: [api/node/typescript/models.ts:216](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L216)

Returns the data at the specified row.

#### Parameters

##### row

`number`

index in range 0..(rowCount() - 1).

#### Returns

`T`

undefined if row is out of range otherwise the data.

#### Overrides

[`Model`](/1.17.0/docs/node/api/classes/model/).[`rowData`](/1.17.0/docs/node/api/classes/model/#rowdata)

***

### setRowData()

> **setRowData**(`row`, `data`): `void`

Defined in: [api/node/typescript/models.ts:225](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L225)

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

[`Model`](/1.17.0/docs/node/api/classes/model/).[`setRowData`](/1.17.0/docs/node/api/classes/model/#setrowdata)

***

### splice()

> **splice**(`start`, `deleteCount?`, ...`items`): `T`[]

Defined in: [api/node/typescript/models.ts:275](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L275)

Removes elements from the array that's backing the model and, if
necessary, inserts new elements in their place, following the semantics
of `Array.prototype.splice`. The run-time is notified about the removed
and added rows.

#### Parameters

##### start

`number`

zero-based index at which to start changing the array; negative values count back from the end and out-of-range values are clamped.

##### deleteCount?

`number`

number of elements to remove starting at `start`; if omitted, all elements from `start` to the end are removed.

##### items

...`T`[]

elements to insert at `start`.

#### Returns

`T`[]

an array containing the removed elements.

***

### values()

> **values**(): `IterableIterator`\<`T`\>

Defined in: [api/node/typescript/models.ts:297](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L297)

Returns an iterable of values in the array.

#### Returns

`IterableIterator`\<`T`\>