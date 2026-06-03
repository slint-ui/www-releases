---
title: "slint::RgbaColor Struct"
---
```cpp
template <typename T>
struct RgbaColor;
```

```cpp
#include <slint.h>
```

[RgbaColor](./) stores the red, green, blue and alpha components of a color with the precision of the template parameter T. For example if T is float, the values are normalized between 0 and 1. If T is uint8\_t, they values range is 0 to 255.

## Public Attributes

### <a id="alpha"></a> `alpha`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">T </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::alpha</span></span></code></pre>

The alpha component.

### <a id="red"></a> `red`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">T </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::red</span></span></code></pre>

The red component.

### <a id="green"></a> `green`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">T </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::green</span></span></code></pre>

The green component.

### <a id="blue"></a> `blue`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">T </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::blue</span></span></code></pre>

The blue component.

## Public Functions

### <a id="rgbacolor"></a> `RgbaColor`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../color/" class="api-link">Color</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;col)</span></span></code></pre>

Creates a new [RgbaColor](./) instance from a given color. This template function is specialized and thus implemented for T == uint8\_t and T == float.

### <a id="rgbacolor-2"></a> `RgbaColor`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">uint8_t</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../color/" class="api-link">Color</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;color)</span></span></code></pre>

Constructs a new RgbaColor\<uint8\_t\> from the color *color*.

### <a id="rgbacolor-3"></a> `RgbaColor`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">float</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">RgbaColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../color/" class="api-link">Color</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;color)</span></span></code></pre>

Constructs a new RgbaColor\<float\> from the color *color*.