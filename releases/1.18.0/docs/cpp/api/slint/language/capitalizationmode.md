---
title: "slint::language::CapitalizationMode Enum"
---
```cpp
enum class CapitalizationMode
```

| Value | Description |
| --- | --- |
| `None` | No auto-capitalization. |
| `Sentences` | Capitalize the first character of each sentence. |
| `Words` | Capitalize the first character of each word. |
| `Characters` | Capitalize all characters. |

This enum describes the auto-capitalization behavior that the input method (e.g. a soft keyboard) should apply while text is entered in a `TextInput`.