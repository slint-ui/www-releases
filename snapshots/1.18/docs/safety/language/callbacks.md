---
title: "Callbacks"
description: "Declaring callbacks, setting handlers, aliases, and change callbacks."
---
import SC from '@slint/common-files/src/components/SC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';

<SC>
A *callback* is a member that carries an invocation from one place to another.
It's declared with the `callback` keyword, invoked by calling it,
and reacted to by a handler set with the `=>` arrow. \{#sls.callback.def}

```slint
export component Example inherits Window {
    callback hello;
    TouchArea {
        clicked => { root.hello(); }
    }
}
```
</SC>


<SC>
## Declaration

A *callback declaration* adds a callback to the element in whose body it appears.
It consists of the keyword `callback`, a name, and `;`. \{#sls.callback.decl.form}

<OnlyInSC>
A callback shall only be declared on the root element,
so that every callback of a component is one the application implements. \{#sls.callback.decl.root-only}

A callback shall have neither parameters nor a return value,
so its declaration carries neither a parameter list nor a `->` return type. \{#sls.callback.decl.no-params}

A callback shall not be declared `pure`, and shall not be declared as an alias. \{#sls.callback.decl.plain}
</OnlyInSC>

A callback name shall not collide with another member of the same element:
a declaration whose name matches an existing property, function, or callback is an error. \{#sls.callback.decl.unique}
</SC>







<SC>
## Calling

A callback is invoked with call syntax:
the callback, followed by parentheses holding the arguments. \{#sls.callback.call.form}

Invoking a callback runs its handler.
A callback without a handler does nothing when invoked. \{#sls.callback.call.handler}

```slint
export component Example inherits Window {
    callback acknowledged;
    TouchArea {
        clicked => { root.acknowledged(); }
    }
}
```
</SC>



<SC>
## Handlers

A *handler* reacts to a callback's invocation.
It's written as the callback's name, `=>`, and either a single expression or a code block. \{#sls.callback.handler.form}

A callback has at most one handler;
setting a second handler for the same callback is an error. \{#sls.callback.handler.one}

A handler may be set on a callback of a child element,
such as `TouchArea`'s [`clicked`](/reference/toucharea/#sls.ref.toucharea.clicked). \{#sls.callback.handler.target}

<OnlyInSC>
A handler body shall consist of callback invocations and nothing else. \{#sls.callback.handler.body}

A handler shall not be set on a callback declared on the root element:
the application implements those. \{#sls.callback.handler.not-root}

Each invocation runs the handler of the callback,
so a cycle of handlers, each invoking the next, is an error. \{#sls.callback.handler.no-cycle}
</OnlyInSC>

```slint
export component Example inherits Window {
    callback first;
    callback second;
    TouchArea {
        clicked => {
            root.first();
            root.second();
        }
    }
}
```
</SC>