# ProgressBar

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: ProgressBar
package: borrom-ds-test
packageVersion: 0.0.72
import: import { ProgressBar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/ProgressBar/ProgressBar.tsx
types: src/components/ProgressBar/ProgressBar.types.ts
localExport: src/components/ProgressBar/index.ts
publicExport: src/index.ts
storybook: src/stories/ProgressBar.stories.tsx
figmaComponent: Progress
figmaNodeId: 1274:160
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1274-160
codeConnect: src/components/ProgressBar/ProgressBar.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { ProgressBar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<ProgressBar
      status="loading"
      progress={0}
      title="Прогресс заполнения"

    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/ProgressBar/ProgressBar.tsx](ProgressBar.tsx) |
| Props / shared types | [src/components/ProgressBar/ProgressBar.types.ts](ProgressBar.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/ProgressBar.stories.tsx](../../stories/ProgressBar.stories.tsx) |
| Code Connect | [src/components/ProgressBar/ProgressBar.figma.js](ProgressBar.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `icon` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `iconSize` | `number \| undefined` | optional | См. типы и пример выше |
| `title` | `string \| undefined` | optional | См. типы и пример выше |
| `titleVariant` | `TextVariant \| undefined` | optional | См. типы и пример выше |
| `titleColor` | `TextColor \| undefined` | optional | См. типы и пример выше |
| `titleShade` | `TextShade \| undefined` | optional | См. типы и пример выше |
| `labelSize` | `Size \| undefined` | optional | См. типы и пример выше |
| `labelColor` | `LabelColor \| undefined` | optional | См. типы и пример выше |
| `labelPosition` | `ProgressBarLabelPosition \| undefined` | optional | См. типы и пример выше |
| `progress` | `number \| undefined` | optional | См. типы и пример выше |
| `status` | `ProgressBarStatus \| undefined` | optional | См. типы и пример выше |
| `showStatusLabel` | `boolean \| undefined` | optional | См. типы и пример выше |
| `segmentedItems` | `ProgressSegmentItem[] \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Icon` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotprogressDone>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotprogressError>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotprogressDone>2` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `progressContainer` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `View` | Line, Segments | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Head, Status, Clear | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Progress, Done, Error | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: segment slots in Figma are represented by data-driven
segmentedItems in the runtime component, not by React slots.

Temporary mapping:
Icon=Off cannot be generated safely because ProgressBar currently exposes
icon?: LucideIcon and uses the default icon when icon is undefined.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
