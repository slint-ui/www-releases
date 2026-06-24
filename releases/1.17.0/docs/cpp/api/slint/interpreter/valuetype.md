---
title: "slint::interpreter::ValueType Enum"
---
```cpp
enum class ValueType
```

| Value | Description |
| --- | --- |
| `Void` | The variant that expresses the non-type. This is the default. |
| `Number` | An `int` or a `float` (this is also used for unit based type such as `length` or `angle`) |
| `String` | Correspond to the `string` type in .slint. |
| `Bool` | Correspond to the `bool` type in .slint. |
| `Model` | A model (that includes array in .slint) |
| `Struct` | An object. |
| `Brush` | Correspond to `brush` or `color` type in .slint. For color, this is then a \[`Brush::SolidColor`\]. |
| `Image` | Correspond to `image` type in .slint. |
| `Other` | The type is not a public type but something internal. |

This enum represents the different public variants of the \[`Value`\] enum, without the contained values.