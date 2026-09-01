---
title: "Flickable"
description: "Flickable element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import CodeSnippetMD from '@slint/common-files/src/components/CodeSnippetMD.astro';
import Link from '@slint/common-files/src/components/Link.astro';

```slint playground
export component Example inherits Window {
    width: 270px;
    height: 100px;

    Flickable {
        content-height: 300px;
        Text {
            x:0;
            y: 150px;
            text: "This is some text that you have to scroll to see";
        }
    }
}
```

The `Flickable` is a low-level element that is the base for scrollable
widgets, such as the [ScrollView](/master/docs/slint/reference/std-widgets/views/scrollview.md) or [ListView](/master/docs/slint/reference/std-widgets/views/listview.md).
When the `content-width` or the `content-height` is greater than the parent's `width` or `height`
respectively, the element becomes scrollable.

When unset, the `content-width` and `content-height` are
calculated automatically based on the `Flickable`'s children. This isn't the
case when using a `for` loop to populate the elements. This is a bug tracked in
issue [#407](https://github.com/slint-ui/slint/issues/407).
The maximum and preferred size of the `Flickable` are based on the content size.

Note that the `Flickable` doesn't create a scrollbar.
You can use a [ScrollView](/master/docs/slint/reference/std-widgets/views/scrollview.md) instead or add your own scroll bars.

When not part of a layout, its width or height defaults to 100% of the parent
element when not specified.

## Pointer Event Interaction

If the `Flickable`'s area contains elements that use `TouchArea` to act on clicking, such as `Button`
widgets, then the following algorithm is used to distinguish between the user's intent of scrolling or
interacting with `TouchArea` elements:

1. If the `Flickable`'s `interactive` property is `false`, all events are forwarded to elements underneath.
   If `mouse-drag-pan-enabled` is `false`, only mouse events are forwarded this way, while touch events keep panning.
2. If a press event is received where the event's coordinates interact with a `TouchArea`, the event is stored
   and any subsequent move and release events are handled as follows:
   1. If 100ms elapse without any events, the stored press event is delivered to the `TouchArea`.
   2. If a release event is received before 100ms have elapsed, the stored press event as well as the
      release event are immediately delivered to the `TouchArea` and the algorithm resets.
   3. Any move events received will start a flicking operation on the `Flickable` if all of the following
      conditions are met:
        1. The event is received before 500ms have elapsed since receiving the press event.
        2. The distance to the press event exceeds 8 logical pixels in an orientation in which we are allowed to move.
      If `Flickable` decides to flick, any press event sent previously to a `TouchArea`, is followed up
      by an exit event. During the phase of receiving move events, the flickable follows the coordinates.
3. If the interaction of press, move, and release events begins at coordinates that do not intersect with
   a `TouchArea`, then `Flickable` will flick immediately on pointer move events when the euclidean distance
   to the coordinates of the press event exceeds 8 logical pixels.

If no element underneath claims a press, the `Flickable` itself only intercepts it when it can actually pan in some direction,
i.e. when its `content-width`/`content-height` exceed its own size, or its content is currently scrolled away from the origin.
Otherwise the event is forwarded to elements underneath it,
the same way wheel/scroll events already are (see below).

## Wheel/Scroll Event Interaction

The `Flickable` also supports scrolling with the mouse wheel and touchpad scroll gestures.
It will scroll regardless of the `interactive` and `mouse-drag-pan-enabled` properties.
If the `Flickable` can scroll in the event's direction, the event will be intercepted.
If the Flickable can't scroll in the direction of the event, the event will be forwarded to the parent.

## Properties

### interactive
<SlintProperty propName="interactive" typeName="bool" defaultValue="true">
<CodeSnippetMD imagePath="/src/assets/generated/flickable-1.png" imageAlt="flickable interactive" imageWidth="200" imageHeight="200">
```slint
Flickable {
    interactive: false;
}
```
</CodeSnippetMD>
When false, the content can't be panned by the user, neither by dragging with the mouse
nor with touch.
</SlintProperty>

### mouse-drag-pan-enabled
<SlintProperty propName="mouse-drag-pan-enabled" typeName="bool" defaultValue="true">
When true, the content can be scrolled by clicking on it and dragging it with the cursor.
Panning with a touch screen is only affected by `interactive`.
</SlintProperty>

### content-width
<SlintProperty propName="content-width" typeName="length">
The total width of the scrollable content.
</SlintProperty>

### content-height
<SlintProperty propName="content-height" typeName="length">
The total height of the scrollable content.
</SlintProperty>

### content-x
<SlintProperty propName="content-x" typeName="length" propertyVisibility="in-out">
The position of the scrollable content relative to the `Flickable`. This is usually a negative value.
</SlintProperty>

### content-y
<SlintProperty propName="content-y" typeName="length" propertyVisibility="in-out">
The position of the scrollable content relative to the `Flickable`. This is usually a negative value.
</SlintProperty>

## Callbacks

### flicked()
Invoked when `content-x` or `content-y` is changed by a user action (dragging, scrolling).