# BarMenu

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: BarMenu
package: borrom-ds-test
import: import { BarMenu } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/BarMenu/BarMenu.tsx
types: src/components/BarMenu/BarMenu.types.ts
localExport: src/components/BarMenu/index.ts
publicExport: src/index.ts
storybook: null
figmaComponent: bottomBar
figmaNodeId: 4423:5773
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4423-5773
codeConnect: src/components/BarMenu/BarMenu.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { BarMenu } from "borrom-ds-test";
import { Home, Search, Settings, User } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<BarMenu
      value="home"
      onSelect={() => {}}
      items={[
  { id: "home", icon: Home, label: "Главная" },
  { id: "search", icon: Search, label: "Поиск" },
  { id: "profile", icon: User, label: "Профиль" },
  { id: "settings", icon: Settings, label: "Настройки" },
]}
    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/BarMenu/BarMenu.tsx](BarMenu.tsx) |
| Props / shared types | [src/components/BarMenu/BarMenu.types.ts](BarMenu.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Code Connect | [src/components/BarMenu/BarMenu.figma.js](BarMenu.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `items` | `BarMenuItem[]` | required (зависит от union) | См. типы и пример выше |
| `value` | `string \| undefined` | optional | См. типы и пример выше |
| `onSelect` | `(value: string) => void` | required (зависит от union) | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotlistItembottomBar>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Menu` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotlistItembottomBar>2` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Property 1` | Default | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma bottomBar stores items in slots. Runtime uses a
data-driven items array; replace the sample navigation with application data.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
