---
title: "Bindings"
description: "Assigning expressions to properties."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';

<SC>
A binding assigns an [expression](/language/expressions/) to a [property](/language/properties/#sls.prop.def) of the element in whose body it appears.
It has the form of a property name, followed by `:`, an expression, and `;`. \{#sls.binding.form}

```slint
export component Example inherits Window {
    Rectangle {
        background: #2a6e3f;
    }
}
```

The name shall refer to a property of the enclosing element. \{#sls.binding.target-must-exist}

<OnlyInSC>
Every property and every expression has a type: `color`, `length`, or `brush`. \{#sls.type.kinds}
</OnlyInSC>

An expression whose type is not the type of the property binds to it only when a conversion applies. \{#sls.type.conversions}

The type of the expression shall be the type of the property, or [convert](#sls.type.conversions) to it. \{#sls.binding.type}
</SC>