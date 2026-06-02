---
title: "InputType"
description: "InputType content"
---
<!-- Generated with slint-doc-generator from internal/commons/enums.rs -->

`InputType`

 This enum is used to define the type of the input field.

* **`text`**:  The default value. This will render all characters normally
* **`password`**:  This will render all characters with a character that defaults to "*"
* **`number`**:  This will only accept and render number characters (0-9)
* **`decimal`**:  This will accept and render characters if it's valid part of a decimal
* **`search`**:  This identifies the input field as a search box. Characters are rendered normally, but assistive technologies are informed that the field is used for searching or filtering content.