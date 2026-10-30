# Popover

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Popover
package: borrom-ds-test
packageVersion: 0.0.72
import: import { Popover } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Popover/Popover.tsx
types: src/components/Popover/Popover.types.ts
localExport: src/components/Popover/index.ts
publicExport: src/index.ts
storybook: src/stories/Popover.stories.tsx
figmaComponent: Popover
figmaNodeId: 400:9376
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=400-9376
codeConnect: src/components/Popover/Popover.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Popover } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Popover>
      <Popover.Trigger>
        <button type="button">Open popover</button>
      </Popover.Trigger>
      <Popover.Content matchTriggerWidth={false}>
        <Popover.Surface>
          <div className="p-2"></div>
        </Popover.Surface>
      </Popover.Content>
    </Popover>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Popover/Popover.tsx](Popover.tsx) |
| Props / shared types | [src/components/Popover/Popover.types.ts](Popover.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Popover.stories.tsx](../../stories/Popover.stories.tsx) |
| Code Connect | [src/components/Popover/Popover.figma.js](Popover.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `open` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onOpenChange` | `((open: boolean) => void) \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotContent>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `open`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
