# Label

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Label
package: borrom-ds-test
packageVersion: 0.0.72
import: import { Label } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Label/Label.tsx
types: src/components/Label/Label.types.ts
localExport: src/components/Label/index.ts
publicExport: src/index.ts
storybook: src/stories/Label.stories.tsx
figmaComponent: Label
figmaNodeId: 21461:952
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21461-952
codeConnect: src/components/Label/Label.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Label } from "borrom-ds-test";
import { Check } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Label
          type="fill"
          color="brand"
          size="xs"



        >
          Пример
        </Label>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Label/Label.tsx](Label.tsx) |
| Props / shared types | [src/components/Label/Label.types.ts](Label.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Label.stories.tsx](../../stories/Label.stories.tsx) |
| Code Connect | [src/components/Label/Label.figma.js](Label.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `onClick` | `(import("react").MouseEventHandler<HTMLSpanElement> & (() => void)) \| undefined` | optional | См. типы и пример выше |
| `color` | `LabelColor \| undefined` | optional | См. типы и пример выше |
| `type` | `LabelType \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `rounded` | `boolean \| undefined` | optional | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `iconRight` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `prefix` | `ReactNode` | optional | См. типы и пример выше |
| `suffix` | `ReactNode` | optional | См. типы и пример выше |
| `iconOnly` | `undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Icon-left` | BOOLEAN | `iconLeft`; значения см. template |
| `Icon-right` | BOOLEAN | `iconRight`; значения см. template |
| `Text` | TEXT | `children`; значения см. template |
| `Type` | Fill, Outline, Flat, Text | `type`; значения см. template |
| `Color` | Brand, Secondary, Danger, Positive, Action, Warning, Info, Disable, contrastDark, contrastLight | `color`; значения см. template |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `iconOnly` | Off, On | `iconOnly`; значения см. template |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: LabelColor does not include Disable, contrastDark,
contrastLight, or generic. Disabled is a state prop; contrast colors map
to inverse. Generic is not exposed by this Figma component.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
