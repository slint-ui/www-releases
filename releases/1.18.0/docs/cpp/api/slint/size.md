---
title: "slint::Size Struct"
---
```cpp
template <typename T>
struct Size;
```

```cpp
#include <slint.h>
```

The [Size](./) structure is used to represent a two-dimensional size with width and height.

## Public Attributes

### `width`

```cpp
T slint::Size<T>::width
```

The width of the size.

### `height`

```cpp
T slint::Size<T>::height
```

The height of the size.

## Public Functions

### `operator==`

```cpp
bool slint::Size<T>::operator==(const Size &other) const =default
```

Compares with *other* and returns true if they are equal; false otherwise.