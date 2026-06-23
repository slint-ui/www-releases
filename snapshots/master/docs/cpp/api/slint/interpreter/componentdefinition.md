---
title: "slint::interpreter::ComponentDefinition Class"
---
```cpp
class ComponentDefinition;
```

```cpp
#include <slint-interpreter.h>
```

[ComponentDefinition](./) is a representation of a compiled component from .slint markup.

It can be constructed from a .slint file using the [ComponentCompiler::build\_from\_path()](../componentcompiler/#build_from_path) or [ComponentCompiler::build\_from\_source()](../componentcompiler/#build_from_source) functions. And then it can be instantiated with the [create()](./#create) function.

The [ComponentDefinition](./) acts as a factory to create new instances. When you've finished creating the instances it is safe to destroy the [ComponentDefinition](./).

## Public Functions

### `ComponentDefinition`

```cpp
slint::interpreter::ComponentDefinition::ComponentDefinition(const ComponentDefinition &other)
```

Constructs a new [ComponentDefinition](./) as a copy of *other*.

### `operator=`

```cpp
ComponentDefinition & slint::interpreter::ComponentDefinition::operator=(const ComponentDefinition &other)
```

Assigns *other* to this [ComponentDefinition](./).

### `~ComponentDefinition`

```cpp
slint::interpreter::ComponentDefinition::~ComponentDefinition()
```

Destroys this [ComponentDefinition](./).

### `create`

```cpp
ComponentHandle<ComponentInstance> slint::interpreter::ComponentDefinition::create() const
```

Creates a new instance of the component and returns a shared handle to it.

### `properties`

```cpp
slint::SharedVector<PropertyDescriptor> slint::interpreter::ComponentDefinition::properties() const
```

Returns a vector of [PropertyDescriptor](../propertydescriptor/) instances that describe the list of public properties that can be read and written using [ComponentInstance::set\_property](../componentinstance/#set_property) and [ComponentInstance::get\_property](../componentinstance/#get_property).

### `callbacks`

```cpp
slint::SharedVector<slint::SharedString> slint::interpreter::ComponentDefinition::callbacks() const
```

Returns a vector of strings that describe the list of public callbacks that can be invoked using [ComponentInstance::invoke](../componentinstance/#invoke) and set using [ComponentInstance::set\_callback](../componentinstance/#set_callback).

### `functions`

```cpp
slint::SharedVector<slint::SharedString> slint::interpreter::ComponentDefinition::functions() const
```

Returns a vector of strings that describe the list of public functions that can be invoked using [ComponentInstance::invoke](../componentinstance/#invoke).

### `name`

```cpp
slint::SharedString slint::interpreter::ComponentDefinition::name() const
```

Returns the name of this Component as written in the .slint file.

### `globals`

```cpp
slint::SharedVector<slint::SharedString> slint::interpreter::ComponentDefinition::globals() const
```

Returns a vector of strings with the names of all exported global singletons.

### `global_properties`

```cpp
std::optional<slint::SharedVector<PropertyDescriptor>> slint::interpreter::ComponentDefinition::global_properties(std::string_view global_name) const
```

Returns a vector of the property descriptors of the properties of the specified publicly exported global singleton. An empty optional is returned if there exists no exported global singleton under the specified name.

### `global_callbacks`

```cpp
std::optional<slint::SharedVector<slint::SharedString>> slint::interpreter::ComponentDefinition::global_callbacks(std::string_view global_name) const
```

Returns a vector of the names of the callbacks of the specified publicly exported global singleton. An empty optional is returned if there exists no exported global singleton under the specified name.

### `global_functions`

```cpp
std::optional<slint::SharedVector<slint::SharedString>> slint::interpreter::ComponentDefinition::global_functions(std::string_view global_name) const
```

Returns a vector of the names of the functions of the specified publicly exported global singleton. An empty optional is returned if there exists no exported global singleton under the specified name.