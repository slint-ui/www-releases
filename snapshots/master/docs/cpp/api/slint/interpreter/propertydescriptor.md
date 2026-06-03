---
title: "slint::interpreter::PropertyDescriptor Struct"
---
```cpp
struct PropertyDescriptor;
```

```cpp
#include <slint.h>
```

[PropertyDescriptor](./) is a simple structure that's used to describe a property declared in .slint code. It is returned from in a vector from [slint::interpreter::ComponentDefinition::properties()](../componentdefinition/#properties).

## Public Attributes

### <a id="property_name"></a> `property_name`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../../sharedstring/" class="api-link">SharedString</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PropertyDescriptor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::property_name</span></span></code></pre>

The name of the declared property.

### <a id="property_type"></a> `property_type`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../valuetype/" class="api-link">ValueType</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PropertyDescriptor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::property_type</span></span></code></pre>

The type of the property.