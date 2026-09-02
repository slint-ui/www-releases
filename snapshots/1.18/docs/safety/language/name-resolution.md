---
title: "Name Resolution"
description: "Element names, pre-defined names, and lookup rules."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';












<SC>
## Lookup Rules

<OnlyInSC>
An unqualified identifier is resolved by trying, in order, `self`, `parent`, `true`, or `false`;
an element id; then a declared property, searching from the current element outward to the root.
The first match wins. \{#sls.name.lookup}

A qualified name refers to the named member of the element reached by the qualifier,
and does not fall back to ancestor elements. \{#sls.name.lookup.qualified}
</OnlyInSC>
</SC>