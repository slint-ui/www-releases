---
title: "ArrayModel"
---
Defined in: [api/node/typescript/models.ts:212](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L212)

ArrayModel wraps a JavaScript array for use in `.slint` views. The underlying
array can be modified with the [[ArrayModel.push]], [[ArrayModel.remove]], and
[[ArrayModel.splice]] methods.

## Extends

- [`Model`](/master/docs/node/api/classes/model/)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new ArrayModel**\<`T`\>(`arr`): `ArrayModel`\<`T`\>

Defined in: [api/node/typescript/models.ts:223](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L223)

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

Defined in: [api/node/typescript/models.ts:231](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L231)

Returns the number of entries in the array model.

##### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`T`\>

Defined in: [api/node/typescript/models.ts:169](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L169)

#### Returns

`Iterator`\<`T`\>

#### Inherited from

[`Model`](/master/docs/node/api/classes/model/).[`[iterator]`](/master/docs/node/api/classes/model/#iterator)

***

### entries()

> **entries**(): `IterableIterator`\<\[`number`, `T`\]\>

Defined in: [api/node/typescript/models.ts:360](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L360)

Returns an iterable of key, value pairs for every entry in the array.

#### Returns

`IterableIterator`\<\[`number`, `T`\]\>

***

### insertRow()

> **insertRow**(`_index`, `_data`): `void`

Defined in: [api/node/typescript/models.ts:279](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L279)

Insert a new row into the array backing the model at the specified index and notifies run-time about the added row.

#### Parameters

##### \_index

`number`

index at which to insert the new row.

##### \_data

`T`

data item to store in the new row.

#### Returns

`void`

#### Overrides

[`Model`](/master/docs/node/api/classes/model/).[`insertRow`](/master/docs/node/api/classes/model/#insertrow)

***

### pop()

> **pop**(): `T` \| `undefined`

Defined in: [api/node/typescript/models.ts:302](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L302)

Removes the last element from the array and returns it.

#### Returns

`T` \| `undefined`

The removed element or undefined if the array is empty.

***

### push()

> **push**(...`values`): `void`

Defined in: [api/node/typescript/models.ts:291](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L291)

Pushes new values to the array that's backing the model and notifies
the run-time about the added rows.

#### Parameters

##### values

...`T`[]

list of values that will be pushed to the array.

#### Returns

`void`

***

### pushRow()

> **pushRow**(`data`): `void`

Defined in: [api/node/typescript/models.ts:143](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L143)

Adds a line to the model with the provided data.
The default implementation calls [Model.insertRow](/master/docs/node/api/classes/model/#insertrow) with the row count.

#### Parameters

##### data

`T`

new data item to store in a new row.

#### Returns

`void`

#### Inherited from

[`Model`](/master/docs/node/api/classes/model/).[`pushRow`](/master/docs/node/api/classes/model/#pushrow)

***

### remove()

> **remove**(`index`, `size`): `void`

Defined in: [api/node/typescript/models.ts:316](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L316)

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

### removeRow()

> **removeRow**(`_index`): `void`

Defined in: [api/node/typescript/models.ts:265](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L265)

Remove a row from the array backing the model and notifies run-time about the removed row.

#### Parameters

##### \_index

`number`

index of the row to remove.

#### Returns

`void`

#### Overrides

[`Model`](/master/docs/node/api/classes/model/).[`removeRow`](/master/docs/node/api/classes/model/#removerow)

***

### rowCount()

> **rowCount**(): `number`

Defined in: [api/node/typescript/models.ts:238](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L238)

Returns the number of entries in the array model.

#### Returns

`number`

#### Overrides

[`Model`](/master/docs/node/api/classes/model/).[`rowCount`](/master/docs/node/api/classes/model/#rowcount)

***

### rowData()

> **rowData**(`row`): `T`

Defined in: [api/node/typescript/models.ts:247](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L247)

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

Defined in: [api/node/typescript/models.ts:256](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L256)

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

### splice()

> **splice**(`start`, `deleteCount?`, ...`items`): `T`[]

Defined in: [api/node/typescript/models.ts:331](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L331)

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

Defined in: [api/node/typescript/models.ts:353](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L353)

Returns an iterable of values in the array.

#### Returns

`IterableIterator`\<`T`\>