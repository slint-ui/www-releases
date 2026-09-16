---
title: "slint::MapModel Class"
---
```cpp
template <typename SourceModelData, typename MappedModelData>
class MapModel;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Model<SourceModelData>](../model/).

The [MapModel](./) acts as an adapter model for a given source model by applying a mapping function. The mapping function is called for each row on the source model and allows transforming the values on the fly. The [MapModel](./) has two template parameters: The SourceModelData specifies the data type of the underlying source model, and the MappedModelData the data type of this [MapModel](./). This permits not only changing the values of the underlying source model, but also changing the data type itself. For example a [MapModel](./) can be used to adapt a model that provides numbers to be a model that exposes all numbers converted to strings, by calling `std::to_string` on each value given in the mapping lambda expression.

```cpp
    auto source_model = std::make_shared<slint::VectorModel<Person>>(...);
    auto mapped_model = std::make_shared<slint::MapModel<Person, SharedString>>(
        source_model, [](const Person &person) {
//          return fmt::format("{} {}", person.first, person.last);
//      });
```

## Public Functions

### `MapModel`

```cpp
slint::MapModel<SourceModelData, MappedModelData>::MapModel(std::shared_ptr<Model<SourceModelData>> source_model, std::function<MappedModelData(const SourceModelData &)> map_fn)
```

Constructs a new [MapModel](./) that provides an altered view on the *source\_model* by applying *map\_fn* on the data in each row.

### `row_count` (virtual)

```cpp
size_t slint::MapModel<SourceModelData, MappedModelData>::row_count() const override
```

The amount of row in the model.

### `row_data` (virtual)

```cpp
std::optional<MappedModelData> slint::MapModel<SourceModelData, MappedModelData>::row_data(size_t i) const override
```

Returns the data for a particular row. This function should be called with `row < row_count()`.

### `source_model`

```cpp
std::shared_ptr<Model<SourceModelData>> slint::MapModel<SourceModelData, MappedModelData>::source_model() const
```

Returns the source model of this filter model.

### `reset`

```cpp
void slint::MapModel<SourceModelData, MappedModelData>::reset()
```

Re-applies the model's mapping function on each row of the source model. Use this if state external to the mapping function has changed.