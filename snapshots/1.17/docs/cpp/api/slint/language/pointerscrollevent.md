---
title: "slint::language::PointerScrollEvent Struct"
---
```cpp
struct PointerScrollEvent;
```

```cpp
#include <slint.h>
```

Represents a Pointer scroll (or wheel) event sent by the windowing system. This structure is passed to the `scroll-event` callback of the `TouchArea` element.

## Public Attributes

### `delta_x`

```cpp
float slint::language::PointerScrollEvent::delta_x
```

The amount of pixel in the horizontal direction.

### `delta_y`

```cpp
float slint::language::PointerScrollEvent::delta_y
```

The amount of pixel in the vertical direction.

### `modifiers`

```cpp
KeyboardModifiers slint::language::PointerScrollEvent::modifiers
```

The keyboard modifiers pressed during the event.