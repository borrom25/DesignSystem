# Header

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Header
package: borrom-ds-test
import: import { Header } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Header/Header.tsx
types: src/components/Header/Header.types.ts
localExport: src/components/Header/index.ts
publicExport: src/index.ts
storybook: src/stories/Header.stories.tsx
figmaComponent: Header / mainPage
figmaNodeId: 621:3442
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=621-3442
codeConnect: src/components/Header/Header.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Header, TabsOverflow } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Header
      title="Платформа"
      showMenuButton
      showNotification
      onMenuClick={() => {}}
      onNotificationClick={() => {}}

    >

    </Header>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Header/Header.tsx](Header.tsx) |
| Props / shared types | [src/components/Header/Header.types.ts](Header.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Header.stories.tsx](../../stories/Header.stories.tsx) |
| Code Connect | [src/components/Header/Header.figma.js](Header.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `logo` | `ReactNode` | optional | См. типы и пример выше |
| `title` | `ReactNode` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `topSlot` | `ReactNode` | optional | См. типы и пример выше |
| `showMenuButton` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showNotification` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showThemeSwitcher` | `boolean \| undefined` | optional | Show the theme switcher between notifications and the account menu. |
| `menuButtonTestId` | `string \| undefined` | optional | См. типы и пример выше |
| `notificationButtonTestId` | `string \| undefined` | optional | См. типы и пример выше |
| `onMenuClick` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `onNotificationClick` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `menuItems` | `MenuItem[] \| undefined` | optional | См. типы и пример выше |
| `accountMenuProps` | `Omit<AccountMenuProps, "trigger"> \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `tabList` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotInfo` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotTablist>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotHead` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotAction>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Media` | Desktop, Mobile | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: slotInfo is a visibility toggle with no separate slot.

Temporary mapping:
Figma exposes info/action slots, while Header runtime has one children slot
and a constrained right action area: notification + AccountMenu.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Публикация текущего template ещё не подтверждена.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
