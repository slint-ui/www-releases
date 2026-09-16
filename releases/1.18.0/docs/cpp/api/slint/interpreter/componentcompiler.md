---
title: "slint::interpreter::ComponentCompiler Class"
---
```cpp
class ComponentCompiler;
```

```cpp
#include <slint-interpreter.h>
```

[ComponentCompiler](./) is the entry point to the Slint interpreter that can be used to load .slint files or compile them on-the-fly from a string (using [build\_from\_source()](./#build_from_source)) or from a path (using [build\_from\_source()](./#build_from_source))

## Public Functions

### `ComponentCompiler`

```cpp
slint::interpreter::ComponentCompiler::ComponentCompiler()
```

Constructs a new [ComponentCompiler](./) instance.

### `~ComponentCompiler`

```cpp
slint::interpreter::ComponentCompiler::~ComponentCompiler()
```

Destroys this [ComponentCompiler](./).

### `set_include_paths`

```cpp
void slint::interpreter::ComponentCompiler::set_include_paths(const slint::SharedVector<slint::SharedString> &paths)
```

Sets the include paths used for looking up `.slint` imports to the specified vector of paths.

### `set_style`

```cpp
void slint::interpreter::ComponentCompiler::set_style(std::string_view style)
```

Sets the style to be used for widgets.

### `style`

```cpp
slint::SharedString slint::interpreter::ComponentCompiler::style() const
```

Returns the widget style the compiler is currently using when compiling .slint files.

### `set_translation_domain`

```cpp
void slint::interpreter::ComponentCompiler::set_translation_domain(std::string_view domain)
```

Sets the domain used for translations.

### `include_paths`

```cpp
slint::SharedVector<slint::SharedString> slint::interpreter::ComponentCompiler::include_paths() const
```

Returns the include paths the component compiler is currently configured with.

### `diagnostics`

```cpp
slint::SharedVector<Diagnostic> slint::interpreter::ComponentCompiler::diagnostics() const
```

Returns the diagnostics that were produced in the last call to [build\_from\_path()](./#build_from_path) or [build\_from\_source()](./#build_from_source).

### `build_from_source`

```cpp
std::optional<ComponentDefinition> slint::interpreter::ComponentCompiler::build_from_source(std::string_view source_code, std::string_view path)
```

Compile a .slint file into a [ComponentDefinition](../componentdefinition/)

Returns the compiled `ComponentDefinition` if there were no errors.

Any diagnostics produced during the compilation, such as warnings or errors, are collected in this [ComponentCompiler](./) and can be retrieved after the call using the [diagnostics()](./#diagnostics) function.

Diagnostics from previous calls are cleared when calling this function.

### `build_from_path`

```cpp
std::optional<ComponentDefinition> slint::interpreter::ComponentCompiler::build_from_path(std::string_view path)
```

Compile some .slint code into a [ComponentDefinition](../componentdefinition/)

The `path` argument will be used for diagnostics and to compute relative paths while importing.

Any diagnostics produced during the compilation, such as warnings or errors, are collected in this [ComponentCompiler](./) and can be retrieved after the call using the Self::diagnostics() function.

Diagnostics from previous calls are cleared when calling this function.