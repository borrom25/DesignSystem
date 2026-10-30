# BarChartHorizontal

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: BarChartHorizontal
package: borrom-ds-test
import: import { BarChartHorizontal } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/BarChartHorizontal/BarChartHorizontal.tsx
types: src/components/BarChartHorizontal/BarChartHorizontal.types.ts
localExport: src/components/BarChartHorizontal/index.ts
publicExport: src/index.ts
storybook: src/stories/BarChartHorizontal.stories.tsx
figmaComponent: Chart Horizontal
figmaNodeId: 5118:1811
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=5118-1811
codeConnect: src/components/BarChartHorizontal/BarChartHorizontal.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { BarChartHorizontal } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<BarChartHorizontal data={[{ name: "Группа A", value: 32 }, { name: "Группа B", value: 26 }, { name: "Группа C", value: 20 }]} />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/BarChartHorizontal/BarChartHorizontal.tsx](BarChartHorizontal.tsx) |
| Props / shared types | [src/components/BarChartHorizontal/BarChartHorizontal.types.ts](BarChartHorizontal.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/BarChartHorizontal.stories.tsx](../../stories/BarChartHorizontal.stories.tsx) |
| Code Connect | [src/components/BarChartHorizontal/BarChartHorizontal.figma.js](BarChartHorizontal.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `data` | `BarChartHorizontalData[]` | required (зависит от union) | См. типы и пример выше |

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
| `Row-8` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Property 1` | Variant2 | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: runtime accepts data, not independently editable Figma
rows, columns and axis labels. Values below are example application data.
Row/Col/Primary Info booleans have no direct runtime props.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
