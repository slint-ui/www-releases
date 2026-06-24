---
title: "slint::PhysicalPosition Struct"
description: "A position in physical pixel coordinates."
---
```cpp
struct PhysicalPosition;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Point<int32_t>](../point/).

A position in physical pixel coordinates.

## Public Functions

### `PhysicalPosition`

```cpp
explicit slint::PhysicalPosition::PhysicalPosition(const Point<int32_t> p)
```

Explicitly convert a [Point\<int32\_t\>](../point/) to a [LogicalPosition](../logicalposition/).

### `PhysicalPosition`

```cpp
slint::PhysicalPosition::PhysicalPosition()
```

Default construct a [PhysicalPosition](./) in the origin.