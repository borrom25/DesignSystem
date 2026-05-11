# Code Connect template

Используй этот шаблон, когда нужно создать реальный файл:

```text
src/components/<Component>/<Component>.figma.js
```

Создавай этот файл в паре с документацией:

```text
src/components/<Component>/<Component>.docs.md
```

В поле ссылки у Figma-компонента для Code Connect лучше указывать именно готовый `.figma.js`:

```text
src/components/<Component>/<Component>.figma.js
```

Не указывай `styles/*` как основную ссылку: это детали реализации. Не указывай только `index.ts`: он показывает export, но не объясняет mapping.

## Перед заполнением

- Figma component опубликован в team library.
- Figma URL содержит `node-id`.
- Компонент уже есть в `src/components/<Component>`.
- Рядом создан или обновлен `src/components/<Component>/<Component>.docs.md` с тем же mapping.
- Изучены:
  - `src/components/<Component>/<Component>.tsx`;
  - `src/components/<Component>/<Component>.types.ts`;
  - `src/components/<Component>/index.ts`;
  - `src/components/<Component>/styles`;
  - `src/stories/<Component>.stories.tsx`;
  - `src/index.ts`.

## File skeleton

```js
// url=https://www.figma.com/design/<fileKey>/<fileName>?node-id=<nodeId>
// source=src/components/<Component>/<Component>.tsx
// component=<Component>
const figma = require("figma");
const instance = figma.selectedInstance;

// 1. Text properties
const label = instance.getString("Label");

// 2. Variant properties
const size = instance.getEnum("Size", {
  Small: "sm",
  Medium: "md",
  Large: "lg",
});

const type = instance.getEnum("Type", {
  Fill: "fill",
  Outline: "outline",
  Flat: "flat",
  Ghost: "ghost",
});

const color = instance.getEnum("Color", {
  Brand: "brand",
  Action: "action",
  Danger: "danger",
  Positive: "positive",
  Warning: "warning",
  Neutral: "neutral",
});

// 3. Boolean properties
const disabled = instance.getBoolean("Disabled");
const loading = instance.getBoolean("Loading");

// 4. Instance swap properties
const iconLeft = instance.getInstanceSwap("Icon left");
let iconLeftCode;

if (iconLeft && iconLeft.type === "INSTANCE" && iconLeft.hasCodeConnect()) {
  iconLeftCode = iconLeft.executeTemplate().example;
}

export default {
  example: figma.tsx`
    <<Component>
      type="${type}"
      color="${color}"
      size="${size}"
      ${disabled ? "disabled" : ""}
      ${loading ? "loading" : ""}
      ${iconLeftCode ? figma.tsx`iconLeft={${iconLeftCode}}` : ""}
    >
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
| `Type` | VARIANT | `type` | `Fill -> fill` |  |
| `Color` | VARIANT | `color` | `Brand -> brand` |  |
| `Disabled` | BOOLEAN | `disabled` | direct boolean |  |
| `Loading` | BOOLEAN | `loading` | direct boolean |  |
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
