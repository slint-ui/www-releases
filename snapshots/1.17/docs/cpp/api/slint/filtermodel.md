---
title: "slint::FilterModel Class"
---
```cpp
template <typename ModelData>
class FilterModel;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Model<ModelData>](../model/).

The [FilterModel](./) acts as an adapter model for a given source model by applying a filter function. The filter function is called for each row on the source model and if the filter accepts the row (i.e. returns true), the row is also visible in the [FilterModel](./).

## Public Functions

### `FilterModel`

```cpp
slint::FilterModel<ModelData>::FilterModel(std::shared_ptr<Model<ModelData>> source_model, std::function<bool(const ModelData &)> filter_fn)
```

Constructs a new [FilterModel](./) that provides a limited view on the *source\_model* by applying *filter\_fn* on each row. If the provided function returns true, the row is exposed by the [FilterModel](./).

### `row_count` (virtual)

```cpp
size_t slint::FilterModel<ModelData>::row_count() const override
```

The amount of row in the model.

### `row_data` (virtual)

```cpp
std::optional<ModelData> slint::FilterModel<ModelData>::row_data(size_t i) const override
```

Returns the data for a particular row. This function should be called with `row < row_count()`.

### `set_row_data` (virtual)

```cpp
void slint::FilterModel<ModelData>::set_row_data(size_t i, const ModelData &value) override
```

Sets the data for a particular row.

This function should only be called with `row < row_count()`.

If the model cannot support data changes, then it is ok to do nothing. The default implementation will print a warning to stderr.

If the model can update the data, it should also call `row_changed`

### `reset`

```cpp
void slint::FilterModel<ModelData>::reset()
```

Re-applies the model's filter function on each row of the source model. Use this if state external to the filter function has changed.

### `unfiltered_row`

```cpp
int slint::FilterModel<ModelData>::unfiltered_row(int filtered_row) const
```

Given the *filtered\_row* index, this function returns the corresponding row index in the source model.

### `source_model`

```cpp
std::shared_ptr<Model<ModelData>> slint::FilterModel<ModelData>::source_model() const
```

Returns the source model of this filter model.