# Code Connect template

Используй этот шаблон, когда нужно создать реальный файл:

```text
src/components/<Component>/<Component>.figma.js
```

Создавай его рядом с документацией:

```text
src/components/<Component>/<Component>.docs.md
```

## Перед заполнением

- Figma component опубликован в team library.
- Figma URL содержит `node-id`.
- Runtime-компонент уже есть в `src/components/<Component>`.
- Рядом создан или обновлен `<Component>.docs.md`.
- Изучены runtime, types, local export, styles, story и public export.

## File skeleton

```js
// url=https://www.figma.com/design/<fileKey>/<fileName>?node-id=<nodeId>
// source=src/components/<Component>/<Component>.tsx
// component=<Component>
const figma = require("figma");
const instance = figma.selectedInstance;

const label = instance.getString("Label");

const size = instance.getEnum("Size", {
  Small: "sm",
  Medium: "md",
  Large: "lg",
});

const disabled = instance.getBoolean("Disabled");

export default {
  example: figma.tsx`
    <<Component> size="${size}" ${disabled ? "disabled" : ""}>
      ${label}
    </<Component>>
  `,
  imports: ['import { <Component> } from "borrom-ds-test"'],
  id: "<component-id>",
  metadata: {
    nestable: true,
  },
};
```

## Mapping table

Заполни таблицу перед финализацией `.figma.js`.

| Figma property | Figma type | Code prop | Mapping | Notes |
| --- | --- | --- | --- | --- |
| `Label` | TEXT | `children` | direct string |  |
| `Size` | VARIANT | `size` | `Small -> sm`, `Medium -> md` |  |
| `Disabled` | BOOLEAN | `disabled` | direct boolean |  |
| `Icon left` | INSTANCE_SWAP | `iconLeft` | requires nested Code Connect | Temporary mapping if missing |

## Rules

- Output snippet imports public API only: `import { <Component> } from "borrom-ds-test"`.
- Do not import from `src/components/...` in the generated snippet.
- Use `figma.tsx` for React snippets.
- Do not concatenate `executeTemplate().example` with strings or `.join()`.
- Always guard nested instances with `type === "INSTANCE"` and `hasCodeConnect()`.
- If a Figma property has no exact code prop, write `Temporary mapping` in a comment and in the mapping table.
- Keep `.figma.js` next to the runtime component.
- Keep `.docs.md` next to `.figma.js` and keep their mapping consistent.
