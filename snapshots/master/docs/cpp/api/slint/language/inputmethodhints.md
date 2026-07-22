---
title: "slint::language::InputMethodHints Struct"
---
```cpp
struct InputMethodHints;
```

```cpp
#include <slint.h>
```

This structure holds the hints that a `TextInput` gives to the platform's input method (e.g. a soft keyboard) about the expected input. The input method may take these hints into account, but might also ignore them.

## Public Attributes

### `capitalization`

```cpp
CapitalizationMode slint::language::InputMethodHints::capitalization
```

The auto-capitalization behavior that the input method should apply. Defaults to sentences.

### `auto_correct`

```cpp
bool slint::language::InputMethodHints::auto_correct
```

Hint that the input method may automatically correct spelling mistakes as the user types. Defaults to true.

### `auto_complete`

```cpp
bool slint::language::InputMethodHints::auto_complete
```

Hint that the input method may offer auto-completion suggestions for the entered text. Defaults to true.