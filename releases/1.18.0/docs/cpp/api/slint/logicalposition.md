---
title: "slint::LogicalPosition Struct"
description: "A position in logical pixel coordinates."
---
```cpp
struct LogicalPosition;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Point<float>](../point/).

A position in logical pixel coordinates.

## Public Functions

### `LogicalPosition`

```cpp
explicit slint::LogicalPosition::LogicalPosition(const Point<float> p)
```

Explicitly convert a [Point\<float\>](../point/) to a [LogicalPosition](./).

### `LogicalPosition`

```cpp
slint::LogicalPosition::LogicalPosition()
```

Default construct a [LogicalPosition](./) in the origin.