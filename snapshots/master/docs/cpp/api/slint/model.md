---
title: "slint::Model Class"
---
```cpp
template <typename ModelData>
class Model;
```

```cpp
#include <slint.h>
```

**Inherited by** [slint::FilterModel< ModelData >](../filtermodel/), [slint::MapModel< SourceModelData, MappedModelData >](../mapmodel/), [slint::ReverseModel< ModelData >](../reversemodel/), [slint::SortModel< ModelData >](../sortmodel/), [slint::VectorModel< ModelData >](../vectormodel/).

A [Model](./) is providing Data for Slint Models or ListView elements of the `.slint` language

This is typically used in a `std::shared_ptr<slint::Model>`. [Model](./) is an abstract class and you can derive from it to provide your own data model, or use one of the provided models such as `slint::VectorModel`

An implementation of the [Model](./) can provide data to slint by re-implementing the `row_count` and `row_data` functions. It is the responsibility of the [Model](./) implementation to call the `Model::notify_row_changed()`, `Model::notify_row_added()`, `Model::notify_row_removed()`, or `Model::notify_reset()` functions when the underlying data changes.

Note that the [Model](./) is not thread-safe. All [Model](./) operations need to be done in the main thread. If you need to update the model data from another thread, use the `slint::invoke_from_event_loop()` function to send the data to the main thread and update the model.

## Public Functions

### <a id="model"></a> `~Model` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::~</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()=</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">default</span></span></code></pre>

### <a id="model-2"></a> `Model`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()=</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">default</span></span></code></pre>

### <a id="model-3"></a> `Model`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="./" class="api-link">Model</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;)=</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">delete</span></span></code></pre>

### <a id="operator"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Model</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Model</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)=</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">delete</span></span></code></pre>

### <a id="row_count"></a> `row_count` <small>(pure virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">row_count</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> =</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8">0</span></span></code></pre>

The amount of row in the model.

### <a id="row_data"></a> `row_data` <small>(pure virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">row_data</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> =</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8">0</span></span></code></pre>

Returns the data for a particular row. This function should be called with `row < row_count()`.

### <a id="set_row_data"></a> `set_row_data` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_row_data</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> ModelData</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Sets the data for a particular row.

This function should only be called with `row < row_count()`.

If the model cannot support data changes, then it is ok to do nothing. The default implementation will print a warning to stderr.

If the model can update the data, it should also call `row_changed`

## Protected Functions

### <a id="notify_row_changed"></a> `notify_row_changed`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">notify_row_changed</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> row</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Notify the views that a specific row was changed

Your model implementation should call this function after the data of a row changes.

### <a id="notify_row_added"></a> `notify_row_added`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">notify_row_added</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> index</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> count</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Notify the views that rows were added

Your model implementation should call this function after the row were added.

### <a id="notify_row_removed"></a> `notify_row_removed`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">notify_row_removed</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> index</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> count</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Notify the views that rows were removed

Your model implementation should call this function after the row were removed.

### <a id="notify_reset"></a> `notify_reset`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">notify_reset</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Notify the views that the model has been changed and that everything needs to be reloaded

Your model implementation should call this function after the model has been changed.

### <a id="row_changed"></a> `row_changed`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">row_changed</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> row</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

### <a id="row_added"></a> `row_added`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">row_added</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> index</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> count</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

### <a id="row_removed"></a> `row_removed`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">row_removed</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> index</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> count</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

### <a id="reset"></a> `reset`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">ModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">reset</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>