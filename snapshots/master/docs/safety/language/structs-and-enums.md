---
title: "Structs and Enums"
description: "Declaring named structures and enumerations."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';

<SC>
## Structs

A `struct` declaration at the top level of a `.slint` source file defines a named structure type;
its fields are written between braces, each a name and a type separated by `:`,
the fields separated by commas, and a struct with no fields is allowed. \{#sls.struct.decl}

Each field's type can be any property type. \{#sls.struct.field-type}

```slint
export struct Palette {
    fill: color,
    gap: length,
}
```

<OnlyInSC>
A field shall not declare a default value. \{#sls.struct.no-field-default}

The default value of a struct is the value whose every field holds the default value of its type. \{#sls.struct.default}
</OnlyInSC>
</SC>




<SC>
A struct value is written as a struct literal that initializes fields by name,
`{ field1: value1, field2: value2 }`, with an optional trailing comma. \{#sls.struct.literal}

<OnlyInSC>
A struct literal shall initialize every field of the struct exactly once,
and shall not name a member that the struct does not have. \{#sls.struct.literal.exact}
</OnlyInSC>

A field is read with the `.` operator, as in `palette.fill`. \{#sls.struct.field-access}

```slint
export struct Palette {
    fill: color,
    gap: length,
}

export component Example inherits Window {
    out property <Palette> palette: { fill: #f00, gap: 2px };
    out property <color> tint: palette.fill;
}
```
</SC>













<SC>
## Enums

An `enum` declaration at the top level defines an enumeration;
its values are listed between braces, separated by commas. \{#sls.enum.decl}

An enum shall have at least one value. \{#sls.enum.nonempty}

A value shall not have the same name as the enum. \{#sls.enum.value-name}

The values shall be distinct; `-` and `_` are the same character within a name,
so `hello-world` and `hello_world` name one value. \{#sls.enum.distinct}

No two values shall map to the same generated name, formed by dropping `-` and `_`
and capitalizing the first letter of the name and of each word after a separator.
`hello-world` and `HelloWorld` are different values but map to the same name,
so an enum cannot declare both. \{#sls.enum.name-collision}

```slint
export enum Direction { up, down, left, right }

export component Example inherits Window {
    in-out property<Direction> heading: Direction.up;
}
```

An enum value is referenced with the enum name and the value name separated by a dot,
as in `Direction.up`. \{#sls.enum.value}

The default value of an enum is its first value. \{#sls.enum.default}
</SC>