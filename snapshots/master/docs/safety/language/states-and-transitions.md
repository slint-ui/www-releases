---
title: "States and Transitions"
description: "Declaring states and animating state changes."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';

<SC>
A `states` block declares a set of named *states* on an element.
Each state carries a condition and a set of property changes. \{#sls.state.def}

```slint
export component Example inherits Window {
    in-out property <int> level;
    indicator := Rectangle {
        width: 32px;
        height: 32px;
        background: #808080;
    }

    states [
        alarm when level > 10: {
            indicator.background: #a02020;
            indicator.width: 64px;
        }
        warning when level > 5: {
            indicator.background: #c08000;
            indicator.width: 48px;
        }
    ]
}
```

A `states` block is a single statement inside an element's body, written `states [ ... ]`. \{#sls.state.form}

A `states` block may appear on any element, and each element has its own set of states. \{#sls.state.scope}


An element may hold more than one `states` block, and the entries of all of them make up its set of states. \{#sls.state.blocks}

## States

Each entry consists of a name, a `when` clause holding a boolean expression, `:`, and a brace-delimited body of property changes. \{#sls.state.entry.form}


```slint no-test
name when condition: {
    element.property: value;
    // ...
}
```

The name is an identifier local to the element, so two elements may each declare a state of the same name. \{#sls.state.name}

The condition may reference any property in scope, including properties of other elements. \{#sls.state.condition}

At most one state is active at a time. \{#sls.state.active}

When the conditions of several states hold, the state listed first in source order is the active one. \{#sls.state.first-wins}

When no condition holds, no state is active, and every property keeps its own binding. \{#sls.state.inactive}

<OnlyInSC>
Each state shall carry a `when` clause: a state without one can never be active. \{#sls.state.condition-required}
</OnlyInSC>

## Property Changes

The body of a state is a list of *property changes*.
Each change consists of a name, `:`, a value, and `;`. \{#sls.state.change.form}

An unqualified name refers to a property of the element that owns the `states` block, so `background` is the same as `root.background`.
A qualified name addresses a descendant by its element id, as in `indicator.background`. \{#sls.state.change.target}

The name shall resolve to a property. \{#sls.state.change.target-must-exist}

The value is a [binding](/language/bindings/) of that property. \{#sls.state.change.value}

While a state is active, each property it lists takes the state's value instead of its own binding. \{#sls.state.change.effect}

Setting the property [replaces](/language/bindings/#sls.binding.set-replaces) the binding a property change gives it.
The property then keeps the value it was set to, whichever state is active. \{#sls.state.change.set}


<OnlyInSC>
A state shall only change a property that is part of the subset. \{#sls.state.change.subset}

A state shall carry no transition. \{#sls.state.no-transition}
</OnlyInSC>
</SC>