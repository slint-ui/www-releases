---
title: "slint::MapModel Class"
---
```cpp
template <typename SourceModelData, typename MappedModelData>
class MapModel;
```

```cpp
#include <slint.h>
```

**Inherits** [slint::Model< SourceModelData >](../model/).

The [MapModel](./) acts as an adapter model for a given source model by applying a mapping function. The mapping function is called for each row on the source model and allows transforming the values on the fly. The [MapModel](./) has two template parameters: The SourceModelData specifies the data type of the underlying source model, and the MappedModelData the data type of this [MapModel](./). This permits not only changing the values of the underlying source model, but also changing the data type itself. For example a [MapModel](./) can be used to adapt a model that provides numbers to be a model that exposes all numbers converted to strings, by calling `std::to_string` on each value given in the mapping lambda expression.

```cpp
    auto source_model = std::make_shared<slint::VectorModel<Person>>(...);
    auto mapped_model = std::make_shared<slint::MapModel<Person, SharedString>>(
        source_model, [](const Person &person) {
//          return fmt::format("{} {}", person.first, person.last);
//      });
```

## Public Functions

### <a id="mapmodel"></a> `MapModel`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MapModel</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SourceModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MappedModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">MapModel</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/memory/shared_ptr" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::shared_ptr</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../model/" class="api-link">Model</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; SourceModelData > > source_model, </span><a href="https://en.cppreference.com/w/cpp/utility/functional/function" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::function</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">MappedModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> SourceModelData &#x26;)> map_fn)</span></span></code></pre>

Constructs a new [MapModel](./) that provides an altered view on the *source\_model* by applying *map\_fn* on the data in each row.

### <a id="row_count"></a> `row_count` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MapModel</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SourceModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MappedModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">row_count</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> override</span></span></code></pre>

The amount of row in the model.

### <a id="row_data"></a> `row_data` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MappedModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MapModel</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SourceModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MappedModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">row_data</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> override</span></span></code></pre>

Returns the data for a particular row. This function should be called with `row < row_count()`.

### <a id="source_model"></a> `source_model`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/memory/shared_ptr" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">shared_ptr</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../model/" class="api-link">Model</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SourceModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MapModel</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SourceModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MappedModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">source_model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the source model of this filter model.

### <a id="reset"></a> `reset`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MapModel</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SourceModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">MappedModelData</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> >::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">reset</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Re-applies the model's mapping function on each row of the source model. Use this if state external to the mapping function has changed.