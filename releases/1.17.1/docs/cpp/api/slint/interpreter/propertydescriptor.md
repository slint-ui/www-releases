---
title: "slint::interpreter::PropertyDescriptor Struct"
---
```cpp
struct PropertyDescriptor;
```

```cpp
#include <slint.h>
```

[PropertyDescriptor](./) is a simple structure that's used to describe a property declared in .slint code. It is returned from in a vector from [slint::interpreter::ComponentDefinition::properties()](../componentdefinition/#properties).

## Public Attributes

### `property_name`

```cpp
SharedString slint::interpreter::PropertyDescriptor::property_name
```

The name of the declared property.

### `property_type`

```cpp
ValueType slint::interpreter::PropertyDescriptor::property_type
```

The type of the property.