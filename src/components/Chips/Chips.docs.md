# Chips

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Chips
package: borrom-ds-test
packageVersion: 0.0.72
import: import { Chips } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Chips/Chips.tsx
types: src/types/polymorphic.ts
localExport: src/components/Chips/index.ts
publicExport: src/index.ts
storybook: src/stories/Chips.stories.tsx
figmaComponent: Chips
figmaNodeId: 21552:2622
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21552-2622
codeConnect: src/components/Chips/Chips.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Chips } from "borrom-ds-test";
import { Check, Plus, X } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Chips
          type="fill"
          size="xs"





        >
          Пример
        </Chips>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Chips/Chips.tsx](Chips.tsx) |
| Props / shared types | [src/types/polymorphic.ts](../../types/polymorphic.ts) |
| Props / shared types | [src/components/Chips/Chips.types.ts](Chips.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Chips.stories.tsx](../../stories/Chips.stories.tsx) |
| Code Connect | [src/components/Chips/Chips.figma.js](Chips.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `type` | `ChipsAppearance \| undefined` | optional | См. типы и пример выше |
| `selected` | `boolean \| undefined` | optional | См. типы и пример выше |
| `scaling` | `boolean \| undefined` | optional | См. типы и пример выше |
| `asChild` | `true` | required (зависит от union) | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `iconRight` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `count` | `number \| undefined` | optional | См. типы и пример выше |
| `iconOnly` | `undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Icon-left` | BOOLEAN | `iconLeft`; значения см. template |
| `↳ textChips` | TEXT | `children`; значения см. template |
| `Icon-right` | BOOLEAN | `iconRight`; значения см. template |
| `Counter` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Fill, Outline | `type`; значения см. template |
| `State` | Default, Hover, Selected, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Selected` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `iconOnly` | Off, On | `iconOnly`; значения см. template |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `selected`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
