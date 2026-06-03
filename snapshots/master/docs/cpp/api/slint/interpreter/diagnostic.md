---
title: "slint::interpreter::Diagnostic Struct"
---
```cpp
struct Diagnostic;
```

```cpp
#include <slint.h>
```

[Diagnostic](./) describes the aspects of either a warning or an error, along with its location and a description. Diagnostics are typically returned by [slint::interpreter::ComponentCompiler::diagnostics()](../componentcompiler/#diagnostics) in a vector.

## Public Attributes

### <a id="message"></a> `message`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../../sharedstring/" class="api-link">SharedString</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Diagnostic</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::message</span></span></code></pre>

The message describing the warning or error.

### <a id="source_file"></a> `source_file`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../../sharedstring/" class="api-link">SharedString</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Diagnostic</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::source_file</span></span></code></pre>

The path to the source file where the warning or error is located.

### <a id="line"></a> `line`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">uintptr_t</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Diagnostic</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::line</span></span></code></pre>

The line within the source file. Line numbers start at 1.

### <a id="column"></a> `column`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">uintptr_t</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Diagnostic</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::column</span></span></code></pre>

The column within the source file. Column numbers start at 1.

### <a id="level"></a> `level`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../diagnosticlevel/" class="api-link">DiagnosticLevel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">interpreter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Diagnostic</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::level</span></span></code></pre>

The level of the diagnostic, such as a warning or an error.