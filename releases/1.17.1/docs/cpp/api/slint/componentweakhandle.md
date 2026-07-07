---
title: "slint::ComponentWeakHandle Class"
description: "A weak reference to the component. Can be constructed from a `ComponentHandle<T>`"
---
```cpp
template <typename T>
class ComponentWeakHandle;
```

```cpp
#include <slint.h>
```

A weak reference to the component. Can be constructed from a `ComponentHandle<T>`

## Public Functions

### `ComponentWeakHandle`

```cpp
slint::ComponentWeakHandle<T>::ComponentWeakHandle()=default
```

Constructs a null [ComponentWeakHandle](./). [lock()](./#lock) will always return empty.

### `ComponentWeakHandle`

```cpp
slint::ComponentWeakHandle<T>::ComponentWeakHandle(const ComponentHandle<T> &other)
```

Copy-constructs a new [ComponentWeakHandle](./) from *other*.

### `lock`

```cpp
std::optional<ComponentHandle<T>> slint::ComponentWeakHandle<T>::lock() const
```

Returns a new strong ComponentHandle\<T\> if the component the weak handle points to is still referenced by any other ComponentHandle\<T\>. An empty [std::optional](https://en.cppreference.com/w/cpp/utility/optional) is returned otherwise.