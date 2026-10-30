# Tooltip

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Tooltip
package: borrom-ds-test
import: import { Tooltip } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Tooltip/Tooltip.tsx
types: src/components/Tooltip/Tooltip.types.ts
localExport: src/components/Tooltip/index.ts
publicExport: src/index.ts
storybook: src/stories/Tooltip.stories.tsx
figmaComponent: Tooltip
figmaNodeId: 2277:2530
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=2277-2530
codeConnect: src/components/Tooltip/Tooltip.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Tooltip, Button } from "borrom-ds-test";
import { Info } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Tooltip>
      <Tooltip.Trigger>
        <Button size="sm">Trigger</Button>
      </Tooltip.Trigger>
      <Tooltip.Content
        title="Title"
        subTitle="Subtitle"
        side="bottom"
        align="center"


      />
    </Tooltip>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Tooltip/Tooltip.tsx](Tooltip.tsx) |
| Props / shared types | [src/components/Tooltip/Tooltip.types.ts](Tooltip.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Tooltip.stories.tsx](../../stories/Tooltip.stories.tsx) |
| Code Connect | [src/components/Tooltip/Tooltip.figma.js](Tooltip.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `open` | `boolean \| undefined` | optional | См. типы и пример выше |
| `defaultOpen` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onOpenChange` | `((open: boolean) => void) \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `↳ Icon` | INSTANCE_SWAP | Композиция / нет прямого prop; см. template и Temporary mappings |
| `icon` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotAction>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Action` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Direction` | Bot, Top, Left, Right | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Position` | Centre, Left, Right, Bot, Top | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `open`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Публикация текущего template ещё не подтверждена.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
