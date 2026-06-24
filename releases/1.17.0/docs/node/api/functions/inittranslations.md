---
title: "initTranslations"
---
> **initTranslations**(`domain`, `path`): `void`

Defined in: [api/node/typescript/index.ts:997](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L997)

Initialize translations.

Call this with the path where translations are located. This function internally calls the [bindtextdomain](https://man7.org/linux/man-pages/man3/bindtextdomain.3.html) function from gettext.

Translations are expected to be found at <path>/<locale>/LC_MESSAGES/<domain>.mo, where path is the directory passed as an argument to this function, locale is a locale name (e.g., en, en_GB, fr), and domain is the package name.

## Parameters

### domain

`string`

defines the domain name e.g. name of the package.

### path

`string` \| `URL`

specifies the directory as `string` or as `URL` in which gettext should search for translations.

For example, assuming this is in a package called example and the default locale is configured to be French, it will load translations at runtime from ``/path/to/example/translations/fr/LC_MESSAGES/example.mo`.

```js
import * as slint from "slint-ui";
slint.initTranslations("example", new URL("translations/", import.meta.url));
````

## Returns

`void`