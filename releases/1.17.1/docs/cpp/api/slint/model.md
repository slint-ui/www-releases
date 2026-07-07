---
title: "slint::Model Class"
---
```cpp
template <typename ModelData>
class Model;
```

```cpp
#include <slint.h>
```

**Inherited by** [slint::FilterModel<ModelData>](../filtermodel/), [slint::MapModel<SourceModelData, MappedModelData>](../mapmodel/), [slint::ReverseModel<ModelData>](../reversemodel/), [slint::SortModel<ModelData>](../sortmodel/), [slint::VectorModel<ModelData>](../vectormodel/).

A [Model](./) is providing Data for Slint Models or ListView elements of the `.slint` language

This is typically used in a `std::shared_ptr<slint::Model>`. [Model](./) is an abstract class and you can derive from it to provide your own data model, or use one of the provided models such as `slint::VectorModel`

An implementation of the [Model](./) can provide data to slint by re-implementing the `row_count` and `row_data` functions. It is the responsibility of the [Model](./) implementation to call the `Model::notify_row_changed()`, `Model::notify_row_added()`, `Model::notify_row_removed()`, or `Model::notify_reset()` functions when the underlying data changes.

Note that the [Model](./) is not thread-safe. All [Model](./) operations need to be done in the main thread. If you need to update the model data from another thread, use the `slint::invoke_from_event_loop()` function to send the data to the main thread and update the model.

## Public Functions

### `~Model` (virtual)

```cpp
slint::Model<ModelData>::~Model()=default
```

### `Model`

```cpp
slint::Model<ModelData>::Model()=default
```

### `Model`

```cpp
slint::Model<ModelData>::Model(const Model &)=delete
```

### `operator=`

```cpp
Model & slint::Model<ModelData>::operator=(const Model &)=delete
```

### `row_count` (pure virtual)

```cpp
size_t slint::Model<ModelData>::row_count() const =0
```

The amount of row in the model.

### `row_data` (pure virtual)

```cpp
std::optional<ModelData> slint::Model<ModelData>::row_data(size_t i) const =0
```

Returns the data for a particular row. This function should be called with `row < row_count()`.

### `set_row_data` (virtual)

```cpp
void slint::Model<ModelData>::set_row_data(size_t, const ModelData &)
```

Sets the data for a particular row.

This function should only be called with `row < row_count()`.

If the model cannot support data changes, then it is ok to do nothing. The default implementation will print a warning to stderr.

If the model can update the data, it should also call `row_changed`

## Protected Functions

### `notify_row_changed`

```cpp
void slint::Model<ModelData>::notify_row_changed(size_t row)
```

Notify the views that a specific row was changed

Your model implementation should call this function after the data of a row changes.

### `notify_row_added`

```cpp
void slint::Model<ModelData>::notify_row_added(size_t index, size_t count)
```

Notify the views that rows were added

Your model implementation should call this function after the row were added.

### `notify_row_removed`

```cpp
void slint::Model<ModelData>::notify_row_removed(size_t index, size_t count)
```

Notify the views that rows were removed

Your model implementation should call this function after the row were removed.

### `notify_reset`

```cpp
void slint::Model<ModelData>::notify_reset()
```

Notify the views that the model has been changed and that everything needs to be reloaded

Your model implementation should call this function after the model has been changed.

### `row_changed`

```cpp
void slint::Model<ModelData>::row_changed(size_t row)
```

### `row_added`

```cpp
void slint::Model<ModelData>::row_added(size_t index, size_t count)
```

### `row_removed`

```cpp
void slint::Model<ModelData>::row_removed(size_t index, size_t count)
```

### `reset`

```cpp
void slint::Model<ModelData>::reset()
```