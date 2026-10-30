# UserItem

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: UserItem
package: borrom-ds-test
import: import { UserItem } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/UserItem/UserItem.tsx
types: src/components/UserItem/UserItem.types.ts
localExport: src/components/UserItem/index.ts
publicExport: src/index.ts
storybook: src/stories/UserItem.stories.tsx
figmaComponent: User Item
figmaNodeId: 1352:28686
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1352-28686
codeConnect: src/components/UserItem/UserItem.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { UserItem, Label } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<UserItem size="md" avatarPosition="top">

      <UserItem.Content>
        <UserItem.Title>Пример</UserItem.Title>


      </UserItem.Content>
    </UserItem>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/UserItem/UserItem.tsx](UserItem.tsx) |
| Props / shared types | [src/components/UserItem/UserItem.types.ts](UserItem.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/UserItem.stories.tsx](../../stories/UserItem.stories.tsx) |
| Code Connect | [src/components/UserItem/UserItem.figma.js](UserItem.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `avatarPosition` | `UserItemAvatarPosition \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `label` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Caption` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Avatar` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotCaptio>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotLabel>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Md, Sm, Xs | `size`; значения см. template |
| `positionAvatar` | Top, Left, Center | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: title is nested text rather than a root TEXT property.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
