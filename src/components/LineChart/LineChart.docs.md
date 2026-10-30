# LineChart

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: LineChart
package: borrom-ds-test
import: import { LineChart } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/LineChart/LineChart.tsx
types: src/components/LineChart/LineChart.types.ts
localExport: src/components/LineChart/index.ts
publicExport: src/index.ts
storybook: src/stories/LineChart.stories.tsx
figmaComponent: Chart Lines
figmaNodeId: 5167:2230
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=5167-2230
codeConnect: src/components/LineChart/LineChart.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { LineChart } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<LineChart data={[{ name: "Январь", primary: 12, secondary: 8 }, { name: "Февраль", primary: 18, secondary: 14 }]} series={[{ dataKey: "primary", label: "Основной" }, { dataKey: "secondary", label: "Дополнительный" }]} />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/LineChart/LineChart.tsx](LineChart.tsx) |
| Props / shared types | [src/components/LineChart/LineChart.types.ts](LineChart.types.ts) |
| Props / shared types | [src/shared/Chart/types.ts](../../shared/Chart/types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/LineChart.stories.tsx](../../stories/LineChart.stories.tsx) |
| Code Connect | [src/components/LineChart/LineChart.figma.js](LineChart.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `lineType` | `CurveType \| undefined` | optional | См. типы и пример выше |
| `showDots` | `boolean \| undefined` | optional | См. типы и пример выше |
| `data` | `Record<string, unknown>[]` | required (зависит от union) | См. типы и пример выше |
| `series` | `ChartSeries<Record<string, unknown>>[]` | required (зависит от union) | См. типы и пример выше |
| `title` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Row-1` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Row-2` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Row-3` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Row-4` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Row-5` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Row-6` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Row-7` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-1` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-2` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-3` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-4` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-5` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-6` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-7` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-8` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-9` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-10` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-11` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Col-12` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Primary Info` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Secondary Name` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Secondary Labels` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Secondary Info` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Primary Name` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Primary Labels` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Property 1` | Variant2 | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: replace sample data/series with application data.
Figma Row/Col visibility and individual axis/legend label booleans are not
runtime props. Runtime derives axes and legend from data and series.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Публикация текущего template ещё не подтверждена.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
