---
title: "slint::PhysicalSize Struct"
description: "A size given in physical pixels."
---
```cpp
struct PhysicalSize;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Size<uint32_t>](../size/).

A size given in physical pixels.

## Public Functions

### `PhysicalSize`

```cpp
explicit constexpr constexpr slint::PhysicalSize::PhysicalSize(const Size<uint32_t> s={ 0, 0 })
```

Explicitly convert a [Size\<uint32\_t\>](../size/) to a [LogicalSize](../logicalsize/).