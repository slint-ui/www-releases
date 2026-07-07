---
title: "ListModel[T]"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import ListModel
```

ListModel is a <XRef to="Model" /> that stores its data in a Python list.

Construct a ListMode from an iterable (such as a list itself).
Use <XRef to="ListModel.append" /> to add items to the model, and use the
`del` statement to remove items.

Any changes to the model are automatically reflected in the views
in UI they're used with.

**Bases:** <XRef to="slint.models.Model" plain />&#91;T&#93;

## Properties

### list

<Signature symbol="slint.models.ListModel.list">list: <XRef to="list" plain />[T]</Signature>

## Methods

### row_count

<Signature symbol="slint.models.ListModel.row_count">row_count() -&gt; <XRef to="int" plain /></Signature>

### row_data

<Signature symbol="slint.models.ListModel.row_data">row_data(row: <XRef to="int" plain />) -&gt; <XRef to="typing.Optional" plain />[T]</Signature>

### set_row_data

<Signature symbol="slint.models.ListModel.set_row_data">set_row_data(row: <XRef to="int" plain />, value: T) -&gt; <XRef to="None" plain /></Signature>

### append

<Signature symbol="slint.models.ListModel.append">append(value: T) -&gt; <XRef to="None" plain /></Signature>

Appends the value to the end of the list.

### insert

<Signature symbol="slint.models.ListModel.insert">insert(index: <XRef to="int" plain />, value: T) -&gt; <XRef to="None" plain /></Signature>

Inserts the value at the given index. Negative indices and indices
past the end of the list behave like `list.insert`.

### notify_row_changed

<Signature symbol="slint.models.Model.notify_row_changed">notify_row_changed(row: <XRef to="int" plain />) -&gt; <XRef to="None" plain /></Signature>

Call this method from a sub-class to notify the views that a row has changed.

### notify_row_removed

<Signature symbol="slint.models.Model.notify_row_removed">notify_row_removed(row: <XRef to="int" plain />, count: <XRef to="int" plain />) -&gt; <XRef to="None" plain /></Signature>

Call this method from a sub-class to notify the views that
`count` rows have been removed starting at `row`.

### notify_row_added

<Signature symbol="slint.models.Model.notify_row_added">notify_row_added(row: <XRef to="int" plain />, count: <XRef to="int" plain />) -&gt; <XRef to="None" plain /></Signature>

Call this method from a sub-class to notify the views that
`count` rows have been added starting at `row`.