---
title: "slint::ReverseModel Class"
---
```cpp
template <typename ModelData>
class ReverseModel;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Model<ModelData>](../model/).

The [ReverseModel](./) acts as an adapter model for a given source model by reserving all rows. This means that the first row in the source model is the last row of this model, the second row is the second last, and so on.

```cpp
    auto source_model = std::make_shared<slint::VectorModel<int>>(
//      std::vector<int> { 1, 2, 3, 4, 5 });
    auto reversed_model = std::make_shared<slint::ReverseModel<int>>(source_model);
```

## Public Functions

### `ReverseModel`

```cpp
slint::ReverseModel<ModelData>::ReverseModel(std::shared_ptr<Model<ModelData>> source_model)
```

Constructs a new [ReverseModel](./) that provides a reversed view on the *source\_model*.

### `row_count` (virtual)

```cpp
size_t slint::ReverseModel<ModelData>::row_count() const override
```

The amount of row in the model.

### `row_data` (virtual)

```cpp
std::optional<ModelData> slint::ReverseModel<ModelData>::row_data(size_t i) const override
```

Returns the data for a particular row. This function should be called with `row < row_count()`.

### `set_row_data` (virtual)

```cpp
void slint::ReverseModel<ModelData>::set_row_data(size_t i, const ModelData &value) override
```

Sets the data for a particular row.

This function should only be called with `row < row_count()`.

If the model cannot support data changes, then it is ok to do nothing. The default implementation will print a warning to stderr.

If the model can update the data, it should also call `row_changed`

### `source_model`

```cpp
std::shared_ptr<Model<ModelData>> slint::ReverseModel<ModelData>::source_model() const
```

Returns the source model of this reserve model.