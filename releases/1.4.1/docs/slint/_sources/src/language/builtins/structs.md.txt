<!-- Generated with `cargo xtask slintdocs` from internal/common/builtin_structs.rs -->
# Builtin Structures

## `KeyEvent`

 This structure is generated and passed to the key press and release callbacks of the `FocusScope` element.

### Fields

- **`text`** (_string_): The unicode representation of the key pressed.
- **`modifiers`** (_KeyboardModifiers_): The keyboard modifiers active at the time of the key press event.
- **`repeat`** (_bool_): This field is set to true for key press events that are repeated, i.e. the key is held down. It's always false for key release events.

## `KeyboardModifiers`

 The `KeyboardModifiers` struct provides booleans to indicate possible modifier keys on a keyboard, such as Shift, Control, etc.
 It is provided as part of `KeyEvent`'s `modifiers` field.

 Keyboard shortcuts on Apple platforms typically use the Command key (⌘), such as Command+C for "Copy". On other platforms
 the same shortcut is typically represented using Control+C. To make it easier to develop cross-platform applications, on macOS,
 Slint maps the Command key to the control modifier, and the Control key to the meta modifier.

 On Windows, the Windows key is mapped to the meta modifier.

### Fields

- **`alt`** (_bool_): Indicates the Alt key on a keyboard.
- **`control`** (_bool_): Indicates the Control key on a keyboard, except on macOS, where it is the Command key (⌘).
- **`shift`** (_bool_): Indicates the Shift key on a keyboard.
- **`meta`** (_bool_): Indicates the Control key on macos, and the Windows key on Windows.

## `Point`

This structure represents a point with x and y coordinate

### Fields

- **`x`** (_length_)
- **`y`** (_length_)

## `PointerEvent`

 Represents a Pointer event sent by the windowing system.
 This structure is passed to the `pointer-event` callback of the `TouchArea` element.

### Fields

- **`button`** (_PointerEventButton_): The button that was pressed or released
- **`kind`** (_PointerEventKind_): The kind of the event
- **`modifiers`** (_KeyboardModifiers_): The keyboard modifiers pressed during the event

## `PointerScrollEvent`

 Represents a Pointer scroll (or wheel) event sent by the windowing system.
 This structure is passed to the `scroll-event` callback of the `TouchArea` element.

### Fields

- **`delta_x`** (_length_): The amount of pixel in the horizontal direction
- **`delta_y`** (_length_): The amount of pixel in the vertical direction
- **`modifiers`** (_KeyboardModifiers_): The keyboard modifiers pressed during the event

## `StandardListViewItem`

 Represents an item in a StandardListView and a StandardTableView.

### Fields

- **`text`** (_string_): The text content of the item

## `TableColumn`

 This is used to define the column and the column header of a TableView

### Fields

- **`title`** (_string_): The title of the column header
- **`min_width`** (_length_): The minimum column width (logical length)
- **`horizontal_stretch`** (_float_): The horizontal column stretch
- **`sort_order`** (_SortOrder_): Sorts the column
- **`width`** (_length_): the actual width of the column (logical length)

