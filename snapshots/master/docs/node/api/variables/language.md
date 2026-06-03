---
title: "language"
---
> `const` **language**: `object` = `_data`

Defined in: api/node/typescript/generated/language.ts:201

Built-in enums and structs from the Slint language.
Enum values are accessed via `language.ColorScheme.Dark`; struct values via the
factory call `language.PointerEvent({ button: … })`. Enum and struct types are
available in type position as `language.ColorScheme` / `language.PointerEvent`.

## Type Declaration

### ColorScheme

> `readonly` **ColorScheme**: `object`

This enum indicates the color scheme used by the widget style. Use this to explicitly switch
between dark and light schemes, or choose Unknown to fall back to the system default.

#### ColorScheme.Dark

> `readonly` **Dark**: `"dark"` = `"dark"`

The style chooses light colors for the background and dark for the foreground.

#### ColorScheme.Light

> `readonly` **Light**: `"light"` = `"light"`

The style chooses dark colors for the background and light for the foreground.

#### ColorScheme.Unknown

> `readonly` **Unknown**: `"unknown"` = `"unknown"`

The scheme is not known and a system wide setting configures this. This could mean that
the widgets are shown in a dark or light scheme, but it could also be a custom color scheme.

### DragAction

> `readonly` **DragAction**: `object`

This enum describes the action negotiated between the source of a drag (`DragArea`)
and its target (`DropArea`) during a drag-and-drop operation. The source declares
which actions it permits, the target picks one in its `can-drop` callback, and the
chosen action is reported back to the source via `drag-finished` so that, for
example, a `move` source can remove the original data. The same enum is used for
drags that come from another application or window once native drag-and-drop is
in play.

#### DragAction.Copy

> `readonly` **Copy**: `"copy"` = `"copy"`

The data is copied to the target; the source retains it.

#### DragAction.Link

> `readonly` **Link**: `"link"` = `"link"`

A link to the source data is created at the target; neither side gives
up ownership.

#### DragAction.Move

> `readonly` **Move**: `"move"` = `"move"`

The data is moved to the target; the source should remove it once the
operation completes.

#### DragAction.None

> `readonly` **None**: `"none"` = `"none"`

No action: the drag is rejected, no drop will be delivered.

### DropEvent

> `readonly` **DropEvent**: (`props?`) => [`DropEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/dropevent/)

Build a value of this struct. Any field you omit takes a documented default,
which lets Slint add fields later without breaking existing call-sites.

This structure is passed to the callbacks of the `DropArea` element

#### Parameters

##### props?

`Partial`\<[`DropEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/dropevent/)\>

#### Returns

[`DropEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/dropevent/)

### KeyboardModifiers

> `readonly` **KeyboardModifiers**: (`props?`) => [`KeyboardModifiers`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyboardmodifiers/)

Build a value of this struct. Any field you omit takes a documented default,
which lets Slint add fields later without breaking existing call-sites.

The `KeyboardModifiers` struct provides booleans to indicate possible modifier keys on a keyboard, such as Shift, Control, etc.
It is provided as part of `KeyEvent`'s `modifiers` field.

Keyboard shortcuts on Apple platforms typically use the Command key (⌘), such as Command+C for "Copy". On other platforms
the same shortcut is typically represented using Control+C. To make it easier to develop cross-platform applications, on macOS,
Slint maps the Command key to the control modifier, and the Control key to the meta modifier.

On Windows, the Windows key is mapped to the meta modifier.

#### Parameters

##### props?

`Partial`\<[`KeyboardModifiers`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyboardmodifiers/)\>

#### Returns

[`KeyboardModifiers`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyboardmodifiers/)

### KeyEvent

> `readonly` **KeyEvent**: (`props?`) => [`KeyEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyevent/)

Build a value of this struct. Any field you omit takes a documented default,
which lets Slint add fields later without breaking existing call-sites.

This structure is generated and passed to the key press and release callbacks of the `FocusScope` element.

#### Parameters

##### props?

`Partial`\<[`KeyEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyevent/)\>

#### Returns

[`KeyEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyevent/)

### PointerEvent

> `readonly` **PointerEvent**: (`props?`) => [`PointerEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/pointerevent/)

Build a value of this struct. Any field you omit takes a documented default,
which lets Slint add fields later without breaking existing call-sites.

Represents a Pointer event sent by the windowing system.
This structure is passed to the `pointer-event` callback of the `TouchArea` element.

#### Parameters

##### props?

`Partial`\<[`PointerEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/pointerevent/)\>

#### Returns

[`PointerEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/pointerevent/)

### PointerEventButton

> `readonly` **PointerEventButton**: `object`

This enum describes the different types of buttons for a pointer event,
typically on a mouse or a pencil.

#### PointerEventButton.Back

> `readonly` **Back**: `"back"` = `"back"`

The back button.

#### PointerEventButton.Forward

> `readonly` **Forward**: `"forward"` = `"forward"`

The forward button.

#### PointerEventButton.Left

> `readonly` **Left**: `"left"` = `"left"`

The left button.

#### PointerEventButton.Middle

> `readonly` **Middle**: `"middle"` = `"middle"`

The center button.

#### PointerEventButton.Other

> `readonly` **Other**: `"other"` = `"other"`

A button that is none of left, right, middle, back or forward. For example,
this is used for the task button on a mouse with many buttons.

#### PointerEventButton.Right

> `readonly` **Right**: `"right"` = `"right"`

The right button.

### PointerEventKind

> `readonly` **PointerEventKind**: `object`

The enum reports what happened to the `PointerEventButton` in the event

#### PointerEventKind.Cancel

> `readonly` **Cancel**: `"cancel"` = `"cancel"`

The action was cancelled.

#### PointerEventKind.Down

> `readonly` **Down**: `"down"` = `"down"`

The button was pressed.

#### PointerEventKind.Move

> `readonly` **Move**: `"move"` = `"move"`

The pointer has moved,

#### PointerEventKind.Up

> `readonly` **Up**: `"up"` = `"up"`

The button was released.

### PointerScrollEvent

> `readonly` **PointerScrollEvent**: (`props?`) => [`PointerScrollEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/pointerscrollevent/)

Build a value of this struct. Any field you omit takes a documented default,
which lets Slint add fields later without breaking existing call-sites.

Represents a Pointer scroll (or wheel) event sent by the windowing system.
This structure is passed to the `scroll-event` callback of the `TouchArea` element.

#### Parameters

##### props?

`Partial`\<[`PointerScrollEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/pointerscrollevent/)\>

#### Returns

[`PointerScrollEvent`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/pointerscrollevent/)

### RadioEntry

> `readonly` **RadioEntry**: (`props?`) => [`RadioEntry`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/radioentry/)

Build a value of this struct. Any field you omit takes a documented default,
which lets Slint add fields later without breaking existing call-sites.

Represents one option in a `RadioGroup`.

#### Parameters

##### props?

`Partial`\<[`RadioEntry`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/radioentry/)\>

#### Returns

[`RadioEntry`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/radioentry/)

### SortOrder

> `readonly` **SortOrder**: `object`

This enum represents the different values of the `sort-order` property.
It's used to sort a `StandardTableView` by a column.

#### SortOrder.Ascending

> `readonly` **Ascending**: `"ascending"` = `"ascending"`

The column is sorted in ascending order.

#### SortOrder.Descending

> `readonly` **Descending**: `"descending"` = `"descending"`

The column is sorted in descending order.

#### SortOrder.Unsorted

> `readonly` **Unsorted**: `"unsorted"` = `"unsorted"`

The column is unsorted.

### StandardListViewItem

> `readonly` **StandardListViewItem**: (`props?`) => [`StandardListViewItem`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/standardlistviewitem/)

Build a value of this struct. Any field you omit takes a documented default,
which lets Slint add fields later without breaking existing call-sites.

Represents an item in a StandardListView and a StandardTableView.

#### Parameters

##### props?

`Partial`\<[`StandardListViewItem`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/standardlistviewitem/)\>

#### Returns

[`StandardListViewItem`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/standardlistviewitem/)

### TableColumn

> `readonly` **TableColumn**: (`props?`) => [`TableColumn`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/tablecolumn/)

Build a value of this struct. Any field you omit takes a documented default,
which lets Slint add fields later without breaking existing call-sites.

This is used to define the column and the column header of a TableView

#### Parameters

##### props?

`Partial`\<[`TableColumn`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/tablecolumn/)\>

#### Returns

[`TableColumn`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/tablecolumn/)