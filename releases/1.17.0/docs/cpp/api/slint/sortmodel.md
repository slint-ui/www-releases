---
title: "slint::SortModel Class"
---
```cpp
template <typename ModelData>
class SortModel;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Model<ModelData>](../model/).

The [SortModel](./) acts as an adapter model for a given source model by sorting all rows with by order provided by the given sorting function. The sorting function is called for pairs of elements of the source model.

```cpp
    auto source_model = std::make_shared<slint::VectorModel<SharedString>>(
//      std::vector<SharedString> { "lorem", "ipsum", "dolor" });
    auto sorted_model = std::make_shared<slint::SortModel<SharedString>>(
        source_model, [](auto lhs, auto rhs) { return lhs < rhs; }));
```

## Public Functions

### `SortModel`

```cpp
slint::SortModel<ModelData>::SortModel(std::shared_ptr<Model<ModelData>> source_model, std::function<bool(const ModelData &, const ModelData &)> comp)
```

Constructs a new [SortModel](./) that provides a sorted view on the *source\_model* by applying the order given by the specified *comp*.

### `row_count` (virtual)

```cpp
size_t slint::SortModel<ModelData>::row_count() const override
```

The amount of row in the model.

### `row_data` (virtual)

```cpp
std::optional<ModelData> slint::SortModel<ModelData>::row_data(size_t i) const override
```

Returns the data for a particular row. This function should be called with `row < row_count()`.

### `set_row_data` (virtual)

```cpp
void slint::SortModel<ModelData>::set_row_data(size_t i, const ModelData &value) override
```

Sets the data for a particular row.

This function should only be called with `row < row_count()`.

If the model cannot support data changes, then it is ok to do nothing. The default implementation will print a warning to stderr.

If the model can update the data, it should also call `row_changed`

### `reset`

```cpp
void slint::SortModel<ModelData>::reset()
```

Re-applies the model's sort function on each row of the source model. Use this if state external to the sort function has changed.

### `unsorted_row`

```cpp
int slint::SortModel<ModelData>::unsorted_row(int sorted_row_index) const
```

Given the *sorted\_row\_index*, this function returns the corresponding row index in the source model.

### `source_model`

```cpp
std::shared_ptr<Model<ModelData>> slint::SortModel<ModelData>::source_model() const
```

Returns the source model of this filter model.