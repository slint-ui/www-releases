---
title: "slint::platform::Platform Class"
---
```cpp
class Platform;
```

```cpp
#include <slint-platform.h>
```

The platform acts as a factory to create [WindowAdapter](../windowadapter/) instances.

Call [slint::platform::set\_platform()](../set_platform/) before creating any other Slint handles. Any subsequently created Slint windows will use the [WindowAdapter](../windowadapter/) provided by the create\_window\_adapter function.

## Types
- [Task](../platform-task/)

## Public Types

### `Clipboard`

```cpp
enum class Clipboard
```

| Value | Description |
| --- | --- |
| `DefaultClipboard` |  |
| `SelectionClipboard` |  |

The type of clipboard used in [Platform::clipboard\_text](./#clipboard_text) and PLatform::set\_clipboard\_text.

## Public Functions

### `~Platform` (virtual)

```cpp
slint::platform::Platform::~Platform()=default
```

### `Platform`

```cpp
slint::platform::Platform::Platform(const Platform &)=delete
```

### `operator=`

```cpp
Platform & slint::platform::Platform::operator=(const Platform &)=delete
```

### `Platform`

```cpp
slint::platform::Platform::Platform()=default
```

### `create_window_adapter` (pure virtual)

```cpp
std::unique_ptr<WindowAdapter> slint::platform::Platform::create_window_adapter()=0
```

Returns a new [WindowAdapter](../windowadapter/).

### `duration_since_start` (pure virtual)

```cpp
std::chrono::milliseconds slint::platform::Platform::duration_since_start()=0
```

Returns the amount of milliseconds since start of the application.

This function should only be implemented if the runtime is compiled with SLINT\_FEATURE\_FREESTANDING

### `set_clipboard_text` (virtual)

```cpp
void slint::platform::Platform::set_clipboard_text(const SharedString &, Clipboard)
```

Sends the given text into the system clipboard.

If the platform doesn't support the specified clipboard, this function should do nothing

### `clipboard_text` (virtual)

```cpp
std::optional<SharedString> slint::platform::Platform::clipboard_text(Clipboard)
```

Returns a copy of text stored in the system clipboard, if any.

If the platform doesn't support the specified clipboard, the function should return nullopt

### `run_event_loop` (virtual)

```cpp
void slint::platform::Platform::run_event_loop()
```

Spins an event loop and renders the visible windows.

### `quit_event_loop` (virtual)

```cpp
void slint::platform::Platform::quit_event_loop()
```

Exits the event loop.

This is what is called by [slint::quit\_event\_loop()](../../quit_event_loop/) and can be called from a different thread or re-enter from the event loop

### `run_in_event_loop` (virtual)

```cpp
void slint::platform::Platform::run_in_event_loop(Task)
```

Run a task from the event loop.

This function is called by [slint::invoke\_from\_event\_loop()](../../invoke_from_event_loop/). It can be called from any thread, but the passed function must only be called from the event loop. Reimplements this function and moves the event to the event loop before calling [Task::run()](../platform-task/#run)