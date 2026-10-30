# AppLayout

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: AppLayout
package: borrom-ds-test
import: import { AppLayout } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/AppLayout/AppLayout.tsx
types: src/components/AppLayout/AppLayout.types.ts
localExport: src/components/AppLayout/index.ts
publicExport: src/index.ts
storybook: src/stories/AppLayout.stories.tsx
figmaComponent: App / Desktop
figmaNodeId: 3124:20448
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3124-20448
codeConnect: src/components/AppLayout/AppLayout.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { AppLayout, Header, HeaderInside, Sidebar, InsideSidebar, TabsOverflow, BarMenu, Button, Color, Size, Type } from "borrom-ds-test";
import { BarChart3, FileText, Home, Plus, Settings, Users } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<AppLayout
      container="640"
      header={
      <Header title="Платформа" showMenuButton showNotification>
        <TabsOverflow
          items={[
  { label: "Tab", value: "tab-1" },
  { label: "Tab", value: "tab-2" },
  { label: "Tab", value: "tab-3" },
  { label: "Tab", value: "tab-4" },
]}
          value="tab-1"
          onValueChange={() => {}}
          size="sm"
          indicatorOffset={10}
        />
      </Header>
    }
      sidebar={
      <Sidebar
        title="Меню"
        activeItemId="home"
        items={[
  { id: "home", icon: Home, label: "Главная" },
  { id: "users", icon: Users, label: "Пользователи" },
  { id: "docs", icon: FileText, label: "Документы" },
  { id: "analytics", icon: BarChart3, label: "Аналитика" },
  { id: "settings", icon: Settings, label: "Настройки" },
]}
      />
    }
    >
      <div style={{ minHeight: 320 }}>Page content</div>
    </AppLayout>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/AppLayout/AppLayout.tsx](AppLayout.tsx) |
| Props / shared types | [src/components/AppLayout/AppLayout.types.ts](AppLayout.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/AppLayout.stories.tsx](../../stories/AppLayout.stories.tsx) |
| Code Connect | [src/components/AppLayout/AppLayout.figma.js](AppLayout.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `container` | `AppLayoutContainer \| undefined` | optional | См. типы и пример выше |
| `size` | `number \| undefined` | optional | См. типы и пример выше |
| `header` | `ReactNode` | optional | См. типы и пример выше |
| `sidebar` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `sideMenu` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Page` | Main, insidePage, Process | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 2 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
