---
title: "Imports"
description: "Bringing declarations from other files into scope."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';

<SC>
An import statement brings exported declarations from another file into the importing file's namespace. \{#sls.import.semantics}

<OnlyInSC>
An imported source file shall itself conform to this specification. \{#sls.import.subset}
</OnlyInSC>

## Placement

Import statements appear at the top level of a `.slint` source file,
interleaved with [component definitions](/language/file-structure/#sls.file.component.definition-forms) and [exports](/language/exports/). \{#sls.import.placement}

## Named Imports

<OnlyInSC>
Every import statement is a named import. \{#sls.import.named-only}
</OnlyInSC>

A named import has the form: \{#sls.import.forms}

```slint no-test
import { Item, ... } from "path";
```

The brace-delimited list contains one or more *import items* separated by commas.
A trailing comma is permitted. \{#sls.import.list}

An import item is either: \{#sls.import.item}

- a single [identifier](/language/lexical-structure/#sls.lex.identifier.classes) `Name`, or
- a renaming of the form `Name as Other`.

A bare identifier `Name` brings the corresponding exported name from the imported file into the current file's namespace under the same name. \{#sls.import.same-name}

A renaming `Name as Other` brings the corresponding exported name into the current file's namespace under the name `Other` only.
The original name `Name` is not introduced. \{#sls.import.rename}

The name on the left of `as` must be exported by the imported file. \{#sls.import.left-must-exist}

Two import items in the same source file can't introduce the same name. \{#sls.import.no-clash}

<OnlyInSC>
An imported name refers to a component. \{#sls.import.kinds}
</OnlyInSC>
</SC>


<SC>
## Import Paths

An import path is a double-quoted string literal. \{#sls.import.path-literal}

<OnlyInSC>
The path is resolved relative to the directory of the importing source file. \{#sls.import.path-relative}
</OnlyInSC>

The characters between the quotes are taken verbatim: escape sequences aren't decoded.
Both `/` and `\` are directory separators,
so a backslash separates directories rather than escaping the next character. \{#sls.import.path-verbatim}
</SC>



<SC>
The referenced file must exist. \{#sls.import.path-must-exist}
</SC>