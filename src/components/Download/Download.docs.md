# Download

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Download
package: borrom-ds-test
import: import { Download } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Download/Download.tsx
types: src/components/Download/Download.types.ts
localExport: src/components/Download/index.ts
publicExport: src/index.ts
storybook: src/stories/Download.stories.tsx
figmaComponent: Download
figmaNodeId: 4027:8157
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=4027-8157
codeConnect: src/components/Download/Download.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Download, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Download fileName="Пример" fileSize="Пример"  />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Download/Download.tsx](Download.tsx) |
| Props / shared types | [src/components/Download/Download.types.ts](Download.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Download.stories.tsx](../../stories/Download.stories.tsx) |
| Code Connect | [src/components/Download/Download.figma.js](Download.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `fileName` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `fileSize` | `ReactNode` | optional | См. типы и пример выше |
| `icon` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `action` | `ReactNode` | optional | См. типы и пример выше |
| `onActionClick` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `actionAriaLabel` | `string \| undefined` | optional | См. типы и пример выше |
| `withBackground` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Button` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: connect the real download URL in the application.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
