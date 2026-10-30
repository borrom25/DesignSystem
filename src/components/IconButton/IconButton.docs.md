# IconButton

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: IconButton
package: borrom-ds-test
import: import { IconButton } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/IconButton/IconButton.tsx
types: src/components/IconButton/IconButton.types.ts
localExport: src/components/IconButton/index.ts
publicExport: src/index.ts
storybook: src/stories/IconButton.stories.tsx
figmaComponent: Icon-button
figmaNodeId: 19405:2038
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19405-2038
codeConnect: src/components/IconButton/IconButton.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { IconButton } from "borrom-ds-test";
import { X } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<IconButton
      icon={X}
      type="ghost"
      color="inverse"
      size="xs"
      aria-label="Icon button"
      disabled

    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/IconButton/IconButton.tsx](IconButton.tsx) |
| Props / shared types | [src/components/IconButton/IconButton.types.ts](IconButton.types.ts) |
| Props / shared types | [src/types/polymorphic.ts](../../types/polymorphic.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/IconButton.stories.tsx](../../stories/IconButton.stories.tsx) |
| Code Connect | [src/components/IconButton/IconButton.figma.js](IconButton.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `color` | `"brand" \| "danger" \| "positive" \| "action" \| "warning" \| "info" \| "inverse" \| undefined` | optional | См. типы и пример выше |
| `type` | `IconButtonType \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `iconSize` | `number \| undefined` | optional | См. типы и пример выше |
| `rounded` | `boolean \| undefined` | optional | См. типы и пример выше |
| `ref` | `Ref<HTMLButtonElement> \| undefined` | optional | См. типы и пример выше |
| `scaling` | `boolean \| undefined` | optional | См. типы и пример выше |
| `asChild` | `true` | required (зависит от union) | См. типы и пример выше |
| `icon` | `LucideIcon` | required (зависит от union) | См. типы и пример выше |
| `htmlType` | `"button" \| "submit" \| "reset" \| undefined` | optional | См. типы и пример выше |
| `count` | `number \| undefined` | optional | См. типы и пример выше |
| `showBadge` | `boolean \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Badge` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Ghost, Flat, Icon | `type`; значения см. template |
| `Color` | Inverse, Brand, Danger, Positive, Action, Warning, Info | `color`; значения см. template |
| `State` | Default, Hover, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Disable` | On, Off | `disabled`; значения см. template |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
