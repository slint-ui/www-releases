---
title: "slint::testing::ElementHandle Class"
description: "A handle to an element for querying accessible properties, intended for testing purposes."
---
```cpp
class ElementHandle;
```

```cpp
#include <slint-testing.h>
```

A handle to an element for querying accessible properties, intended for testing purposes.

## Public Static Functions

### `visit_elements`

```cpp
static auto slint::testing::ElementHandle::visit_elements(const ComponentHandle<T> &component, Visitor visitor) -> std::invoke_result_t<Visitor, ElementHandle>
```

Visits visible elements within a component and calls the visitor for each of them.

The visitor must be a callable object that accepts an `ElementHandle` and returns either `void`, or a type that can be converted to `bool`.

- If the visitor returns `void`, the visitation continues until all elements have been visited.
- If the visitor returns a type that can be converted to `bool`, the visitation continues as long as the conversion result is false; otherwise, it stops, returning that value. If the visitor never returns something that converts to true, then the function returns a default constructed value;

```cpp
auto element = ElementHandle::visit_elements(component, [&](const ElementHandle& eh)
         -> std::optional<ElementHandle> {
     return eh.id() == "Foo::bar" ? std::make_optional(eh) : std::nullopt;
});
```

### `find_by_accessible_label`

```cpp
static SharedVector<ElementHandle> slint::testing::ElementHandle::find_by_accessible_label(const ComponentHandle<T> &component, std::string_view label)
```

Find all elements matching the given accessible label.

### `find_by_element_id`

```cpp
static SharedVector<ElementHandle> slint::testing::ElementHandle::find_by_element_id(const ComponentHandle<T> &component, std::string_view element_id)
```

Find all elements matching the given element\_id.

### `find_by_element_type_name`

```cpp
static SharedVector<ElementHandle> slint::testing::ElementHandle::find_by_element_type_name(const ComponentHandle<T> &component, std::string_view type_name)
```

Find all elements matching the given type name.

## Public Functions

### `is_valid`

```cpp
bool slint::testing::ElementHandle::is_valid() const
```

Returns true if the underlying element still exists; false otherwise.

### `id`

```cpp
std::optional<SharedString> slint::testing::ElementHandle::id() const
```

Returns the element's qualified id. Returns None if the element is not valid anymore or the element does not have an id. A qualified id consists of the name of the surrounding component as well as the provided local name, separate by a double colon.

```cpp
 ,no-preview
component PushButton {
    /* .. *&zwj;/
}

export component App {
   mybutton := PushButton { } // known as `App::mybutton`
   PushButton { } // no id
}
```

### `type_name`

```cpp
std::optional<SharedString> slint::testing::ElementHandle::type_name() const
```

Returns the element's type name; std::nullopt if the element is not valid anymore.

```cpp
 ,no-preview
component PushButton {
    /* .. *&zwj;/
}

export component App {
   mybutton := PushButton { } // type_name is "PushButton"
}
```

### `bases`

```cpp
std::optional<SharedVector<SharedString>> slint::testing::ElementHandle::bases() const
```

Returns the element's base types as an iterator; None if the element is not valid anymore.

```cpp
 ,no-preview
component ButtonBase {
    /* .. *&zwj;/
}

component PushButton inherits ButtonBase {
    /* .. *&zwj;/
}

export component App {
   mybutton := PushButton { } // bases will be ["ButtonBase"]
}
```

### `layout_kind`

```cpp
std::optional<slint::testing::LayoutKind> slint::testing::ElementHandle::layout_kind() const
```

Returns the layout kind if this element is a layout container; std::nullopt if the element is not a layout or is not valid anymore.

### `accessible_role`

```cpp
std::optional<slint::language::AccessibleRole> slint::testing::ElementHandle::accessible_role() const
```

Returns the value of the element's `accessible-role` property, if present. Use this property to locate elements by their type/role, i.e. buttons, checkboxes, etc.

### `accessible_label`

```cpp
std::optional<SharedString> slint::testing::ElementHandle::accessible_label() const
```

Returns the accessible-label of that element, if any.

### `accessible_enabled`

```cpp
std::optional<bool> slint::testing::ElementHandle::accessible_enabled() const
```

Returns the accessible-enabled of that element, if any.

### `accessible_value`

```cpp
std::optional<SharedString> slint::testing::ElementHandle::accessible_value() const
```

Returns the accessible-value of that element, if any.

### `accessible_placeholder_text`

```cpp
std::optional<SharedString> slint::testing::ElementHandle::accessible_placeholder_text() const
```

Returns the accessible-placeholder-text of that element, if any.

### `accessible_description`

```cpp
std::optional<SharedString> slint::testing::ElementHandle::accessible_description() const
```

Returns the accessible-description of that element, if any.

### `accessible_id`

```cpp
std::optional<SharedString> slint::testing::ElementHandle::accessible_id() const
```

Returns the accessible-id of that element, if any.

### `accessible_value_maximum`

```cpp
std::optional<float> slint::testing::ElementHandle::accessible_value_maximum() const
```

Returns the accessible-value-maximum of that element, if any.

### `accessible_value_minimum`

```cpp
std::optional<float> slint::testing::ElementHandle::accessible_value_minimum() const
```

Returns the accessible-value-minimum of that element, if any.

### `accessible_value_step`

```cpp
std::optional<float> slint::testing::ElementHandle::accessible_value_step() const
```

Returns the accessible-value-step of that element, if any.

### `accessible_checked`

```cpp
std::optional<bool> slint::testing::ElementHandle::accessible_checked() const
```

Returns the accessible-checked of that element, if any.

### `accessible_checkable`

```cpp
std::optional<bool> slint::testing::ElementHandle::accessible_checkable() const
```

Returns the accessible-checkable of that element, if any.

### `accessible_item_selected`

```cpp
std::optional<bool> slint::testing::ElementHandle::accessible_item_selected() const
```

Returns the accessible-item-selected of that element, if any.

### `accessible_item_selectable`

```cpp
std::optional<bool> slint::testing::ElementHandle::accessible_item_selectable() const
```

Returns the accessible-item-selectable of that element, if any.

### `accessible_item_index`

```cpp
std::optional<size_t> slint::testing::ElementHandle::accessible_item_index() const
```

Returns the accessible-item-index of that element, if any.

### `accessible_item_count`

```cpp
std::optional<size_t> slint::testing::ElementHandle::accessible_item_count() const
```

Returns the accessible-item-count of that element, if any.

### `accessible_expanded`

```cpp
std::optional<bool> slint::testing::ElementHandle::accessible_expanded() const
```

Returns the accessible-expanded of that element, if any.

### `accessible_expandable`

```cpp
std::optional<bool> slint::testing::ElementHandle::accessible_expandable() const
```

Returns the accessible-expandable of that element, if any.

### `accessible_read_only`

```cpp
std::optional<bool> slint::testing::ElementHandle::accessible_read_only() const
```

Returns the accessible-read-only of that element, if any.

### `accessible_orientation`

```cpp
std::optional<slint::language::Orientation> slint::testing::ElementHandle::accessible_orientation() const
```

Returns the accessible-orientation of that element, if any.

### `accessible_live_region`

```cpp
std::optional<slint::language::AccessibleLiveness> slint::testing::ElementHandle::accessible_live_region() const
```

Returns the accessible-live-region of that element, if any.

### `invoke_accessible_expand_action`

```cpp
void slint::testing::ElementHandle::invoke_accessible_expand_action() const
```

Invokes the expand accessibility action of that element (`accessible-action-expand`).

### `set_accessible_value`

```cpp
void slint::testing::ElementHandle::set_accessible_value(SharedString value) const
```

Sets the accessible-value of that element.

Setting the value will invoke the `accessible-action-set-value` callback.

### `invoke_accessible_increment_action`

```cpp
void slint::testing::ElementHandle::invoke_accessible_increment_action() const
```

Invokes the increase accessibility action of that element (`accessible-action-increment`).

### `invoke_accessible_decrement_action`

```cpp
void slint::testing::ElementHandle::invoke_accessible_decrement_action() const
```

Invokes the decrease accessibility action of that element (`accessible-action-decrement`).

### `invoke_accessible_default_action`

```cpp
void slint::testing::ElementHandle::invoke_accessible_default_action() const
```

Invokes the default accessibility action of that element (`accessible-action-default`).

### `size`

```cpp
LogicalSize slint::testing::ElementHandle::size() const
```

Returns the size of this element.

### `absolute_position`

```cpp
LogicalPosition slint::testing::ElementHandle::absolute_position() const
```

Returns the absolute position of this element.