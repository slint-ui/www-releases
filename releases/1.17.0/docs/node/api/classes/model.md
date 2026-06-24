---
title: "Model"
---
Defined in: [api/node/typescript/models.ts:90](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L90)

Model<T> is the interface for feeding dynamic data into
`.slint` views.

A model is organized like a table with rows of data. The
fields of the data type T behave like columns.

## Extended by

- [`ArrayModel`](/1.17.0/docs/node/api/classes/arraymodel/)

## Type Parameters

### T

`T`

the type of the model's items.

### Example
As an example let's see the implementation of [ArrayModel](/1.17.0/docs/node/api/classes/arraymodel/)

```js
export class ArrayModel<T> extends Model<T> {
   private a: Array<T>

  constructor(arr: Array<T>) {
       super();
       this.a = arr;
   }

   rowCount() {
       return this.a.length;
   }

   rowData(row: number) {
      return this.a[row];
   }

   setRowData(row: number, data: T) {
       this.a[row] = data;
       this.notifyRowDataChanged(row);
   }

   push(...values: T[]) {
       let size = this.a.length;
       Array.prototype.push.apply(this.a, values);
       this.notifyRowAdded(size, arguments.length);
   }

   remove(index: number, size: number) {
       let r = this.a.splice(index, size);
       this.notifyRowRemoved(index, size);
   }

   get length(): number {
       return this.a.length;
   }

   values(): IterableIterator<T> {
       return this.a.values();
   }

   entries(): IterableIterator<[number, T]> {
       return this.a.entries()
   }
}
```

## Implements

- `Iterable`\<`T`\>

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`T`\>

Defined in: [api/node/typescript/models.ts:138](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L138)

#### Returns

`Iterator`\<`T`\>

#### Implementation of

`Iterable.[iterator]`

***

### rowCount()

> `abstract` **rowCount**(): `number`

Defined in: [api/node/typescript/models.ts:118](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L118)

Implementations of this function must return the current number of rows.

#### Returns

`number`

***

### rowData()

> `abstract` **rowData**(`row`): `T` \| `undefined`

Defined in: [api/node/typescript/models.ts:124](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L124)

Implementations of this function must return the data at the specified row.

#### Parameters

##### row

`number`

index in range 0..(rowCount() - 1).

#### Returns

`T` \| `undefined`

undefined if row is out of range otherwise the data.

***

### setRowData()

> **setRowData**(`_row`, `_data`): `void`

Defined in: [api/node/typescript/models.ts:132](https://github.com/slint-ui/slint/blob/master/api/node/typescript/models.ts#L132)

Implementations of this function must store the provided data parameter
in the model at the specified row.

#### Parameters

##### \_row

`number`

index in range 0..(rowCount() - 1).

##### \_data

`T`

new data item to store on the given row index

#### Returns

`void`