---
title: "slint::language::AccessibleRole"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> AccessibleRole</span></span></code></pre>

| Value | Description |
| --- | --- |
| `None` | The element isn't accessible. |
| `Button` | The element is a `Button` or behaves like one. |
| `Checkbox` | The element is a `CheckBox` or behaves like one. |
| `Combobox` | The element is a `ComboBox` or behaves like one. |
| `Groupbox` | The element is a `GroupBox` or behaves like one. |
| `Image` | The element is an `Image` or behaves like one. This is automatically applied to `Image` elements. |
| `List` | The element is a `ListView` or behaves like one. |
| `Slider` | The element is a `Slider` or behaves like one. |
| `Spinbox` | The element is a `SpinBox` or behaves like one. |
| `Tab` | The element is a `Tab` or behaves like one. |
| `TabList` | The element is similar to the tab bar in a `TabWidget`. |
| `TabPanel` | The element is a container for tab content. |
| `Text` | The role for a `Text` element. This is automatically applied to `Text` elements. |
| `Table` | The role for a `TableView` or behaves like one. |
| `Tree` | The role for a TreeView or behaves like one. (Not provided yet) |
| `ProgressIndicator` | The element is a `ProgressIndicator` or behaves like one. |
| `TextInput` |  |
| `Switch` | The element is a `Switch` or behaves like one. |
| `ListItem` | The element is an item in a `ListView`. |
| `RadioButton` | The element is a `RadioButton` or behaves like one. |
| `RadioGroup` | The element is a container grouping related `RadioButton`s. |
| `Banner` | Landmark: the header area of the application, typically containing a logo, title, or global navigation. |
| `Complementary` | Landmark: a supporting section that complements the main content, such as a sidebar. |
| `ContentInfo` | Landmark: information about the application or its content, typically at the bottom (e.g. status bar, copyright). |
| `Form` | Landmark: a region containing input fields and controls for submitting information. |
| `Main` | Landmark: the primary content of the application. Each view should have exactly one `main` landmark. |
| `Navigation` | Landmark: a group of links or controls used for navigating the application. |
| `Region` |  |
| `Search` | Landmark: a region containing controls for searching or filtering content. |

This enum represents the different values for the `accessible-role` property, used to describe the role of an element in the context of assistive technology such as screen readers.

In addition to widget roles, this enum includes *landmark* roles (`banner`, `complementary`, `content-info`, `form`, `main`, `navigation`, `region`, `search`). Landmarks identify large content areas that screen reader users can jump between, giving the application a navigable structure similar to headings in a document. See [WAI-ARIA Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) for guidance on when and how to use them.