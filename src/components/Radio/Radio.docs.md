# Radio

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Radio
package: borrom-ds-test
import: import { Radio } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Radio/Radio.tsx
types: src/components/Radio/Radio.types.ts
localExport: src/components/Radio/index.ts
publicExport: src/index.ts
storybook: src/stories/Radio.stories.tsx
figmaComponent: Radio-button
figmaNodeId: 1425:3260
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1425-3260
codeConnect: src/components/Radio/Radio.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Radio } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Radio
      size="xs"



    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Radio/Radio.tsx](Radio.tsx) |
| Props / shared types | [src/components/Radio/Radio.types.ts](Radio.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Radio.stories.tsx](../../stories/Radio.stories.tsx) |
| Code Connect | [src/components/Radio/Radio.figma.js](Radio.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `textTitle` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Title` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Disable, Selected | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Checked` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Disable` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma has both Checked/Disable and duplicated State values.
Runtime expects checked/disabled props only.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
