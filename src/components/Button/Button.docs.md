# Button

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Button
package: borrom-ds-test
import: import { Button } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Button/Button.tsx
types: src/components/Button/Button.types.ts
localExport: src/components/Button/index.ts
publicExport: src/index.ts
storybook: src/stories/Button.stories.tsx
figmaComponent: Button / Main
figmaNodeId: 19105:18
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19105-18
codeConnect: src/components/Button/Button.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Button } from "borrom-ds-test";
import { Check } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Button
          type="fill"
          color="brand"
          size="xs"





        >
          Пример
        </Button>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Button/Button.tsx](Button.tsx) |
| Props / shared types | [src/components/Button/Button.types.ts](Button.types.ts) |
| Props / shared types | [src/types/polymorphic.ts](../../types/polymorphic.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Button.stories.tsx](../../stories/Button.stories.tsx) |
| Code Connect | [src/components/Button/Button.figma.js](Button.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `color` | `"brand" \| "danger" \| "positive" \| "action" \| "warning" \| "info" \| "inverse" \| "contrastDark" \| "contrastLight" \| "generic" \| undefined` | optional | См. типы и пример выше |
| `type` | `Type \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `ref` | `Ref<HTMLButtonElement> \| undefined` | optional | См. типы и пример выше |
| `scaling` | `boolean \| undefined` | optional | См. типы и пример выше |
| `asChild` | `true` | required (зависит от union) | См. типы и пример выше |
| `htmlType` | `HtmlType \| undefined` | optional | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `iconRight` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `count` | `number \| undefined` | optional | См. типы и пример выше |
| `counterColor` | `CounterVariant \| undefined` | optional | См. типы и пример выше |
| `loading` | `boolean \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `iconOnly` | `undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Icon-left` | BOOLEAN | `iconLeft`; значения см. template |
| `Icon-right` | BOOLEAN | `iconRight`; значения см. template |
| `textButton` | TEXT | `children`; значения см. template |
| `Counter` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Fill, Outline, Ghost, Flat | `type`; значения см. template |
| `Color` | Brand, Secondary, Danger, Positive, Action, Warning, Info, contrastDark, contrastLight, Generic | `color`; значения см. template |
| `State` | Default, Hover, Loader, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Loader` | Off, On | `loading`; значения см. template |
| `iconOnly` | Off, On | `iconOnly`; значения см. template |
| `Disable` | Off, On | `disabled`; значения см. template |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `loading`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: icon-only variants reuse the nested Icon-left instance.
Temporary mapping: use a Lucide fallback when the nested icon is unconnected.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Публикация текущего template ещё не подтверждена.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
