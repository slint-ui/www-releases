---
title: "slint::StyledText Struct"
---
```cpp
struct StyledText;
```

```cpp
#include <slint.h>
```

Styled text that has been parsed and separated into paragraphs.

Use `StyledText::from_markdown()` to parse a markdown string, or `StyledText::from_plain_text()` to wrap plain text without formatting.

Assign the result to a `styled-text` property in a Slint component to display it.

## Public Functions

### `StyledText`

```cpp
slint::StyledText::StyledText()
```

Creates a default (empty) styled text.

### `~StyledText`

```cpp
slint::StyledText::~StyledText()
```

Destroys this [StyledText](./).

### `StyledText`

```cpp
slint::StyledText::StyledText(const StyledText &other)
```

Creates a new [StyledText](./) from *other*.

### `operator=`

```cpp
StyledText & slint::StyledText::operator=(const StyledText &other)
```

Assigns *other* to this styled text and returns a reference to this styled text.

### `operator=`

```cpp
StyledText & slint::StyledText::operator=(StyledText &&other)
```

Move-assigns *other* to this [StyledText](./) instance.

## Friends

### `operator==`

```cpp
bool operator==(const StyledText &a, const StyledText &b)
```

Returns true if *a* is equal to *b*; otherwise returns false.

## Public Static Functions

### `from_plain_text`

```cpp
static StyledText slint::StyledText::from_plain_text(std::string_view text)
```

Creates styled text from plain text without applying markdown parsing.

### `from_markdown`

```cpp
static std::optional<StyledText> slint::StyledText::from_markdown(std::string_view markdown)
```

Parses markdown into styled text.

Returns `std::nullopt` if the markdown contains unsupported syntax.