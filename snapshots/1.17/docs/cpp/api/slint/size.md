---
title: "slint::Size Struct"
---
```cpp
template <typename T>
struct Size;
```

```cpp
#include <slint.h>
```

The [Size](./) structure is used to represent a two-dimensional size with width and height.

## Public Attributes

### <a id="width"></a> `width`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">T </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Size</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::width</span></span></code></pre>

The width of the size.

### <a id="height"></a> `height`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">T </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Size</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::height</span></span></code></pre>

The height of the size.

## Public Functions

### <a id="operator"></a> `operator==`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Size</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator==</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Size</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">other</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> =</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">default</span></span></code></pre>

Compares with *other* and returns true if they are equal; false otherwise.