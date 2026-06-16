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

### <a id="show"></a> `show`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">show</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Marks the window of this component to be shown on the screen. This registers the window with the windowing system. In order to react to events from the windowing system, such as draw requests or mouse/touch input, it is still necessary to spin the event loop, using [slint::run\_event\_loop()](../../run-event-loop/).

### <a id="hide"></a> `hide`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">hide</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Marks the window of this component to be hidden on the screen. This de-registers the window from the windowing system and it will not receive any further events.

### <a id="window"></a> `window`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a href="../../window/" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Window</span></a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">window</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the [Window](../../window/) associated with this component. The window API can be used to control different aspects of the integration into the windowing system, such as the position on the screen.

### <a id="run"></a> `run`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">run</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

This is a convenience function that first calls [show()](./#show), followed by [slint::run\_event\_loop()](../../run-event-loop/) and [hide()](./#hide).

### <a id="qwidget"></a> `qwidget`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">QWidget</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> *</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">qwidget</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Return a QWidget for this instance. This function is only available if the qt graphical backend was compiled in, and it may return nullptr if the Qt backend is not used at runtime.

### <a id="set_property"></a> `set_property`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_property</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">value</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Set the value for a public property of this component

For example, if the component has a `property <string> hello;`, we can set this property

```cpp
instance->set_property("hello", slint::SharedString("world"));
```

Returns true if the property was correctly set. Returns false if the property could not be set because it either do not exist (was not declared in .slint) or if the value is not of the proper type for the property's type.

### <a id="get_property"></a> `get_property`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">get_property</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the value behind a property declared in .slint.

### <a id="invoke"></a> `invoke`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">invoke</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/container/span" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">span</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

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

### <a id="set_callback"></a> `set_callback`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">auto</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_callback</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">F</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> callback</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> -> </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span></span></code></pre>

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

### <a id="set_global_property"></a> `set_global_property`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_global_property</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> global</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> prop_name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">value</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Set the value for a property within an exported global singleton.

For example, if the main file has an exported global `TheGlobal` with a `property <int> hello`, we can set this property

```cpp
instance->set_global_property("TheGlobal", "hello", 42);
```

Returns true if the property was correctly set. Returns false if the property could not be set because it either does not exist (was not declared in .slint) or if the value is not of the correct type for the property's type.

**Note:** Only globals that are exported or re-exported from the main .slint file will be accessible

### <a id="get_global_property"></a> `get_global_property`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">get_global_property</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> global</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> prop_name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the value behind a property in an exported global singleton.

### <a id="set_global_callback"></a> `set_global_callback`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_global_callback</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> global</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">F</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> callback</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

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

### <a id="invoke_global"></a> `invoke_global`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">invoke_global</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> global</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> callable_name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/container/span" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">span</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Invoke the specified callback or function declared in an exported global singleton.

### <a id="definition"></a> `definition`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../componentdefinition/" class="api-link">ComponentDefinition</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentInstance</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">definition</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Return the [ComponentDefinition](../componentdefinition/) that was used to create this instance.