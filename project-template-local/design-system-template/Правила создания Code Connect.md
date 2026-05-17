# Правила создания Code Connect

Code Connect связывает опубликованный Figma component с публичным React API дизайн-системы.

## Когда создавать

Создавай `<Component>.figma.js` только если:

- компонент уже реализован в `src/components/<Component>`;
- известен Figma URL с `node-id`;
- понятны Figma properties/variants;
- можно выдать корректный snippet через публичный import из `borrom-ds-test`.

Если runtime-компонента нет, Code Connect не создаем и фиксируем blocker.

## Где хранить

```text
src/components/<Component>/<Component>.figma.js
src/components/<Component>/<Component>.docs.md
```

Оба файла должны лежать рядом с runtime-компонентом и описывать один и тот же mapping.

## Import в snippet

```js
imports: ['import { Component } from "borrom-ds-test"']
```

Не импортируй из `src/components/...` в generated snippet.

## Что проверить

- Figma variants сопоставлены с публичными props из types.
- Text properties идут в `children`, `label`, `title` или другой существующий prop.
- Boolean properties сопоставлены с реальными boolean props.
- Instance swap используется только если вложенный instance имеет Code Connect.
- Несовпадения зафиксированы как `Temporary mapping`.

## Проверка

После создания обнови tracker:

```bash
npm run figma:status:write
```

И проверь кодировку:

```bash
npm run encoding:check
```
