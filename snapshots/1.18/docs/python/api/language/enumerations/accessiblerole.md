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

- **<span id="none">`none`</span>** — The element isn't accessible.
- **<span id="button">`button`</span>** — The element is a `Button` or behaves like one.
- **<span id="checkbox">`checkbox`</span>** — The element is a `CheckBox` or behaves like one.
- **<span id="combobox">`combobox`</span>** — The element is a `ComboBox` or behaves like one.
- **<span id="groupbox">`groupbox`</span>** — The element is a `GroupBox` or behaves like one.
- **<span id="image">`image`</span>** — The element is an <XRef to="Image" /> or behaves like one. This is automatically applied to <XRef to="Image" /> elements.
- **<span id="list">`list`</span>** — The element is a `ListView` or behaves like one.
- **<span id="slider">`slider`</span>** — The element is a `Slider` or behaves like one.
- **<span id="spinbox">`spinbox`</span>** — The element is a `SpinBox` or behaves like one.
- **<span id="tab">`tab`</span>** — The element is a `Tab` or behaves like one.
- **<span id="tab_list">`tab_list`</span>** — The element is similar to the tab bar in a `TabWidget`.
- **<span id="tab_panel">`tab_panel`</span>** — The element is a container for tab content.
- **<span id="text">`text`</span>** — The role for a `Text` element. This is automatically applied to `Text` elements.
- **<span id="table">`table`</span>** — The role for a `TableView` or behaves like one.
- **<span id="tree">`tree`</span>** — The role for a TreeView or behaves like one. (Not provided yet)
- **<span id="progress_indicator">`progress_indicator`</span>** — The element is a `ProgressIndicator` or behaves like one.
- **<span id="text_input">`text_input`</span>** — The role for widget with editable text such as a `LineEdit` or a `TextEdit`.
 This is automatically applied to `TextInput` elements.
- **<span id="switch">`switch`</span>** — The element is a `Switch` or behaves like one.
- **<span id="list_item">`list_item`</span>** — The element is an item in a `ListView`.
- **<span id="radio_button">`radio_button`</span>** — The element is a `RadioButton` or behaves like one.
- **<span id="radio_group">`radio_group`</span>** — The element is a container grouping related `RadioButton`s.
- **<span id="window_title_bar">`window_title_bar`</span>** — The element is a window title bar, typically containing the window title and controls
 such as minimize, maximize, and close.
- **<span id="banner">`banner`</span>** — Landmark: the header area of the application, typically containing a logo, title, or global navigation.
- **<span id="complementary">`complementary`</span>** — Landmark: a supporting section that complements the main content, such as a sidebar.
- **<span id="content_info">`content_info`</span>** — Landmark: information about the application or its content, typically at the bottom (e.g. status bar, copyright).
- **<span id="form">`form`</span>** — Landmark: a region containing input fields and controls for submitting information.
- **<span id="main">`main`</span>** — Landmark: the primary content of the application. Each view should have exactly one `main` landmark.
- **<span id="navigation">`navigation`</span>** — Landmark: a group of links or controls used for navigating the application.
- **<span id="region">`region`</span>** — Landmark: a generic section significant enough to be listed in a summary.
 Use a more specific landmark if one applies.
- **<span id="search">`search`</span>** — Landmark: a region containing controls for searching or filtering content.