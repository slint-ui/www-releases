---
title: "slint::ComponentHandle Class"
---
```cpp
template <typename T>
class ComponentHandle;
```

```cpp
#include <slint.h>
```

The component handle is like a shared pointer to a component in the generated code. In order to get a component, use `T::create()` where T is the name of the component in the .slint file. This give you a `ComponentHandle<T>`

## Public Functions

### `ComponentHandle`

```cpp
slint::ComponentHandle<T>::ComponentHandle(const vtable::VRc<private_api::ItemTreeVTable, T> &inner)
```

internal constructor

### `operator->`

```cpp
const T * slint::ComponentHandle<T>::operator->() const
```

Arrow operator that implements pointer semantics.

### `operator*`

```cpp
const T & slint::ComponentHandle<T>::operator*() const
```

Dereference operator that implements pointer semantics.

### `operator->`

```cpp
T * slint::ComponentHandle<T>::operator->()
```

Arrow operator that implements pointer semantics.

### `operator*`

```cpp
T & slint::ComponentHandle<T>::operator*()
```

Dereference operator that implements pointer semantics.

### `into_dyn`

```cpp
vtable::VRc<private_api::ItemTreeVTable> slint::ComponentHandle<T>::into_dyn() const
```

internal function that returns the internal handle