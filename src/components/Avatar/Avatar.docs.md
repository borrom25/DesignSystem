# Avatar

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Avatar
package: borrom-ds-test
import: import { Avatar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Avatar/Avatar.tsx
types: src/components/Avatar/Avatar.types.ts
localExport: src/components/Avatar/index.ts
publicExport: src/index.ts
storybook: src/stories/Avatar.stories.tsx
figmaComponent: Avatar
figmaNodeId: 21593:5299
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21593-5299
codeConnect: src/components/Avatar/Avatar.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Avatar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Avatar
      size={40}
      src="https://api.dicebear.com/7.x/avataaars/svg?seed=avatar"
      alt="Avatar"



    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Avatar/Avatar.tsx](Avatar.tsx) |
| Props / shared types | [src/components/Avatar/Avatar.types.ts](Avatar.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Avatar.stories.tsx](../../stories/Avatar.stories.tsx) |
| Code Connect | [src/components/Avatar/Avatar.figma.js](Avatar.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `number` | required (зависит от union) | См. типы и пример выше |
| `src` | `string \| null \| undefined` | optional | См. типы и пример выше |
| `alt` | `string \| undefined` | optional | См. типы и пример выше |
| `withBorder` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showEditBadge` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onEditBadgeClick` | `MouseEventHandler<HTMLButtonElement> \| undefined` | optional | См. типы и пример выше |
| `initials` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `icon` | INSTANCE_SWAP | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Initials` | TEXT | `initials`; значения см. template |
| `Editing` | BOOLEAN | `showEditBadge`; значения см. template |
| `Size` | 40, 44, 48, 56, 64, 72, 80, 88, 96, 120, 36, 32, 28 | `size`; значения см. template |
| `Content` | picture, icon, initials | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Stroke` | default, group, stroke | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
