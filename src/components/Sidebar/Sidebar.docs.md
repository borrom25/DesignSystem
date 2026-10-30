# Sidebar

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Sidebar
package: borrom-ds-test
packageVersion: 0.0.72
import: import { Sidebar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Sidebar/Sidebar.tsx
types: src/components/Sidebar/Sidebar.types.ts
localExport: src/components/Sidebar/index.ts
publicExport: src/index.ts
storybook: src/stories/Sidebar.stories.tsx
figmaComponent: sideMenu
figmaNodeId: 788:7497
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=788-7497
codeConnect: src/components/Sidebar/Sidebar.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Sidebar } from "borrom-ds-test";
import { BarChart3, Home, Plus, Settings } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Sidebar
      title="Меню"
      activeItemId="home"
      items={[
  { id: "home", icon: Home, label: "Главная" },
  { id: "analytics", icon: BarChart3, label: "Аналитика" },
  { id: "settings", icon: Settings, label: "Настройки" },
]}


    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Sidebar/Sidebar.tsx](Sidebar.tsx) |
| Props / shared types | [src/components/Sidebar/Sidebar.types.ts](Sidebar.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Sidebar.stories.tsx](../../stories/Sidebar.stories.tsx) |
| Code Connect | [src/components/Sidebar/Sidebar.figma.js](Sidebar.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `defaultCollapsed` | `boolean \| undefined` | optional | См. типы и пример выше |
| `title` | `ReactNode` | optional | См. типы и пример выше |
| `items` | `SidebarItem[]` | required (зависит от union) | См. типы и пример выше |
| `action` | `SidebarAction \| undefined` | optional | См. типы и пример выше |
| `activeItemId` | `string \| undefined` | optional | См. типы и пример выше |
| `type` | `SidebarTypes \| undefined` | optional | См. типы и пример выше |
| `onItemClick` | `((item: string) => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotBody>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotBody` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `bottomSlotAction` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotAction>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Media` | Desktop, Mobile | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Close` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma sideMenu has a visual <slotBody>, while the
runtime Sidebar API expects structured SidebarItem[] data.

Temporary mapping: bottomSlotAction exposes only visibility on the root
component, so Code Connect emits a placeholder action.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
