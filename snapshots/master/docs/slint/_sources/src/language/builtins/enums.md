<!-- Generated with `cargo xtask slintdocs` from internal/commons/enums.rs -->
# Builtin Enumerations

## `AccessibleRole`

 This enum represents the different values for the `accessible-role` property, used to describe the
 role of an element in the context of assistive technology such as screen readers.

* **`none`**: The element isn't accessible.
* **`button`**: The element is a [`Button`](slint-reference:src/language/widgets/button) or behaves like one.
* **`checkbox`**: The element is a [`CheckBox`](slint-reference:src/language/widgets/checkbox) or behaves like one.
* **`combobox`**: The element is a [`ComboBox`](slint-reference:src/language/widgets/combobox) or behaves like one.
* **`list`**: The element is a [`ListView`](slint-reference:src/language/widgets/listview) or behaves like one.
* **`slider`**: The element is a [`Slider`](slint-reference:src/language/widgets/slider) or behaves like one.
* **`spinbox`**: The element is a [`SpinBox`](slint-reference:src/language/widgets/spinbox) or behaves like one.
* **`tab`**: The element is a [`Tab`](slint-reference:src/language/widgets/tabwidget) or behaves like one.
* **`tab-list`**: The element is similar to the tab bar in a [`TabWidget`](slint-reference:src/language/widgets/tabwidget).
* **`text`**: The role for a [`Text`](slint-reference:src/language/builtins/elements#text) element. It's automatically applied.
* **`table`**: The role for a [`TableView`](slint-reference:src/language/widgets/standardtableview ) or behaves like one.
* **`tree`**: The role for a TreeView or behaves like one. (Not provided yet)
* **`progress-indicator`**: The element is a [`ProgressIndicator`](slint-reference:src/language/widgets/progressindicator) or behaves like one.
* **`text-input`**: The role for widget with editable text such as a
    [`LineEdit`](slint-reference:src/language/widgets/lineedit) or a [`TextEdit`](slint-reference:src/language/widgets/textedit)
* **`switch`**: The element is a [`Switch`](slint-reference:src/language/widgets/switch) or behaves like one.
* **`list-item`**: The element is an item in a [`ListView`](slint-reference:src/language/widgets/listview).

## `AnimationDirection`

 This enum describes the direction of an animation.

* **`normal`**: The ["normal" direction as defined in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction#normal).
* **`reverse`**: The ["reverse" direction as defined in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction#reverse).
* **`alternate`**: The ["alternate" direction as defined in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction#alternate).
* **`alternate-reverse`**: The ["alternate reverse" direction as defined in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction#alternate-reverse).

## `ColorScheme`

 This enum indicates the color scheme used by the widget style. Use this to explicitly switch
 between dark and light schemes, or choose Unknown to fall back to the system default.

* **`unknown`**: The scheme is not known and a system wide setting configures this. This could mean that
    the widgets are shown in a dark or light scheme, but it could also be a custom color scheme.
* **`dark`**: The style chooses light colors for the background and dark for the foreground.
* **`light`**: The style chooses dark colors for the background and light for the foreground.

## `DialogButtonRole`

 This enum represents the value of the `dialog-button-role` property which can be added to
 any element within a [`Dialog`](elements.md#dialog) to put that item in the button row, and its exact position
 depends on the role and the platform.

* **`none`**: This isn't a button meant to go into the bottom row
* **`accept`**: This is the role of the main button to click to accept the dialog. e.g. "Ok" or "Yes"
* **`reject`**: This is the role of the main button to click to reject the dialog. e.g. "Cancel" or "No"
* **`apply`**: This is the role of the "Apply" button
* **`reset`**: This is the role of the "Reset" button
* **`help`**: This is the role of the  "Help" button
* **`action`**: This is the role of any other button that performs another action.

## `EventResult`

 This enum describes whether an event was rejected or accepted by an event handler.

* **`reject`**: The event is rejected by this event handler and may then be handled by the parent item
* **`accept`**: The event is accepted and won't be processed further

## `FillRule`

 This enum describes the different ways of deciding what the inside of a shape described by a path shall be.

* **`nonzero`**: The ["nonzero" fill rule as defined in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule#nonzero).
* **`evenodd`**: The ["evenodd" fill rule as defined in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule#evenodd)

## `ImageFit`

 This enum defines how the source image shall fit into an [`Image`](elements.md#image) element.

* **`fill`**: Scales and stretches the source image to fit the width and height of the [`Image`](elements.md#image) element.
* **`contain`**: The source image is scaled to fit into the [`Image`](elements.md#image) element's dimension while preserving the aspect ratio.
* **`cover`**: The source image is scaled to cover into the [`Image`](elements.md#image) element's dimension while preserving the aspect ratio.
    If the aspect ratio of the source image doesn't match the element's one, then the image will be clipped to fit.
* **`preserve`**: Preserves the size of the source image in logical pixels.
    The source image will still be scaled by the scale factor that applies to all elements in the window.
    Any extra space will be left blank.

## `ImageHorizontalAlignment`

 This enum specifies the horizontal alignment of the source image.

* **`center`**: Aligns the source image at the center of the [`Image`](elements.md#image) element.
* **`left`**: Aligns the source image at the left of the [`Image`](elements.md#image) element.
* **`right`**: Aligns the source image at the right of the [`Image`](elements.md#image) element.

## `ImageRendering`

 This enum specifies how the source image will be scaled.

* **`smooth`**: The image is scaled with a linear interpolation algorithm.
* **`pixelated`**: The image is scaled with the nearest neighbor algorithm.

## `ImageTiling`

 This enum specifies how the source image will be tiled.

* **`none`**: The source image will not be tiled.
* **`repeat`**: The source image will be repeated to fill the [`Image`](elements.md#image) element.
* **`round`**: The source image will be repeated and scaled to fill the [`Image`](elements.md#image) element, ensuring an integer number of repetitions.

## `ImageVerticalAlignment`

 This enum specifies the vertical alignment of the source image.

* **`center`**: Aligns the source image at the center of the [`Image`](elements.md#image) element.
* **`top`**: Aligns the source image at the top of the [`Image`](elements.md#image) element.
* **`bottom`**: Aligns the source image at the bottom of the [`Image`](elements.md#image) element.

## `InputType`

 This enum is used to define the type of the input field.

* **`text`**: The default value. This will render all characters normally
* **`password`**: This will render all characters with a character that defaults to "*"
* **`number`**: This will only accept and render number characters (0-9)
* **`decimal`**: This will accept and render characters if it's valid part of a decimal

## `LayoutAlignment`

 Enum representing the [alignment](../concepts/layouting.md#alignment) property of a
 [`HorizontalBox`](../widgets/horizontalbox.md), a [`VerticalBox`](../widgets/verticalbox.md),
 a [`HorizontalLayout`, or `VerticalLayout`](elements.md#verticallayout-and-horizontallayout).

* **`stretch`**: Use the minimum size of all elements in a layout, distribute remaining space
    based on `*-stretch` among all elements.
* **`center`**: Use the preferred size for all elements, distribute remaining space evenly before the
    first and after the last element.
* **`start`**: Use the preferred size for all elements, put remaining space after the last element.
* **`end`**: Use the preferred size for all elements, put remaining space before the first
    element.
* **`space-between`**: Use the preferred size for all elements, distribute remaining space evenly between
    elements.
* **`space-around`**: Use the preferred size for all elements, distribute remaining space evenly before the
    first element, after the last element and between elements.

## `MouseCursor`

 This enum represents different types of mouse cursors. It's a subset of the mouse cursors available in CSS.
 For details and pictograms see the [MDN Documentation for cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#values).
 Depending on the backend and used OS unidirectional resize cursors may be replaced with bidirectional ones.

* **`default`**: The systems default cursor.
* **`none`**: No cursor is displayed.
* **`help`**: A cursor indicating help information.
* **`pointer`**: A pointing hand indicating a link.
* **`progress`**: The program is busy but can still be interacted with.
* **`wait`**: The program is busy.
* **`crosshair`**: A crosshair.
* **`text`**: A cursor indicating selectable text.
* **`alias`**: An alias or shortcut is being created.
* **`copy`**: A copy is being created.
* **`move`**: Something is to be moved.
* **`no-drop`**: Something can't be dropped here.
* **`not-allowed`**: An action isn't allowed
* **`grab`**: Something is grabbable.
* **`grabbing`**: Something is being grabbed.
* **`col-resize`**: Indicating that a column is resizable horizontally.
* **`row-resize`**: Indicating that a row is resizable vertically.
* **`n-resize`**: Unidirectional resize north.
* **`e-resize`**: Unidirectional resize east.
* **`s-resize`**: Unidirectional resize south.
* **`w-resize`**: Unidirectional resize west.
* **`ne-resize`**: Unidirectional resize north-east.
* **`nw-resize`**: Unidirectional resize north-west.
* **`se-resize`**: Unidirectional resize south-east.
* **`sw-resize`**: Unidirectional resize south-west.
* **`ew-resize`**: Bidirectional resize east-west.
* **`ns-resize`**: Bidirectional resize north-south.
* **`nesw-resize`**: Bidirectional resize north-east-south-west.
* **`nwse-resize`**: Bidirectional resize north-west-south-east.

## `Orientation`

 Represents the orientation of an element or widget such as the [`Slider`](../widgets/slider.md).

* **`horizontal`**: Element is oriented horizontally.
* **`vertical`**: Element is oriented vertically.

## `PathEvent`

 PathEvent is a low-level data structure describing the composition of a path. Typically it is
 generated at compile time from a higher-level description, such as SVG commands.

* **`begin`**: The beginning of the path.
* **`line`**: A straight line on the path.
* **`quadratic`**: A quadratic bezier curve on the path.
* **`cubic`**: A cubic bezier curve on the path.
* **`end-open`**: The end of the path that remains open.
* **`end-closed`**: The end of a path that is closed.

## `PointerEventButton`

 This enum describes the different types of buttons for a pointer event,
 typically on a mouse or a pencil.

* **`other`**: A button that is none of left, right, middle, back or forward. For example,
    this is used for the task button on a mouse with many buttons.
* **`left`**: The left button.
* **`right`**: The right button.
* **`middle`**: The center button.
* **`back`**: The back button.
* **`forward`**: The forward button.

## `PointerEventKind`

 The enum reports what happened to the `PointerEventButton` in the event

* **`cancel`**: The action was cancelled.
* **`down`**: The button was pressed.
* **`up`**: The button was released.
* **`move`**: The pointer has moved,

## `SortOrder`

 This enum represents the different values of the `sort-order` property.
 It's used to sort a [`StandardTableView`](../widgets/standardtableview.md) by a column.

* **`unsorted`**: The column is unsorted.
* **`ascending`**: The column is sorted in ascending order.
* **`descending`**: The column is sorted in descending order.

## `StandardButtonKind`

 Use this enum to add standard buttons to a [`Dialog`](elements.md#dialog). The look and positioning
 of these [`StandardButton`](../widgets/standardbutton.md)s depends on the environment
 (OS, UI environment, etc.) the application runs in.

* **`ok`**: A "OK" button that accepts a [`Dialog`](elements.md#dialog), closing it when clicked.
* **`cancel`**: A "Cancel" button that rejects a [`Dialog`](elements.md#dialog), closing it when clicked.
* **`apply`**: A "Apply" button that should accept values from a
    [`Dialog`](elements.md#dialog) without closing it.
* **`close`**: A "Close" button, which should close a [`Dialog`](elements.md#dialog) without looking at values.
* **`reset`**: A "Reset" button, which should reset the [`Dialog`](elements.md#dialog) to its initial state.
* **`help`**: A "Help" button, which should bring up context related documentation when clicked.
* **`yes`**: A "Yes" button, used to confirm an action.
* **`no`**: A "No" button, used to deny an action.
* **`abort`**: A "Abort" button, used to abort an action.
* **`retry`**: A "Retry" button, used to retry a failed action.
* **`ignore`**: A "Ignore" button, used to ignore a failed action.

## `TextHorizontalAlignment`

 This enum describes the different types of alignment of text along the horizontal axis of a [`Text`](elements.md#text) element.

* **`left`**: The text will be aligned with the left edge of the containing box.
* **`center`**: The text will be horizontally centered within the containing box.
* **`right`**: The text will be aligned to the right of the containing box.

## `TextOverflow`

 This enum describes the how the text appear if it is too wide to fit in the [`Text`](elements.md#text) width.

* **`clip`**: The text will simply be clipped.
* **`elide`**: The text will be elided with `…`.

## `TextStrokeStyle`

 This enum describes the positioning of a text stroke relative to the border of the glyphs in a [`Text`](elements.md#text).

* **`outside`**: The inside edge of the stroke is at the outer edge of the text.
* **`center`**: The center line of the stroke is at the outer edge of the text, like in Adobe Illustrator.

## `TextVerticalAlignment`

 This enum describes the different types of alignment of text along the vertical axis of a [`Text`](elements.md#text) element.

* **`top`**: The text will be aligned to the top of the containing box.
* **`center`**: The text will be vertically centered within the containing box.
* **`bottom`**: The text will be aligned to the bottom of the containing box.

## `TextWrap`

 This enum describes the how the text wrap if it is too wide to fit in the [`Text`](elements.md#text) width.

* **`no-wrap`**: The text won't wrap, but instead will overflow.
* **`word-wrap`**: The text will be wrapped at word boundaries if possible, or at any location for very long words.
* **`char-wrap`**: The text will be wrapped at any character. Currently only supported by the Qt and Software renderers.

