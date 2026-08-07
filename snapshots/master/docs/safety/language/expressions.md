---
title: "Expressions"
description: "The expression forms and what they evaluate to."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';

<OnlyInSC>
An expression is a color literal, a length literal, an integer literal, a boolean value,
an arithmetic, logical, unary, or conditional expression, or a property reference. \{#sls.expr.forms}
</OnlyInSC>


<SC>
Parentheses group a nested expression. \{#sls.expr.grouping}

## Color Literals

A color literal consists of `#` followed by 3, 4, 6, or 8 hexadecimal digits:
`#rgb`, `#rgba`, `#rrggbb`, or `#rrggbbaa`.
The digits are case-insensitive.
Any other number of digits is an error. \{#sls.expr.color.forms}

The digits specify the red, green, blue, and alpha channels, in this order.
When the alpha channel is absent, the color is fully opaque. \{#sls.expr.color.channels}

In the 3- and 4-digit forms, each digit specifies a channel with the digit duplicated:
`#18f` is the same color as `#1188ff`. \{#sls.expr.color.short-forms}

A color literal evaluates to a value of type `color`. \{#sls.expr.color.type}

## Length Literals

A length literal consists of a number directly followed by a unit, for example `120px`. \{#sls.expr.length.form}

```slint
export component Example inherits Window {
    Rectangle {
        width: 120px;
        height: 80px;
        background: #2a6e3f;
    }
}
```

</SC>

<OnlyInSC>
The number shall be integral: `10.5px` is an error. \{#sls.expr.length.integral}

`px` is the only unit.
A number literal with another unit is an error. \{#sls.expr.length.px-only}
</OnlyInSC>


<SC>
A length literal evaluates to a value of type `length`. \{#sls.expr.length.type}

## Integer Literals

An integer literal is a whole number written without a unit, for example `42`. \{#sls.expr.int.form}

An integer literal evaluates to a value of type `int`. \{#sls.expr.int.type}

<OnlyInSC>
A number with a fractional part but no unit is an error. \{#sls.expr.int.fractional}
</OnlyInSC>

## References

```slint
export component Example inherits Window {
    in property <color> tint;
    background: root.tint;
    Rectangle {
        background: root.tint;
        width: self.height;
    }
}
```

A property reference refers to a property.
It is a property name, optionally preceded by an element reference and a `.`. \{#sls.expr.ref.form}

The element reference is `self` for the enclosing element, `parent` for its parent,
`root` for the component's root element, or an element `id`. \{#sls.expr.ref.element}

The predefined names `true` and `false` are references to the two values of type `bool`. \{#sls.expr.bool}

A name without an element reference follows the [lookup rules](/language/name-resolution/#lookup-rules). \{#sls.expr.ref.lookup}

The name shall refer to a property of the referenced element. \{#sls.expr.ref.target}

When reading, a property reference evaluates to the value of the referenced property,
and has that property's type. \{#sls.expr.ref.value}
</SC>