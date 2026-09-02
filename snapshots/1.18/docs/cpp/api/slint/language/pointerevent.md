---
title: "slint::language::PointerEvent Struct"
---
```cpp
struct PointerEvent;
```

```cpp
#include <slint.h>
```

Represents a Pointer event sent by the windowing system. This structure is passed to the `pointer-event` callback of the `TouchArea` element.

## Public Attributes

### `button`

```cpp
PointerEventButton slint::language::PointerEvent::button
```

The button that was pressed or released.

### `kind`

```cpp
PointerEventKind slint::language::PointerEvent::kind
```

The kind of the event.

### `modifiers`

```cpp
KeyboardModifiers slint::language::PointerEvent::modifiers
```

The keyboard modifiers pressed during the event.

### `touch_finger_id`

```cpp
int32_t slint::language::PointerEvent::touch_finger_id
```

The unique ID of the touch point, indicating the finger ID. 0 means it's not a touch event (e.g., mouse).