---
title: "AccessibleRole"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import AccessibleRole
```

This enum represents the different values for the `accessible-role` property, used to describe the
 role of an element in the context of assistive technology such as screen readers.

 In addition to widget roles, this enum includes *landmark* roles (`banner`, `complementary`,
 `content-info`, `form`, `main`, `navigation`, `region`, `search`).
 Landmarks identify large content areas that screen reader users can jump between,
 giving the application a navigable structure similar to headings in a document.
 See [WAI-ARIA Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
 for guidance on when and how to use them.

## Values

- **`none`** — The element isn't accessible.
- **`button`** — The element is a `Button` or behaves like one.
- **`checkbox`** — The element is a `CheckBox` or behaves like one.
- **`combobox`** — The element is a `ComboBox` or behaves like one.
- **`groupbox`** — The element is a `GroupBox` or behaves like one.
- **`image`** — The element is an <XRef to="Image" /> or behaves like one. This is automatically applied to <XRef to="Image" /> elements.
- **`list`** — The element is a `ListView` or behaves like one.
- **`slider`** — The element is a `Slider` or behaves like one.
- **`spinbox`** — The element is a `SpinBox` or behaves like one.
- **`tab`** — The element is a `Tab` or behaves like one.
- **`tab_list`** — The element is similar to the tab bar in a `TabWidget`.
- **`tab_panel`** — The element is a container for tab content.
- **`text`** — The role for a `Text` element. This is automatically applied to `Text` elements.
- **`table`** — The role for a `TableView` or behaves like one.
- **`tree`** — The role for a TreeView or behaves like one. (Not provided yet)
- **`progress_indicator`** — The element is a `ProgressIndicator` or behaves like one.
- **`text_input`** — The role for widget with editable text such as a `LineEdit` or a `TextEdit`.
 This is automatically applied to `TextInput` elements.
- **`switch`** — The element is a `Switch` or behaves like one.
- **`list_item`** — The element is an item in a `ListView`.
- **`radio_button`** — The element is a `RadioButton` or behaves like one.
- **`radio_group`** — The element is a container grouping related `RadioButton`s.
- **`banner`** — Landmark: the header area of the application, typically containing a logo, title, or global navigation.
- **`complementary`** — Landmark: a supporting section that complements the main content, such as a sidebar.
- **`content_info`** — Landmark: information about the application or its content, typically at the bottom (e.g. status bar, copyright).
- **`form`** — Landmark: a region containing input fields and controls for submitting information.
- **`main`** — Landmark: the primary content of the application. Each view should have exactly one `main` landmark.
- **`navigation`** — Landmark: a group of links or controls used for navigating the application.
- **`region`** — Landmark: a generic section significant enough to be listed in a summary.
 Use a more specific landmark if one applies.
- **`search`** — Landmark: a region containing controls for searching or filtering content.