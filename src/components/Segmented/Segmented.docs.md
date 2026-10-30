# Segmented

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Segmented
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { Segmented } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Segmented/Segmented.tsx
types: src/components/Segmented/Segmented.types.ts
localExport: src/components/Segmented/index.ts
publicExport: src/index.ts
storybook: src/stories/Segmented.stories.tsx
figmaComponent: Segmented
figmaNodeId: 1777:27
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1777-27
codeConnect: src/components/Segmented/Segmented.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Segmented } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Segmented
      options={[
  { label: "Tab 1", value: "tab-1" },
  { label: "Tab 2", value: "tab-2" },
  { label: "Tab 3", value: "tab-3" },
]}
      defaultValue="tab-1"
      position="horizontal"
      shape="default"
      aria-label="Segmented"
    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Segmented/Segmented.tsx](Segmented.tsx) |
| Props / shared types | [src/components/Segmented/Segmented.types.ts](Segmented.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Segmented.stories.tsx](../../stories/Segmented.stories.tsx) |
| Code Connect | [src/components/Segmented/Segmented.figma.js](Segmented.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `value` | `T \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `T \| undefined` | optional | См. типы и пример выше |
| `onChange` | `((value: T) => void) \| undefined` | optional | См. типы и пример выше |
| `options` | `SegmentedOption<T>[]` | required (зависит от union) | См. типы и пример выше |
| `position` | `SegmentedPositions \| undefined` | optional | См. типы и пример выше |
| `shape` | `SegmentedShapeVariants \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Label` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textLabel` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotTabs>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `iconOnly` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Vertical iconOnly` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Vertical label` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: shape is not exposed in the current Figma properties.

Temporary mapping: Figma stores segment texts inside nested Tab instances,
but Segmented expects a runtime options array.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
