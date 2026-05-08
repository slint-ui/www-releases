---
title: "StandardButtonKind"
description: "StandardButtonKind content"
---
<!-- Generated with slint-doc-generator from internal/commons/enums.rs -->

`StandardButtonKind`

 Use this enum to add standard buttons to a `Dialog`. The look and positioning
 of these `StandardButton`s depends on the environment
 (OS, UI environment, etc.) the application runs in.

* **`ok`**:  A "OK" button that accepts a `Dialog`, closing it when clicked.
* **`cancel`**:  A "Cancel" button that rejects a `Dialog`, closing it when clicked.
* **`apply`**:  A "Apply" button that should accept values from a `Dialog` without closing it.
* **`close`**:  A "Close" button, which should close a `Dialog` without looking at values.
* **`reset`**:  A "Reset" button, which should reset the `Dialog` to its initial state.
* **`help`**:  A "Help" button, which should bring up context related documentation when clicked.
* **`yes`**:  A "Yes" button, used to confirm an action.
* **`no`**:  A "No" button, used to deny an action.
* **`abort`**:  A "Abort" button, used to abort an action.
* **`retry`**:  A "Retry" button, used to retry a failed action.
* **`ignore`**:  A "Ignore" button, used to ignore a failed action.