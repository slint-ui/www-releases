---
title: "slint::language::KeyEvent Struct"
description: "This structure is generated and passed to the key press and release callbacks of the `FocusScope` element."
---
```cpp
struct KeyEvent;
```

```cpp
#include <slint.h>
```

This structure is generated and passed to the key press and release callbacks of the `FocusScope` element.

## Public Attributes

### `text`

```cpp
SharedString slint::language::KeyEvent::text
```

The unicode representation of the key pressed.

### `modifiers`

```cpp
KeyboardModifiers slint::language::KeyEvent::modifiers
```

The keyboard modifiers active at the time of the key press event.

### `repeat`

```cpp
bool slint::language::KeyEvent::repeat
```

This field is set to true for key press events that are repeated, i.e. the key is held down. It's always false for key release events.