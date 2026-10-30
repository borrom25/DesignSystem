# HeaderInside

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: HeaderInside
package: borrom-ds-test
import: import { HeaderInside } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/HeaderInside/HeaderInside.tsx
types: src/components/HeaderInside/HeaderInside.types.ts
localExport: src/components/HeaderInside/index.ts
publicExport: src/index.ts
storybook: src/stories/HeaderInside.stories.tsx
figmaComponent: Header / insidePage
figmaNodeId: 658:11298
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=658-11298
codeConnect: src/components/HeaderInside/HeaderInside.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { HeaderInside, TabsOverflow } from "borrom-ds-test";
import { Settings } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<HeaderInside
      title="Пример"


      showActionButton={false}
      showNotification
      onBackClick={() => {}}
      onNotificationClick={() => {}}

    >

    </HeaderInside>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/HeaderInside/HeaderInside.tsx](HeaderInside.tsx) |
| Props / shared types | [src/components/HeaderInside/HeaderInside.types.ts](HeaderInside.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/HeaderInside.stories.tsx](../../stories/HeaderInside.stories.tsx) |
| Code Connect | [src/components/HeaderInside/HeaderInside.figma.js](HeaderInside.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `imageSrc` | `string \| undefined` | optional | См. типы и пример выше |
| `title` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `subtitle` | `ReactNode` | optional | См. типы и пример выше |
| `showActionButton` | `boolean \| undefined` | optional | См. типы и пример выше |
| `actionIcon` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `topSlot` | `ReactNode` | optional | См. типы и пример выше |
| `showNotification` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showThemeSwitcher` | `boolean \| undefined` | optional | См. типы и пример выше |
| `accountMenuProps` | `Omit<AccountMenuProps, "trigger"> \| undefined` | optional | См. типы и пример выше |
| `backButtonTestId` | `string \| undefined` | optional | См. типы и пример выше |
| `actionButtonTestId` | `string \| undefined` | optional | См. типы и пример выше |
| `notificationButtonTestId` | `string \| undefined` | optional | См. типы и пример выше |
| `onBackClick` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `onActionClick` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `onNotificationClick` | `(() => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `tabList` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ titlePage` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `imageSlot` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `subtitlePage` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ subtitlePage` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotImage>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotTablist>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotAction>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotTitle>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `titleButton` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Media` | Desktop, Mobile | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
