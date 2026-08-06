---
title: "Operators"
description: "The operators of the Slint language."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';








<SC>
## Arithmetic operators

<OnlyInSC>
An arithmetic expression combines two operands with `+`, `-`, or `*`. \{#sls.op.form}

`+` and `-` require both operands to have the same type. \{#sls.op.additive}

`*` multiplies a value by a number. \{#sls.op.multiplicative}

`*` binds tighter than `+` and `-`. \{#sls.op.precedence}

Arithmetic saturates at the bounds of the value's type. \{#sls.op.saturating}
</OnlyInSC>

```slint
export component Example inherits Window {
    in property <length> a;
    in property <length> b;
    out property <length> total: a + b * 2;
}
```
</SC>













<SC>
## Unary operators

<OnlyInSC>
A unary `-` or `+` applies to a number or a length; `-` negates it. \{#sls.op.unary}
</OnlyInSC>

```slint
export component Example inherits Window {
    in property <length> w;
    out property <length> negated: -w;
}
```
</SC>