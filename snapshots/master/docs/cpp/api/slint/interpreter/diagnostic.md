---
title: "slint::interpreter::Diagnostic Struct"
---
```cpp
struct Diagnostic;
```

```cpp
#include <slint.h>
```

[Diagnostic](./) describes the aspects of either a warning or an error, along with its location and a description. Diagnostics are typically returned by [slint::interpreter::ComponentCompiler::diagnostics()](../componentcompiler/#diagnostics) in a vector.

## Public Attributes

### `message`

```cpp
SharedString slint::interpreter::Diagnostic::message
```

The message describing the warning or error.

### `source_file`

```cpp
SharedString slint::interpreter::Diagnostic::source_file
```

The path to the source file where the warning or error is located.

### `line`

```cpp
uintptr_t slint::interpreter::Diagnostic::line
```

The line within the source file. Line numbers start at 1.

### `column`

```cpp
uintptr_t slint::interpreter::Diagnostic::column
```

The column within the source file. Column numbers start at 1.

### `level`

```cpp
DiagnosticLevel slint::interpreter::Diagnostic::level
```

The level of the diagnostic, such as a warning or an error.