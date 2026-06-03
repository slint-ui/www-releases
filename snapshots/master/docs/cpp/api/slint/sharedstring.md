---
title: "slint::SharedString Struct"
---
```cpp
struct SharedString;
```

```cpp
#include <slint.h>
```

A string type used by the Slint run-time.

[SharedString](./) uses implicit data sharing to make it efficient to pass around copies. When copying, a reference to the data is cloned, not the data itself.

The class provides constructors from [std::string\_view](https://en.cppreference.com/w/cpp/string/basic_string_view) as well as the automatic conversion to a [std::string\_view](https://en.cppreference.com/w/cpp/string/basic_string_view).

For convenience, it's also possible to convert a number to a string using [SharedString::from\_number(double)](./#from_number).

Under the hood the string data is UTF-8 encoded and it is always terminated with a null character.

## Public Functions

### <a id="sharedstring"></a> `SharedString`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Creates an empty default constructed string.

### <a id="sharedstring-2"></a> `SharedString`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::string_view</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> s)</span></span></code></pre>

Creates a new [SharedString](./) from the string view *s*. The underlying string data is copied.

### <a id="sharedstring-3"></a> `SharedString`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> char</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> *s)</span></span></code></pre>

Creates a new [SharedString](./) from the null-terminated string pointer *s*. The underlying string data is copied. It is assumed that the string is UTF-8 encoded.

### <a id="sharedstring-4"></a> `SharedString`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> char8_t</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> *s)</span></span></code></pre>

Creates a new [SharedString](./) from the null-terminated string pointer *s*. The underlying string data is copied.

### <a id="sharedstring-5"></a> `SharedString`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::u8string_view</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> s)</span></span></code></pre>

Creates a new [SharedString](./) from the string view *s*. The underlying string data is copied.

### <a id="sharedstring-6"></a> `SharedString`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="./" class="api-link">SharedString</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;other)</span></span></code></pre>

Creates a new [SharedString](./) from *other*.

### <a id="sharedstring-7"></a> `~SharedString`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::~</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Destroys this [SharedString](./) and frees the memory if this is the last instance referencing it.

### <a id="operator"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">other</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Assigns *other* to this string and returns a reference to this string.

### <a id="operator-2"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Assigns the string view *s* to this string and returns a reference to this string. The underlying string data is copied. It is assumed that the string is UTF-8 encoded.

### <a id="operator-3"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> char</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> *</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Assigns null-terminated string pointer *s* to this string and returns a reference to this string. The underlying string data is copied. It is assumed that the string is UTF-8 encoded.

### <a id="operator-4"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;&#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">other</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Move-assigns *other* to this [SharedString](./) instance.

### <a id="operator-std-string_view"></a> `operator std::string_view`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">string_view</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Provides a view to the string data. The returned view is only valid as long as at least this [SharedString](./) exists.

### <a id="data"></a> `data`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">auto</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">data</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> -> </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> char</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> *</span></span></code></pre>

Provides a raw pointer to the string data. The returned pointer is only valid as long as at least this [SharedString](./) exists.

### <a id="size"></a> `size`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/types/size_t" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span></a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">size</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

[Size](../size/) of the string, in bytes. This excludes the terminating null character.

### <a id="begin"></a> `begin`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> char</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> *</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">begin</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns a pointer to the first character. It is only safe to dereference the pointer if the string contains at least one character.

### <a id="end"></a> `end`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> char</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> *</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">end</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns a point past the last character of the string. It is not safe to dereference the pointer, but it is suitable for comparison.

### <a id="empty"></a> `empty`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">empty</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

**Returns:** true if the string contains no characters; false otherwise.

### <a id="starts_with"></a> `starts_with`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">starts_with</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> prefix</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

**Returns:** true if the string starts with the specified prefix string; false otherwise

### <a id="ends_with"></a> `ends_with`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">ends_with</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> prefix</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

**Returns:** true if the string ends with the specified prefix string; false otherwise

### <a id="clear"></a> `clear`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">clear</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Reset to an empty string.

### <a id="to_lowercase"></a> `to_lowercase`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">to_lowercase</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the lowercase equivalent of this string, as a new [SharedString](./).

For example:

```cpp
auto str = slint::SharedString("Hello");
auto str2 = str.to_lowercase(); // creates "hello"
```

### <a id="to_uppercase"></a> `to_uppercase`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">to_uppercase</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the uppercase equivalent of this string, as a new [SharedString](./).

For example:

```cpp
auto str = slint::SharedString("Hello");
auto str2 = str.to_uppercase(); // creates "HELLO"
```

### <a id="operator-5"></a> `operator+=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator+=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> other</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Appends *other* to this string and returns a reference to this.

## Public Static Functions

### <a id="from_number"></a> `from_number`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">static</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">from_number</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">double</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> n</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Creates a new [SharedString](./) from the given number *n*. The string representation of the number uses a minimal formatting scheme: If *n* has no fractional part, the number will be formatted as an integer.

For example:

```cpp
auto str = slint::SharedString::from_number(42); // creates "42"
auto str2 = slint::SharedString::from_number(100.5) // creates "100.5"
```

## Friends

### <a id="operator-6"></a> `operator==`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator==</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Returns true if *a* is equal to *b*; otherwise returns false.

### <a id="operator-7"></a> `operator!=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator!=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Returns true if *a* is not equal to *b*; otherwise returns false.

### <a id="operator-8"></a> `operator<`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Returns true if *a* is lexicographically less than *b*; false otherwise.

### <a id="operator-9"></a> `operator<=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator&#x3C;=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Returns true if *a* is lexicographically less or equal than *b*; false otherwise.

### <a id="operator-10"></a> `operator>`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator></span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Returns true if *a* is lexicographically greater than *b*; false otherwise.

### <a id="operator-11"></a> `operator>=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator>=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Returns true if *a* is lexicographically greater or equal than *b*; false otherwise.

### <a id="operator-12"></a> `operator<<`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/io/basic_ostream" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ostream</span></a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator&#x3C;&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/io/basic_ostream" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ostream</span></a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">stream</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">shared_string</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Writes the *shared\_string* to the specified *stream* and returns a reference to the stream.

### <a id="operator-13"></a> `operator+`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator+</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Concatenates *a* and *and* returns the result as a new [SharedString](./).

### <a id="operator-14"></a> `operator+`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator+</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;&#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Move-concatenates *b* to *and* returns a reference to *a*.