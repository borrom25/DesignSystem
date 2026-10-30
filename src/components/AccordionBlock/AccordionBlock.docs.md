# AccordionBlock

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: AccordionBlock
package: borrom-ds-test
import: import { AccordionBlock } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/AccordionBlock/AccordionBlock.tsx
types: src/components/AccordionBlock/AccordionBlock.types.ts
localExport: src/components/AccordionBlock/index.ts
publicExport: src/index.ts
storybook: null
figmaComponent: accordionBlock
figmaNodeId: 10439:5012
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=10439-5012
codeConnect: src/components/AccordionBlock/AccordionBlock.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { AccordionBlock } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<AccordionBlock title="Пример" description="Пример" size="xs" defaultOpen={true}  ></AccordionBlock>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/AccordionBlock/AccordionBlock.tsx](AccordionBlock.tsx) |
| Props / shared types | [src/components/AccordionBlock/AccordionBlock.types.ts](AccordionBlock.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Code Connect | [src/components/AccordionBlock/AccordionBlock.figma.js](AccordionBlock.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `title` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `description` | `ReactNode` | optional | См. типы и пример выше |
| `progress` | `number \| undefined` | optional | См. типы и пример выше |
| `labelPosition` | `ProgressBarLabelPosition \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `headSlot` | `ReactNode` | optional | См. типы и пример выше |
| `titleProps` | `AccordionTextProps \| undefined` | optional | См. типы и пример выше |
| `subtitleProps` | `AccordionTextProps \| undefined` | optional | См. типы и пример выше |
| `variant` | `BlockVariantType \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `defaultOpen` | `boolean \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotContent>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotHead>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Chevron-left` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Chevron-right` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `iconLeft` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ IconLeft` | INSTANCE_SWAP | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Open` | On, Off | `defaultOpen`; значения см. template |
| `State` | Default, Hover, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: runtime owns chevron placement and hover behavior.
Chevron-left, Chevron-right and iconLeft have no public presentation props.
The icon swap cannot be passed as a nonexistent AccordionBlock icon prop.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Публикация текущего template ещё не подтверждена.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
