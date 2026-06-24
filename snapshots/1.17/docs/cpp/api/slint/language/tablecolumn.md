---
title: "slint::language::TableColumn Struct"
description: "This is used to define the column and the column header of a TableView."
---
```cpp
struct TableColumn;
```

```cpp
#include <slint.h>
```

This is used to define the column and the column header of a TableView.

## Public Attributes

### `title`

```cpp
SharedString slint::language::TableColumn::title
```

The title of the column header.

### `min_width`

```cpp
float slint::language::TableColumn::min_width
```

The minimum column width (logical length)

### `horizontal_stretch`

```cpp
float slint::language::TableColumn::horizontal_stretch
```

The horizontal column stretch.

### `sort_order`

```cpp
SortOrder slint::language::TableColumn::sort_order
```

Sorts the column.

### `width`

```cpp
float slint::language::TableColumn::width
```

the actual width of the column (logical length)