---
title: "slint::interpreter Namespace"
---
The types in this namespace allow you to load a .slint file at runtime and show its UI.

You only need to use them if you do not want to use pre-compiled .slint code, which is the normal way to use Slint.

The entry point for this namespace is the [ComponentCompiler](componentcompiler/), which you can use to create [ComponentDefinition](componentdefinition/) instances with the [ComponentCompiler::build\_from\_source()](componentcompiler/#build_from_source) or [ComponentCompiler::build\_from\_path()](componentcompiler/#build_from_path) functions.

## Types
- [ComponentCompiler](componentcompiler/)
- [ComponentDefinition](componentdefinition/)
- [ComponentInstance](componentinstance/)
- [Diagnostic](diagnostic/)
- [PropertyDescriptor](propertydescriptor/)
- [Struct](struct/)
- [Value](value/)

## Enumerations
- [ValueType](valuetype/)
- [DiagnosticLevel](diagnosticlevel/)