---
title: "CompileError"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import CompileError
```

**Bases:** <XRef to="Exception" plain />

## Properties

### message

<Signature symbol="slint.CompileError.message">message: <XRef to="str" plain /></Signature>

The error message that produced this compile error.

### diagnostics

<Signature symbol="slint.CompileError.diagnostics">diagnostics: <XRef to="list" plain />[native.PyDiagnostic]</Signature>

A list of detailed diagnostics that were produced as part of the compilation.