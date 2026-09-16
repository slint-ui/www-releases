---
title: "slint::interpreter::Struct Struct"
---
```cpp
struct Struct;
```

```cpp
#include <slint-interpreter.h>
```

This type represents a runtime instance of structure in `.slint`.

This can either be an instance of a name structure introduced with the `struct` keyword in the .slint file, or an anonymous struct written with the `{ key: value, }` notation.

It can be constructed with the range constructor or initializer lst, and converted into or from a [Value](../value/) with the [Value](../value/) constructor and [Value::to\_struct()](../value/#to_struct).

## Types
- [iterator](../struct-iterator/)

## Public Functions

### `Struct`

```cpp
slint::interpreter::Struct::Struct()
```

Constructs a new empty struct. You can add fields with [set\_field()](./#set_field) and read them with [get\_field()](./#get_field).

### `Struct`

```cpp
slint::interpreter::Struct::Struct(const Struct &other)
```

Creates a new [Struct](./) as a copy from *other*. All fields are copied as well.

### `Struct`

```cpp
slint::interpreter::Struct::Struct(Struct &&other)
```

Creates a new [Struct](./) by moving all fields from *other* into this struct.

### `operator=`

```cpp
Struct & slint::interpreter::Struct::operator=(const Struct &other)
```

Assigns all the fields of *other* to this struct.

### `operator=`

```cpp
Struct & slint::interpreter::Struct::operator=(Struct &&other)
```

Moves all the fields of *other* to this struct.

### `~Struct`

```cpp
slint::interpreter::Struct::~Struct()
```

Destroys this struct.

### `Struct`

```cpp
slint::interpreter::Struct::Struct(std::initializer_list<std::pair<std::string_view, Value>> args)
```

Creates a new struct with the fields of the [std::initializer\_list](https://en.cppreference.com/w/cpp/utility/initializer_list) given by args.

### `Struct`

```cpp
slint::interpreter::Struct::Struct(InputIterator it, InputIterator end)
```

Creates a new struct with the fields produced by the iterator *it*. *it* is advanced until it equals *end*.

### `begin`

```cpp
iterator slint::interpreter::Struct::begin() const
```

Returns an iterator over the fields of the struct.

### `end`

```cpp
iterator slint::interpreter::Struct::end() const
```

Returns an iterator that when compared with an iterator returned by [begin()](./#begin) can be used to detect when all fields have been visited.

### `get_field`

```cpp
std::optional<Value> slint::interpreter::Struct::get_field(std::string_view name) const
```

Returns the value of the field with the given *name*; Returns an [std::optional](https://en.cppreference.com/w/cpp/utility/optional) without value if the field does not exist.

### `set_field`

```cpp
void slint::interpreter::Struct::set_field(std::string_view name, const Value &value)
```

Sets the value of the field with the given *name* to the specified *value*. If the field does not exist yet, it is created; otherwise the existing field is updated to hold the new value.