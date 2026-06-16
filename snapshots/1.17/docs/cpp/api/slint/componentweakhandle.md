---
title: "slint::ComponentWeakHandle Class"
description: "A weak reference to the component. Can be constructed from a `ComponentHandle<T>`"
---
```cpp
template <typename T>
class ComponentWeakHandle;
```

```cpp
#include <slint.h>
```

A weak reference to the component. Can be constructed from a `ComponentHandle<T>`

## Public Functions

### <a id="componentweakhandle"></a> `ComponentWeakHandle`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentWeakHandle</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">ComponentWeakHandle</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()=</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">default</span></span></code></pre>

Constructs a null [ComponentWeakHandle](./). [lock()](./#lock) will always return empty.

### <a id="componentweakhandle-2"></a> `ComponentWeakHandle`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentWeakHandle</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">ComponentWeakHandle</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../componenthandle/" class="api-link">ComponentHandle</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; T > &#x26;other)</span></span></code></pre>

Copy-constructs a new [ComponentWeakHandle](./) from *other*.

### <a id="lock"></a> `lock`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../componenthandle/" class="api-link">ComponentHandle</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ComponentWeakHandle</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">lock</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns a new strong ComponentHandle\<T\> if the component the weak handle points to is still referenced by any other ComponentHandle\<T\>. An empty [std::optional](https://en.cppreference.com/w/cpp/utility/optional) is returned otherwise.