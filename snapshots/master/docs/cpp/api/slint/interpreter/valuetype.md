---
title: "slint::interpreter::ValueType"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> ValueType</span></span></code></pre>

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