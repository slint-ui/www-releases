---
title: "AccessibleRole"
---
> **AccessibleRole** = *typeof* [`AccessibleRole`](/1.17.0/docs/node/api/variables/language/#accessiblerole)\[keyof *typeof* [`AccessibleRole`](/1.17.0/docs/node/api/variables/language/#accessiblerole)\]

Defined in: api/node/typescript/generated/language.ts:430

This enum represents the different values for the `accessible-role` property, used to describe the
role of an element in the context of assistive technology such as screen readers.

In addition to widget roles, this enum includes *landmark* roles (`banner`, `complementary`,
`content-info`, `form`, `main`, `navigation`, `region`, `search`).
Landmarks identify large content areas that screen reader users can jump between,
giving the application a navigable structure similar to headings in a document.
See [WAI-ARIA Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
for guidance on when and how to use them.

Variants:
- `language.AccessibleRole.None` (`"none"`) — The element isn't accessible.
- `language.AccessibleRole.Button` (`"button"`) — The element is a `Button` or behaves like one.
- `language.AccessibleRole.Checkbox` (`"checkbox"`) — The element is a `CheckBox` or behaves like one.
- `language.AccessibleRole.Combobox` (`"combobox"`) — The element is a `ComboBox` or behaves like one.
- `language.AccessibleRole.Groupbox` (`"groupbox"`) — The element is a `GroupBox` or behaves like one.
- `language.AccessibleRole.Image` (`"image"`) — The element is an `Image` or behaves like one. This is automatically applied to `Image` elements.
- `language.AccessibleRole.List` (`"list"`) — The element is a `ListView` or behaves like one.
- `language.AccessibleRole.Slider` (`"slider"`) — The element is a `Slider` or behaves like one.
- `language.AccessibleRole.Spinbox` (`"spinbox"`) — The element is a `SpinBox` or behaves like one.
- `language.AccessibleRole.Tab` (`"tab"`) — The element is a `Tab` or behaves like one.
- `language.AccessibleRole.TabList` (`"tab-list"`) — The element is similar to the tab bar in a `TabWidget`.
- `language.AccessibleRole.TabPanel` (`"tab-panel"`) — The element is a container for tab content.
- `language.AccessibleRole.Text` (`"text"`) — The role for a `Text` element. This is automatically applied to `Text` elements.
- `language.AccessibleRole.Table` (`"table"`) — The role for a `TableView` or behaves like one.
- `language.AccessibleRole.Tree` (`"tree"`) — The role for a TreeView or behaves like one. (Not provided yet)
- `language.AccessibleRole.ProgressIndicator` (`"progress-indicator"`) — The element is a `ProgressIndicator` or behaves like one.
- `language.AccessibleRole.TextInput` (`"text-input"`) — The role for widget with editable text such as a `LineEdit` or a `TextEdit`. This is automatically applied to `TextInput` elements.
- `language.AccessibleRole.Switch` (`"switch"`) — The element is a `Switch` or behaves like one.
- `language.AccessibleRole.ListItem` (`"list-item"`) — The element is an item in a `ListView`.
- `language.AccessibleRole.RadioButton` (`"radio-button"`) — The element is a `RadioButton` or behaves like one.
- `language.AccessibleRole.RadioGroup` (`"radio-group"`) — The element is a container grouping related `RadioButton`s.
- `language.AccessibleRole.Banner` (`"banner"`) — Landmark: the header area of the application, typically containing a logo, title, or global navigation.
- `language.AccessibleRole.Complementary` (`"complementary"`) — Landmark: a supporting section that complements the main content, such as a sidebar.
- `language.AccessibleRole.ContentInfo` (`"content-info"`) — Landmark: information about the application or its content, typically at the bottom (e.g. status bar, copyright).
- `language.AccessibleRole.Form` (`"form"`) — Landmark: a region containing input fields and controls for submitting information.
- `language.AccessibleRole.Main` (`"main"`) — Landmark: the primary content of the application. Each view should have exactly one `main` landmark.
- `language.AccessibleRole.Navigation` (`"navigation"`) — Landmark: a group of links or controls used for navigating the application.
- `language.AccessibleRole.Region` (`"region"`) — Landmark: a generic section significant enough to be listed in a summary. Use a more specific landmark if one applies.
- `language.AccessibleRole.Search` (`"search"`) — Landmark: a region containing controls for searching or filtering content.