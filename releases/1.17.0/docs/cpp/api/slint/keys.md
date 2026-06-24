---
title: "slint::Keys Class"
---
```cpp
class Keys;
```

```cpp
#include <slint.h>
```

A `Keys` is created by the @keys(...) macro in Slint and defines which key event(s) activate a KeyBinding.

## Public Functions

### `Keys`

```cpp
slint::Keys::Keys()=default
```

Returns an empty `keys` instance, which never matches any key event.

### `Keys`

```cpp
slint::Keys::Keys(const Keys &)=default
```

Copy constructor.

### `Keys`

```cpp
slint::Keys::Keys(Keys &&)=default
```

Move constructor.

### `operator=`

```cpp
slint::Keys & slint::Keys::operator=(const Keys &)=default
```

Copy assignment operator.

### `operator=`

```cpp
slint::Keys & slint::Keys::operator=(Keys &&)=default
```

Move assignment operator.

### `to_string`

```cpp
SharedString slint::Keys::to_string() const
```

Returns a string that looks native on the current platform.

For example, the shortcut created with @keys(Meta + Control + A) will be converted like this:

- **macOS**: `⌃⌘A`
- **Windows**: `Win+Ctrl+A`
- **Linux**: `Super+Ctrl+A`

Note that this functions output is best-effort and may be adjusted/improved at any time, do not rely on this output to be stable!

## Public Static Functions

### `from_parts`

```cpp
static std::optional<Keys> slint::Keys::from_parts(std::span<const std::string_view> parts)
```

Create a `Keys` from a span of string parts, e.g. `{"Control", "Shift?", "Z"}`.

Each element is either a modifier (`Control`, `Shift`, `Alt`, `Meta`, `Shift?`, `Alt?`) or a key name from the Key namespace (case-sensitive). If not found, it is treated as a string literal (must be a single lowercase grapheme cluster).

Returns `std::nullopt` on parse failure.

### `from_parts`

```cpp
static std::optional<Keys> slint::Keys::from_parts(std::initializer_list<std::string_view> parts)
```

This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.

## Friends

### `operator==`

```cpp
bool operator==(const Keys &a, const Keys &b)
```

Equality operator, returns true if the two `Keys` instances are equal, i.e. they match the same key events.

### `operator!=`

```cpp
bool operator!=(const Keys &a, const Keys &b)
```

Inequality operator, returns true if the two `Keys` instances are not equal, i.e. they match different key events.