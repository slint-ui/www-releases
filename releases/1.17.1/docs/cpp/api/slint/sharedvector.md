---
title: "slint::SharedVector Struct"
---
```cpp
template <typename T>
struct SharedVector;
```

```cpp
#include <slint.h>
```

[SharedVector](./) is a vector template class similar to [std::vector](https://en.cppreference.com/w/cpp/container/vector) that's primarily used for passing data in and out of the Slint run-time library. It uses implicit-sharing to make creating copies cheap. Only when a function changes the vector's data, a copy is is made.

## Public Functions

### `SharedVector`

```cpp
slint::SharedVector<T>::SharedVector()
```

Creates a new, empty vector.

### `SharedVector`

```cpp
slint::SharedVector<T>::SharedVector(std::initializer_list<T> args)
```

Creates a new vector that holds all the elements of the given [std::initializer\_list](https://en.cppreference.com/w/cpp/utility/initializer_list) *args*.

### `SharedVector`

```cpp
explicit slint::SharedVector<T>::SharedVector(size_t size)
```

Creates a vector of a given size, with default-constructed data.

### `SharedVector`

```cpp
explicit slint::SharedVector<T>::SharedVector(size_t size, const T &value)
```

Creates a vector of a given size, initialized with copies of the *value*.

### `SharedVector`

```cpp
slint::SharedVector<T>::SharedVector(InputIt first, InputIt last)
```

Constructs the container with the contents of the range `[first, last)`.

### `SharedVector`

```cpp
slint::SharedVector<T>::SharedVector(const SharedVector &other)
```

Creates a new vector that is a copy of *other*.

### `~SharedVector`

```cpp
slint::SharedVector<T>::~SharedVector()
```

Destroys this vector. The underlying data is destroyed if no other vector references it.

### `operator=`

```cpp
SharedVector & slint::SharedVector<T>::operator=(const SharedVector &other)
```

Assigns the data of *other* to this vector and returns a reference to this vector.

### `operator=`

```cpp
SharedVector & slint::SharedVector<T>::operator=(SharedVector &&other)
```

Move-assign's *other* to this vector and returns a reference to this vector.

### `cbegin`

```cpp
const T * slint::SharedVector<T>::cbegin() const
```

Returns a const pointer to the first element of this vector.

### `cend`

```cpp
const T * slint::SharedVector<T>::cend() const
```

Returns a const pointer that points past the last element of this vector. The pointer cannot be dereferenced, it can only be used for comparison.

### `begin`

```cpp
const T * slint::SharedVector<T>::begin() const
```

Returns a const pointer to the first element of this vector.

### `end`

```cpp
const T * slint::SharedVector<T>::end() const
```

Returns a const pointer that points past the last element of this vector. The pointer cannot be dereferenced, it can only be used for comparison.

### `begin`

```cpp
T * slint::SharedVector<T>::begin()
```

Returns a pointer to the first element of this vector.

### `end`

```cpp
T * slint::SharedVector<T>::end()
```

Returns a pointer that points past the last element of this vector. The pointer cannot be dereferenced, it can only be used for comparison.

### `size`

```cpp
std::size_t slint::SharedVector<T>::size() const
```

Returns the number of elements in this vector.

### `empty`

```cpp
bool slint::SharedVector<T>::empty() const
```

Returns true if there are no elements on this vector; false otherwise.

### `operator[]`

```cpp
T & slint::SharedVector<T>::operator[](std::size_t index)
```

This indexing operator returns a reference to the *\`index\`th* element of this vector.

### `operator[]`

```cpp
const T & slint::SharedVector<T>::operator[](std::size_t index) const
```

This indexing operator returns a const reference to the *\`index\`th* element of this vector.

### `at`

```cpp
const T & slint::SharedVector<T>::at(std::size_t index) const
```

Returns a reference to the *\`index\`th* element of this vector.

### `push_back`

```cpp
void slint::SharedVector<T>::push_back(const T &value)
```

Appends the *value* as a new element to the end of this vector.

### `push_back`

```cpp
void slint::SharedVector<T>::push_back(T &&value)
```

Moves the *value* as a new element to the end of this vector.

### `clear`

```cpp
void slint::SharedVector<T>::clear()
```

Clears the vector and removes all elements. The capacity remains unaffected.

## Friends

### `operator==`

```cpp
bool operator==(const SharedVector &a, const SharedVector &b)
```

Returns true if the vector *a* has the same number of elements as *b* and all the elements also compare equal; false otherwise.