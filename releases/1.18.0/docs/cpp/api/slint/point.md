---
title: "slint::Point Struct"
---
```cpp
template <typename T>
struct Point;
```

```cpp
#include <slint.h>
```

The [Point](./) structure is used to represent a two-dimensional point with x and y coordinates.

## Public Attributes

### `x`

```cpp
T slint::Point<T>::x
```

The x coordinate of the point.

### `y`

```cpp
T slint::Point<T>::y
```

The y coordinate of the point.

## Public Functions

### `operator==`

```cpp
bool slint::Point<T>::operator==(const Point &other) const =default
```

Compares with *other* and returns true if they are equal; false otherwise.