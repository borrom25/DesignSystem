# Правила создания Code Connect

## Когда читать этот документ

Читать этот файл только когда задача связана с Figma Code Connect:

- нужно создать `.figma.js` для компонента;
- нужно обновить существующий Code Connect mapping;
- нужно связать Figma component properties с props компонента;
- нужно проверить, почему Figma не подставляет правильный код.

Если компонент еще не реализован в `src/components`, сначала читать `Правила создания компонента.md` и создать компонент. Code Connect пишется только к реальному компоненту с понятным публичным API.

## Главный принцип

Code Connect должен лежать рядом с компонентом и повторять текущую структуру проекта.

Правильная структура:

```text
src/components/<Component>/
  <Component>.tsx
  <Component>.types.ts
  <Component>.figma.js
  index.ts
  styles/
```

Пример:

```text
src/components/Button/
  Button.tsx
  Button.types.ts
  Button.figma.js
  index.ts
  styles/
```

## Источники истины

Перед написанием `.figma.js` читать:

1. компонент в `src/components/<Component>/<Component>.tsx`;
2. props и типы в `src/components/<Component>/<Component>.types.ts`;
3. export в `src/components/<Component>/index.ts`;
4. public export в `src/index.ts`;
5. story в `src/stories/<Component>.stories.tsx`;
6. существующие `.figma.js` рядом с похожими компонентами, если они есть;
7. Figma component properties из задачи или через Figma MCP.

## Имя и расположение файла

Файл называть так же, как runtime file:

- компонент: `src/components/Button/Button.tsx`;
- Code Connect: `src/components/Button/Button.figma.js`.

Для составных компонентов использовать имя публичного компонента или основного runtime файла:

- `InputNumber.tsx` -> `InputNumber.figma.js`;
- `DatePicker.tsx` -> `DatePicker.figma.js`;
- `MultiSelect.tsx` -> `MultiSelect.figma.js`.

Если компонент лежит глубже внутри подпапки, Code Connect размещать рядом с тем runtime file, который экспортируется как публичный компонент.

## Базовая структура файла

Каждый `.figma.js` должен начинаться с трех комментариев:

```js
// url=https://www.figma.com/design/...?...node-id=...
// source=src/components/<Component>/<Component>.tsx
// component=<Component>
```

Далее использовать parserless template:

```js
const figma = require("figma");
const instance = figma.selectedInstance;

export default {
  example: figma.tsx`<Component />`,
  imports: ['import { Component } from "borrom-ds-test"'],
  id: "component",
  metadata: { nestable: true },
};
```

Для React всегда использовать `figma.tsx`, не `figma.code`.

## Import path

В output snippet основной компонент импортировать из публичного пакета, а не из внутреннего пути.

Для текущего пакета имя в `package.json`:

```js
imports: ['import { Button } from "borrom-ds-test"']
```

Если имя пакета будет изменено, использовать актуальное `name` из `package.json`.

Не импортировать компонент из `src/components/...` в Code Connect output.

Если нужны иконки, использовать публичный импорт:

```js
imports: [
  'import { Button } from "borrom-ds-test"',
  'import { Check, X } from "lucide-react"',
]
```

## Mapping Figma properties -> props

Сопоставлять каждое Figma property с реальным prop из `<Component>.types.ts`.

Использовать методы:

- `instance.getString("Name")` для TEXT;
- `instance.getBoolean("Name")` для BOOLEAN;
- `instance.getEnum("Name", { FigmaValue: "codeValue" })` для VARIANT;
- `instance.getInstanceSwap("Name")` для swappable instance slots;
- `instance.findText("Layer name")` или `instance.findInstance("Layer name")` только если property не вынесено в component properties.

Имена properties чувствительны к регистру. Использовать точные имена из Figma.

## Интерполяция

Правила для `figma.tsx`:

- string/enum values писать в кавычках: `size="${size}"`;
- boolean props писать условно: `${disabled ? "disabled" : ""}`;
- React nodes и snippets писать в фигурных скобках: `iconLeft={${iconCode}}`;
- не склеивать template results через `+`, `.join()` или string concatenation.

Если используешь `executeTemplate()`, сначала проверять:

```js
if (icon && icon.type === "INSTANCE" && icon.hasCodeConnect()) {
  iconCode = icon.executeTemplate().example;
}
```

## Temporary mappings

Если Figma variant или slot не имеет точного соответствия в публичном API компонента:

- не менять API молча;
- использовать ближайший безопасный mapping;
- оставить комментарий `Temporary mapping`;
- при необходимости отметить расхождение в задаче или документации.

Пример:

```js
// Temporary mapping: Figma color Info has no one-to-one value
// in the current public API, so it maps to primary.
```

## Проверка перед завершением

Перед завершением проверить:

- файл лежит в `src/components/<Component>/<Component>.figma.js`;
- `source` указывает на реальный runtime file;
- `component` совпадает с экспортируемым компонентом;
- `imports` используют публичный package import;
- все важные Figma properties покрыты;
- enum values из Figma явно сопоставлены с code values;
- boolean props не превращаются в строки `"true"`/`"false"`;
- отсутствующие соответствия помечены как `Temporary mapping`;
- mapping не требует props, которых нет в `<Component>.types.ts`.

## Запрещено

- Делать Code Connect для компонента, которого нет в `src/components`.
- Класть `.figma.js` отдельно от компонента.
- Импортировать из внутренних путей в output snippet.
- Требовать props, которых нет в `<Component>.types.ts`.
- Склеивать результаты `executeTemplate().example` строками.
- Молча пропускать важные variants, states или slots.
- Использовать `figma.code` для React-компонентов.
