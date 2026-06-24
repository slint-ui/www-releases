---
title: "slint::interpreter::Value Class"
---
```cpp
class Value;
```

```cpp
#include <slint-interpreter.h>
```

This is a dynamically typed value used in the Slint interpreter. It can hold a value of different types, and you should use the different overloaded constructors and the to\_xxx() functions to access the value within.

It is also possible to query the type the value holds by calling the [Value::type()](./#type-2) function.

Note that models are only represented in one direction: You can create a slint::Model\<Value\> in C++, store it in a [std::shared\_ptr](https://en.cppreference.com/w/cpp/memory/shared_ptr) and construct [Value](./) from it. Then you can set it on a property in your .slint code that was declared to be either an array (`property <[sometype]> foo;`) or an object literal (`property <{foo: string, bar: int}> my_prop;`). Such properties are dynamic and accept models implemented in C++.

```cpp
Value v(42.0); // Creates a value that holds a double with the value 42.

Value some_value = ...;
// Check if the value has a string
if (std::optional<slint::SharedString> string_value = some_value.to_string())
    do_something(*string_value);  // Extract the string by de-referencing
```

## Public Types

### `Type`

```cpp
ValueType using slint::interpreter::Value::Type =  ValueType
```

A convenience alias for the value type enum.

## Friends

### `operator==`

```cpp
bool operator==(const Value &a, const Value &b)
```

Returns true if *a* and *b* hold values of the same type and the underlying vales are equal.

## Public Functions

### `Value`

```cpp
slint::interpreter::Value::Value()
```

Constructs a new value of type Value::Type::Void.

### `Value`

```cpp
slint::interpreter::Value::Value(const Value &other)
```

Constructs a new value by copying *other*.

### `Value`

```cpp
slint::interpreter::Value::Value(Value &&other)
```

Constructs a new value by moving *other* to this.

### `operator=`

```cpp
Value & slint::interpreter::Value::operator=(const Value &other)
```

Assigns the value *other* to this.

### `operator=`

```cpp
Value & slint::interpreter::Value::operator=(Value &&other)
```

Moves the value *other* to this.

### `~Value`

```cpp
slint::interpreter::Value::~Value()
```

Destroys the value.

### `to_number`

```cpp
std::optional<double> slint::interpreter::Value::to_number() const
```

Returns a [std::optional](https://en.cppreference.com/w/cpp/utility/optional) that contains a double if the type of this [Value](./) is Type::Double, otherwise an empty optional is returned.

### `to_string`

```cpp
std::optional<slint::SharedString> slint::interpreter::Value::to_string() const
```

Returns a [std::optional](https://en.cppreference.com/w/cpp/utility/optional) that contains a string if the type of this [Value](./) is Type::String, otherwise an empty optional is returned.

### `to_bool`

```cpp
std::optional<bool> slint::interpreter::Value::to_bool() const
```

Returns a [std::optional](https://en.cppreference.com/w/cpp/utility/optional) that contains a bool if the type of this [Value](./) is Type::Bool, otherwise an empty optional is returned.

### `to_array`

```cpp
std::optional<slint::SharedVector<Value>> slint::interpreter::Value::to_array() const
```

Returns a [std::optional](https://en.cppreference.com/w/cpp/utility/optional) that contains a vector of values if the type of this [Value](./) is Type::Model, otherwise an empty optional is returned.

The vector will be constructed by serializing all the elements of the model.

### `to_brush`

```cpp
std::optional<slint::Brush> slint::interpreter::Value::to_brush() const
```

Returns a [std::optional](https://en.cppreference.com/w/cpp/utility/optional) that contains a brush if the type of this [Value](./) is Type::Brush, otherwise an empty optional is returned.

### `to_struct`

```cpp
std::optional<Struct> slint::interpreter::Value::to_struct() const
```

Returns a [std::optional](https://en.cppreference.com/w/cpp/utility/optional) that contains a [Struct](../struct/) if the type of this [Value](./) is Type::Struct, otherwise an empty optional is returned.

### `to_image`

```cpp
std::optional<Image> slint::interpreter::Value::to_image() const
```

Returns a [std::optional](https://en.cppreference.com/w/cpp/utility/optional) that contains an [Image](../../image/) if the type of this [Value](./) is Type::Image, otherwise an empty optional is returned.

### `Value`

```cpp
slint::interpreter::Value::Value(double value)
```

Constructs a new [Value](./) that holds the double *value*.

### `Value`

```cpp
slint::interpreter::Value::Value(int value)
```

Constructs a new [Value](./) that holds the int *value*. Internally this is stored as a double and [Value::type()](./#type-2) will return Value::Type::Number.

### `Value`

```cpp
slint::interpreter::Value::Value(const SharedString &str)
```

Constructs a new [Value](./) that holds the string *str*.

### `Value`

```cpp
slint::interpreter::Value::Value(bool b)
```

Constructs a new [Value](./) that holds the boolean *b*.

### `Value`

```cpp
slint::interpreter::Value::Value(const SharedVector<Value> &v)
```

Constructs a new [Value](./) that holds the value vector *v* as a model.

### `Value`

```cpp
slint::interpreter::Value::Value(const std::shared_ptr<slint::Model<Value>> &m)
```

Constructs a new [Value](./) that holds the value model *m*.

### `Value`

```cpp
slint::interpreter::Value::Value(const slint::Brush &brush)
```

Constructs a new [Value](./) that holds the brush *b*.

### `Value`

```cpp
slint::interpreter::Value::Value(const Struct &struc)
```

Constructs a new [Value](./) that holds the [Struct](../struct/) *struc*.

### `Value`

```cpp
slint::interpreter::Value::Value(const Image &img)
```

Constructs a new [Value](./) that holds the [Image](../../image/) *img*.

### `type`

```cpp
Type slint::interpreter::Value::type() const
```

Returns the type the variant holds.