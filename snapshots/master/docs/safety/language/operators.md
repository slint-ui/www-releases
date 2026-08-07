---
title: "Operators"
description: "The operators of the Slint language."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';








<SC>
## Arithmetic operators

<OnlyInSC>
An arithmetic expression combines two operands with `+`, `-`, or `*`. \{#sls.op.form}

`+` and `-` require both operands to have the same type. \{#sls.op.additive}

`*` multiplies a value by a number. \{#sls.op.multiplicative}

`*` binds tighter than `+` and `-`. \{#sls.op.precedence}

Arithmetic saturates at the bounds of the value's type. \{#sls.op.saturating}
</OnlyInSC>
<NotInSC>
The binary operators `+`, `-`, `*`, and `/` operate on numbers (`int`, `float`, `percent`) and on
types that carry a unit (`length`, `physical-length`, `duration`, `angle`, `rem`).

- `+` and `-` require both operands to be the same type, or one operand to be a plain number.
  Values of two different units cannot be added or subtracted.
- `*` multiplies a value by a number, or two values with units, producing a unit product
  (for example `1px * 1px` has type `px²`).
- `/` divides a value by a number, or by another value.
  Dividing two values of the same unit yields a plain number, so `self.width / 1px` is the width as a `float`.
</NotInSC>

```slint
export component Example inherits Window {
    in property <length> a;
    in property <length> b;
    out property <length> total: a + b * 2;
}
```
</SC>





<SC>
## Comparison operators

The operators `==`, `!=`, `<`, `>`, `<=`, and `>=` compare two operands of a common type and
produce a `bool`. \{#sls.op.comparison}

`==` and `!=` test whether the operands are equal. \{#sls.op.comparison.equality}

<OnlyInSC>
`<`, `>`, `<=`, and `>=` order two numbers or lengths. \{#sls.op.comparison.ordering}
</OnlyInSC>
<NotInSC>
`<`, `>`, `<=`, and `>=` order numbers, unit-bearing types, and strings; ordering values of any
other type is an error.
</NotInSC>

```slint
export component Example inherits Window {
    in property <int> a;
    in property <length> w;
    in property <length> h;
    out property <bool> equal: a == 0;
    out property <bool> different: a != 0;
    out property <bool> wider: w > h;
}
```
</SC>

<SC>
## Logical operators

The binary operators `&&` and `||` combine two boolean operands into a boolean:
`&&` is true when both operands are true, `||` when either is. \{#sls.op.logical}

The unary operator `!` negates a boolean. \{#sls.op.not}

The operands must be `bool`; no other type is coerced to `bool`. \{#sls.op.bool-operands}

```slint
export component Example inherits Window {
    in property <bool> a;
    in property <bool> b;
    out property <bool> both: a && b;
    out property <bool> either: a || b;
    out property <bool> neither: !a && !b;
}
```
</SC>


<SC>
## Unary operators

The prefix operators are `+`, `-`, and `!`. \{#sls.op.prefix}

<OnlyInSC>
A unary `+` or `-` applies to a number or a length, and `-` negates it. \{#sls.op.unary}
</OnlyInSC>
<NotInSC>
`+` and `-` apply to numbers and unit-bearing types, and `!` applies to `bool`.
</NotInSC>

```slint
export component Example inherits Window {
    in property <length> w;
    in property <bool> flag;
    out property <length> negated: -w;
    out property <bool> toggled: !flag;
}
```
</SC>

<SC>
## Ternary operator

`condition ? value1 : value2` evaluates `condition`, a boolean,
and yields `value1` when it is true and `value2` otherwise. \{#sls.op.ternary}

Both branches have the same type, which becomes the type of the whole expression. \{#sls.op.ternary.type}

A conditional associates to the right,
so `a ? b : c ? d : e` groups as `a ? b : (c ? d : e)`. \{#sls.op.ternary.assoc}

```slint
export component Example inherits Window {
    in property <bool> on;
    in property <color> active;
    in property <color> idle;
    out property <color> tint: on ? active : idle;
}
```
</SC>