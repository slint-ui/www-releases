---
title: "slint::VectorModel Class"
description: "A [Model](../model/) backed by a [SharedVector](../sharedvector/)."
---
```cpp
template <typename ModelData>
class VectorModel;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Model<ModelData>](../model/).

A [Model](../model/) backed by a [SharedVector](../sharedvector/).

## Public Functions

### `VectorModel`

```cpp
slint::VectorModel<ModelData>::VectorModel()=default
```

Constructs a new empty [VectorModel](./).

### `VectorModel`

```cpp
slint::VectorModel<ModelData>::VectorModel(std::vector<ModelData> array)
```

Constructs a new [VectorModel](./) from *array*.

### `row_count` (virtual)

```cpp
size_t slint::VectorModel<ModelData>::row_count() const override
```

The amount of row in the model.

### `row_data` (virtual)

```cpp
std::optional<ModelData> slint::VectorModel<ModelData>::row_data(size_t i) const override
```

Returns the data for a particular row. This function should be called with `row < row_count()`.

### `set_row_data` (virtual)

```cpp
void slint::VectorModel<ModelData>::set_row_data(size_t i, const ModelData &value) override
```

Sets the data for a particular row.

This function should only be called with `row < row_count()`.

If the model cannot support data changes, then it is ok to do nothing. The default implementation will print a warning to stderr.

If the model can update the data, it should also call `row_changed`

### `push_back`

```cpp
void slint::VectorModel<ModelData>::push_back(const ModelData &value)
```

Append a new row with the given value.

### `erase`

```cpp
void slint::VectorModel<ModelData>::erase(size_t index)
```

Remove the row at the given index from the model.

### `insert`

```cpp
void slint::VectorModel<ModelData>::insert(size_t index, const ModelData &value)
```

Inserts the given value as a new row at the specified index.

### `clear`

```cpp
void slint::VectorModel<ModelData>::clear()
```

Erases all rows from the [VectorModel](./).

### `set_vector`

```cpp
void slint::VectorModel<ModelData>::set_vector(std::vector<ModelData> array)
```

Replaces the underlying [VectorModel](./)'s vector with *array*.