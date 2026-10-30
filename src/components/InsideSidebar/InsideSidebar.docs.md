# InsideSidebar

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: InsideSidebar
package: borrom-ds-test
packageVersion: 0.0.72
import: import { InsideSidebar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InsideSidebar/InsideSidebar.tsx
types: src/components/InsideSidebar/InsideSidebar.types.ts
localExport: src/components/InsideSidebar/index.ts
publicExport: src/index.ts
storybook: src/stories/InsideSidebar.stories.tsx
figmaComponent: sideMenuInside
figmaNodeId: 1021:18098
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=1021-18098
codeConnect: src/components/InsideSidebar/InsideSidebar.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { InsideSidebar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<InsideSidebar





  />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/InsideSidebar/InsideSidebar.tsx](InsideSidebar.tsx) |
| Props / shared types | [src/components/InsideSidebar/InsideSidebar.types.ts](InsideSidebar.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/InsideSidebar.stories.tsx](../../stories/InsideSidebar.stories.tsx) |
| Code Connect | [src/components/InsideSidebar/InsideSidebar.figma.js](InsideSidebar.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `title` | `ReactNode` | optional | См. типы и пример выше |
| `actionSlot` | `ReactNode` | optional | См. типы и пример выше |
| `headSlot` | `ReactNode` | optional | См. типы и пример выше |
| `slotContent` | `ReactNode` | optional | См. типы и пример выше |
| `bottomSlotAction` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `headSideMenu` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotHead` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `bottomSlotAction` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Body` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotHead>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<headSlotAction>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotAction>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Media` | Mobile, Desktop | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: the heading is nested Figma text, not a root TEXT property.
ScreenProvider selects desktop/mobile presentation; Media is not a runtime prop.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
