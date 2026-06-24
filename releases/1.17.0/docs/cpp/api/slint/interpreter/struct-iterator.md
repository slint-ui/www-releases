---
title: "slint::interpreter::Struct::iterator Struct"
---
```cpp
struct iterator;
```

```cpp
#include <slint-interpreter.h>
```

The [Struct::iterator](./) class implements the typical C++ iterator protocol and conveniently provides access to the field names and values of a [Struct](../struct/). It is created by calling either [Struct::begin()](../struct/#begin) or [Struct::end()](../struct/#end).

Make sure to compare the iterator to the iterator returned by [Struct::end()](../struct/#end) before de-referencing it. The value returned when de-referencing is a [std::pair](https://en.cppreference.com/w/cpp/utility/pair) that holds a [std::string\_view](https://en.cppreference.com/w/cpp/string/basic_string_view) of the field name as well as a const reference of the value. Both references become invalid when the iterator or the [Struct](../struct/) is changed, so make sure to make copies if you want to retain the name or value.

Note that the order in which the iterator exposes the fields is not defined.

If you're using C++ 17, you can use the convenience destructuring syntax to extract the name and value in one go:

```cpp
Struct stru = ...;
auto it = stru.begin();
...
++it; // advance iterator to the next field
...
// Check iterator before dereferencing it
if (it != stru.end()) {
    // Extract a view of the name and a const reference to the value in one go.
    auto [field_name, field_value] = *it;
}
```

## Public Types

### `value_type`

```cpp
std::pair<std::string_view, const Value &> using slint::interpreter::Struct::iterator::value_type =  std::pair<std::string_view, const Value &>
```

A typedef for std::pair\<std::string\_view, const Value &\> that's returned when dereferencing the iterator.

## Public Functions

### `~iterator`

```cpp
slint::interpreter::Struct::iterator::~iterator()
```

Destroys this field iterator.

### `iterator`

```cpp
slint::interpreter::Struct::iterator::iterator(const iterator &)=delete
```

### `operator=`

```cpp
iterator & slint::interpreter::Struct::iterator::operator=(const iterator &)=delete
```

### `iterator`

```cpp
slint::interpreter::Struct::iterator::iterator(iterator &&other)=default
```

Move-constructs a new iterator from *other*.

### `operator=`

```cpp
iterator & slint::interpreter::Struct::iterator::operator=(iterator &&other)=default
```

Move-assigns the iterator *other* to this and returns a reference to this.

### `operator++`

```cpp
iterator & slint::interpreter::Struct::iterator::operator++()
```

The prefix ++ operator advances the iterator to the next entry and returns a reference to this.

### `operator*`

```cpp
value_type slint::interpreter::Struct::iterator::operator*() const
```

Dereferences the iterator to return a pair of the key and value.

## Friends

### `operator==`

```cpp
bool operator==(const iterator &a, const iterator &b)
```

Returns true if *a* is pointing to the same entry as *b*; false otherwise.

### `operator!=`

```cpp
bool operator!=(const iterator &a, const iterator &b)
```

Returns false if *a* is pointing to the same entry as *b*; true otherwise.