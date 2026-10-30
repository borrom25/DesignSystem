# Plug

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Plug
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { Plug } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Plug/Plug.tsx
types: src/components/Plug/Plug.types.ts
localExport: src/components/Plug/index.ts
publicExport: src/index.ts
storybook: src/stories/Plug.stories.tsx
figmaComponent: Feedback Plug
figmaNodeId: 2059:7073
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=2059-7073
codeConnect: src/components/Plug/Plug.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Plug } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Plug title="Пример" subtitle="Пример"   />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Plug/Plug.tsx](Plug.tsx) |
| Props / shared types | [src/components/Plug/Plug.types.ts](Plug.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Plug.stories.tsx](../../stories/Plug.stories.tsx) |
| Code Connect | [src/components/Plug/Plug.figma.js](Plug.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `imageItem` | `ReactNode` | optional | См. типы и пример выше |
| `title` | `ReactNode` | optional | См. типы и пример выше |
| `subtitle` | `ReactNode` | optional | См. типы и пример выше |
| `actionSlot` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Indicator` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotAction>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotAction` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Pictures` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotIMG>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Result` | Pictures, Positive, Warning, Danger, Info | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Media` | Desktop, Mobile | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Media is responsive layout, not a Plug prop.
Result selects Figma image content; Plug accepts that content through imageItem.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
