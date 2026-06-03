---
title: "slint::interpreter::Struct Struct"
---
```cpp
struct Struct;
```

```cpp
#include <slint-interpreter.h>
```

This type represents a runtime instance of structure in `.slint`.

This can either be an instance of a name structure introduced with the `struct` keyword in the .slint file, or an anonymous struct written with the `{ key: value, }` notation.

It can be constructed with the range constructor or initializer lst, and converted into or from a [Value](../value/) with the [Value](../value/) constructor and [Value::to\_struct()](../value/#to_struct).

## Types
- [iterator](../struct-iterator/)

## Public Functions

### <a id="struct"></a> `Struct`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Constructs a new empty struct. You can add fields with [set\_field()](./#set_field) and read them with [get\_field()](./#get_field).

### <a id="struct-2"></a> `Struct`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="./" class="api-link">Struct</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;other)</span></span></code></pre>

Creates a new [Struct](./) as a copy from *other*. All fields are copied as well.

### <a id="struct-3"></a> `Struct`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="./" class="api-link">Struct</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;&#x26;other)</span></span></code></pre>

Creates a new [Struct](./) by moving all fields from *other* into this struct.

### <a id="operator"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Struct</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Struct</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">other</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Assigns all the fields of *other* to this struct.

### <a id="operator-2"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Struct</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Struct</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;&#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">other</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Moves all the fields of *other* to this struct.

### <a id="struct-4"></a> `~Struct`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::~</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Destroys this struct.

### <a id="struct-5"></a> `Struct`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/utility/initializer_list" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::initializer_list</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a href="https://en.cppreference.com/w/cpp/utility/pair" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::pair</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::string_view</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../value/" class="api-link">Value</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > > args)</span></span></code></pre>

Creates a new struct with the fields of the [std::initializer\_list](https://en.cppreference.com/w/cpp/utility/initializer_list) given by args.

### <a id="struct-6"></a> `Struct`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(InputIterator it, InputIterator end)</span></span></code></pre>

Creates a new struct with the fields produced by the iterator *it*. *it* is advanced until it equals *end*.

### <a id="begin"></a> `begin`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../struct-iterator/" class="api-link">iterator</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">begin</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns an iterator over the fields of the struct.

### <a id="end"></a> `end`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../struct-iterator/" class="api-link">iterator</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">end</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns an iterator that when compared with an iterator returned by [begin()](./#begin) can be used to detect when all fields have been visited.

### <a id="get_field"></a> `get_field`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">get_field</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the value of the field with the given *name*; Returns an [std::optional](https://en.cppreference.com/w/cpp/utility/optional) without value if the field does not exist.

### <a id="set_field"></a> `set_field`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Struct</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_field</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../value/" class="api-link">Value</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">value</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Sets the value of the field with the given *name* to the specified *value*. If the field does not exist yet, it is created; otherwise the existing field is updated to hold the new value.