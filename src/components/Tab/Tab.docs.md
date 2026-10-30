# Tab

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Tab
package: borrom-ds-test
import: import { Tab } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Tab/Tab.tsx
types: src/types/polymorphic.ts
localExport: src/components/Tab/index.ts
publicExport: src/index.ts
storybook: src/stories/Tab.stories.tsx
figmaComponent: Tab
figmaNodeId: 19446:1451
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19446-1451
codeConnect: src/components/Tab/Tab.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Tab } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Tab
      type="fill"
      size="xs"




    >
      Пример
    </Tab>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Tab/Tab.tsx](Tab.tsx) |
| Props / shared types | [src/types/polymorphic.ts](../../types/polymorphic.ts) |
| Props / shared types | [src/components/Tab/Tab.types.ts](Tab.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Tab.stories.tsx](../../stories/Tab.stories.tsx) |
| Code Connect | [src/components/Tab/Tab.figma.js](Tab.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `type` | `TabType \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `selected` | `boolean \| undefined` | optional | См. типы и пример выше |
| `scaling` | `boolean \| undefined` | optional | См. типы и пример выше |
| `asChild` | `true` | required (зависит от union) | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `count` | `number \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Icon-left` | BOOLEAN | `iconLeft`; значения см. template |
| `↳ textTab` | TEXT | `children`; значения см. template |
| `Counter` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Fill, Outline, Ghost | `type`; значения см. template |
| `State` | Default, Hover, Selected, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `iconOnly` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Selected` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `selected`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: without a connected icon, preserve an accessible label.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
