---
title: "AccessibleLiveness"
---
> **AccessibleLiveness** = *typeof* [`AccessibleLiveness`](/1.17.0/docs/node/api/variables/language/#accessibleliveness)\[keyof *typeof* [`AccessibleLiveness`](/1.17.0/docs/node/api/variables/language/#accessibleliveness)\]

Defined in: api/node/typescript/generated/language.ts:441

This enum represents the different values of the `accessible-live-region` property.
It indicates that an element is a live region whose content changes should be
announced by assistive technologies.

Variants:
- `language.AccessibleLiveness.Off` (`"off"`) — Use in regions that present information that is of low-importance to the user. Assistive technologies are expected to not announce changes unless the user explicitly asks for it.
- `language.AccessibleLiveness.Polite` (`"polite"`) — Use in regions that present new information to users. Assistive technologies are expected to not interrupt the user to inform of changes to the live region.
- `language.AccessibleLiveness.Assertive` (`"assertive"`) — Use in regions that present information that a user should know about right away. Assistive technologies are expected to announce to the user as soon as possible.