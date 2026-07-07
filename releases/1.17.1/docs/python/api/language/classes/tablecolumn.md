---
title: "TableColumn"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import TableColumn
```

This is used to define the column and the column header of a TableView

## Properties

### title

<Signature symbol="slint.language.TableColumn.title">title: <XRef to="str" plain /></Signature>

The title of the column header

### min_width

<Signature symbol="slint.language.TableColumn.min_width">min_width: <XRef to="float" plain /></Signature>

The minimum column width (logical length)

### horizontal_stretch

<Signature symbol="slint.language.TableColumn.horizontal_stretch">horizontal_stretch: <XRef to="float" plain /></Signature>

The horizontal column stretch

### sort_order

<Signature symbol="slint.language.TableColumn.sort_order">sort_order: <XRef to="typing.Any" plain /></Signature>

Sorts the column

### width

<Signature symbol="slint.language.TableColumn.width">width: <XRef to="float" plain /></Signature>

the actual width of the column (logical length)