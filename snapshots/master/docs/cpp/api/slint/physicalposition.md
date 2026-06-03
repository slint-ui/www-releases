---
title: "slint::PhysicalPosition Struct"
description: "A position in physical pixel coordinates."
---
```cpp
struct PhysicalPosition;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Point< int32_t >](../point/).

A position in physical pixel coordinates.

## Public Functions

### <a id="physicalposition"></a> `PhysicalPosition`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">explicit</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PhysicalPosition</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">PhysicalPosition</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../point/" class="api-link">Point</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">int32_t</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > p)</span></span></code></pre>

Explicitly convert a [Point\<int32\_t\>](../point/) to a [LogicalPosition](../logicalposition/).

### <a id="physicalposition-2"></a> `PhysicalPosition`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PhysicalPosition</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">PhysicalPosition</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Default construct a [PhysicalPosition](./) in the origin.