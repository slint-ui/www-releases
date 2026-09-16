---
title: "slint::interpreter::ComponentInstance Class"
---
```cpp
class ComponentInstance;
```

```cpp
#include <slint-interpreter.h>
```

**Inherits** `vtable::Dyn`.

The [ComponentInstance](./) represents a running instance of a component.

You can create an instance with the [ComponentDefinition::create()](../componentdefinition/#create) function.

Properties and callback can be accessed using the associated functions.

An instance can be put on screen with the [ComponentInstance::show()](./#show) or the [ComponentInstance::run()](./#run)

## Public Functions

### `show`

```cpp
void slint::interpreter::ComponentInstance::show() const
```

Marks the window of this component to be shown on the screen. This registers the window with the windowing system. In order to react to events from the windowing system, such as draw requests or mouse/touch input, it is still necessary to spin the event loop, using [slint::run\_event\_loop()](../../run_event_loop/).

### `hide`

```cpp
void slint::interpreter::ComponentInstance::hide() const
```

Marks the window of this component to be hidden on the screen. This de-registers the window from the windowing system and it will not receive any further events.

### `window`

```cpp
const slint::Window & slint::interpreter::ComponentInstance::window() const
```

Returns the [Window](../../window/) associated with this component. The window API can be used to control different aspects of the integration into the windowing system, such as the position on the screen.

### `run`

```cpp
void slint::interpreter::ComponentInstance::run() const
```

This is a convenience function that first calls [show()](./#show), followed by [slint::run\_event\_loop()](../../run_event_loop/) and [hide()](./#hide).

### `qwidget`

```cpp
QWidget * slint::interpreter::ComponentInstance::qwidget() const
```

Return a QWidget for this instance. This function is only available if the qt graphical backend was compiled in, and it may return nullptr if the Qt backend is not used at runtime.

### `set_property`

```cpp
bool slint::interpreter::ComponentInstance::set_property(std::string_view name, const Value &value) const
```

Set the value for a public property of this component

For example, if the component has a `property <string> hello;`, we can set this property

```cpp
instance->set_property("hello", slint::SharedString("world"));
```

Returns true if the property was correctly set. Returns false if the property could not be set because it either do not exist (was not declared in .slint) or if the value is not of the proper type for the property's type.

### `get_property`

```cpp
std::optional<Value> slint::interpreter::ComponentInstance::get_property(std::string_view name) const
```

Returns the value behind a property declared in .slint.

### `invoke`

```cpp
std::optional<Value> slint::interpreter::ComponentInstance::invoke(std::string_view name, std::span<const Value> args) const
```

Invoke the specified callback or function declared in .slint with the given arguments

Example: imagine the .slint file contains the given callback declaration:

```cpp
callback foo(string, int) -> string;
```

Then one can call it with this function

```cpp
slint::Value args[] = { SharedString("Hello"), 42. };
instance->invoke("foo", { args, 2 });
```

Returns an null optional if the callback don't exist or if the argument don't match Otherwise return the returned value from the callback, which may be an empty [Value](../value/) if the callback did not return a value.

### `set_callback`

```cpp
auto slint::interpreter::ComponentInstance::set_callback(std::string_view name, F callback) const -> bool
```

Set a handler for the callback with the given name.

A callback with that name must be defined in the document otherwise the function returns false.

The *callback* parameter is a functor which takes as argument a slice of [Value](../value/) and must return a [Value](../value/).

Example: imagine the .slint file contains the given callback declaration:

```cpp
callback foo(string, int) -> string;
```

Then one can set the callback handler with this function

```cpp
instance->set_callback("foo", [](auto args) {
   std::cout << "foo(" << *args[0].to_string() << ", " << *args[1].to_number() << ")\n";
});
```

Note: Since the [ComponentInstance](./) holds the handler, the handler itself should not capture a strong reference to the instance.

### `set_global_property`

```cpp
bool slint::interpreter::ComponentInstance::set_global_property(std::string_view global, std::string_view prop_name, const Value &value) const
```

Set the value for a property within an exported global singleton.

For example, if the main file has an exported global `TheGlobal` with a `property <int> hello`, we can set this property

```cpp
instance->set_global_property("TheGlobal", "hello", 42);
```

Returns true if the property was correctly set. Returns false if the property could not be set because it either does not exist (was not declared in .slint) or if the value is not of the correct type for the property's type.

**Note:** Only globals that are exported or re-exported from the main .slint file will be accessible

### `get_global_property`

```cpp
std::optional<Value> slint::interpreter::ComponentInstance::get_global_property(std::string_view global, std::string_view prop_name) const
```

Returns the value behind a property in an exported global singleton.

### `set_global_callback`

```cpp
bool slint::interpreter::ComponentInstance::set_global_callback(std::string_view global, std::string_view name, F callback) const
```

Like `set_callback()` but on a callback in the specified exported global singleton.

Example: imagine the .slint file contains the given global:

```cpp
,no-preview
  export global Logic {
       pure callback to_uppercase(string) -> string;
  }
```

Then you can set the callback handler

```cpp
instance->set_global_callback("Logic", "to_uppercase", [](auto args) {
    std::string arg1(*args[0].to_string());
    std::transform(arg1.begin(), arg1.end(), arg1.begin(), toupper);
    return SharedString(arg1);
})
```

**Note:** Only globals that are exported or re-exported from the main .slint file will be accessible

### `invoke_global`

```cpp
std::optional<Value> slint::interpreter::ComponentInstance::invoke_global(std::string_view global, std::string_view callable_name, std::span<const Value> args) const
```

Invoke the specified callback or function declared in an exported global singleton.

### `definition`

```cpp
ComponentDefinition slint::interpreter::ComponentInstance::definition() const
```

Return the [ComponentDefinition](../componentdefinition/) that was used to create this instance.