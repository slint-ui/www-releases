---
title: "Model[T]"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import Model
```

Model is the base class for feeding dynamic data into Slint views.

Subclass Model to implement your own models, or use <XRef to="ListModel" /> to wrap a list.

Models are iterable and can be used in for loops.

**Bases:** native.PyModelBase, <XRef to="collections.abc.Iterable" plain />&#91;T&#93;

## Methods

### set_row_data

<Signature symbol="slint.models.Model.set_row_data">set_row_data(row: <XRef to="int" plain />, value: T) -&gt; <XRef to="None" plain /></Signature>

Call this method on mutable models to change the data for the given row.
The UI will also call this method when modifying a model's data.
Re-implement this method in a sub-class to handle the change.

### row_count

<Signature symbol="slint.models.Model.row_count">row_count() -&gt; <XRef to="int" plain /></Signature>

Returns the number of rows in the model.
Re-implement this method in a sub-class to provide the row count.

### row_data

<Signature symbol="slint.models.Model.row_data">row_data(row: <XRef to="int" plain />) -&gt; T | None</Signature>

Returns the data for the given row.
Re-implement this method in a sub-class to provide the data.

### push_row

<Signature symbol="slint.models.Model.push_row">push_row(value: T) -&gt; <XRef to="None" plain /></Signature>

Add a new row to the model with the provided value.
The default implementation calls `insert_row` with the row count.

### remove_row

<Signature symbol="slint.models.Model.remove_row">remove_row(row: <XRef to="int" plain />) -&gt; <XRef to="None" plain /></Signature>

Remove the row at the given index.
Raises an exception when the model rejects the modification.
The default implementation raises NotImplementedError. A model that
supports removing rows should also call `notify_row_removed`.

### insert_row

<Signature symbol="slint.models.Model.insert_row">insert_row(row: <XRef to="int" plain />, value: T) -&gt; <XRef to="None" plain /></Signature>

Insert a new row at the given index.
Raises an exception when the model rejects the modification.
The default implementation raises NotImplementedError. A model that
supports inserting rows should also call `notify_row_added`.

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