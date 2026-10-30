# Accordion

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Accordion
package: borrom-ds-test
import: import { Accordion } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Accordion/Accordion.tsx
types: src/components/Accordion/Accordion.types.ts
localExport: src/components/Accordion/index.ts
publicExport: src/index.ts
storybook: src/stories/Accordion.stories.tsx
figmaComponent: accordeon
figmaNodeId: 1282:1912
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1282-1912
codeConnect: src/components/Accordion/Accordion.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Accordion, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Accordion
      title="Accordion"
      position="start"
      chevronPosition="none"
      defaultOpen
      subtitle="Пример"



    >
      Content
    </Accordion>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Accordion/Accordion.tsx](Accordion.tsx) |
| Props / shared types | [src/components/Accordion/Accordion.types.ts](Accordion.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Accordion.stories.tsx](../../stories/Accordion.stories.tsx) |
| Code Connect | [src/components/Accordion/Accordion.figma.js](Accordion.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `title` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `ReactNode` | optional | См. типы и пример выше |
| `titleProps` | `AccordionTextProps \| undefined` | optional | См. типы и пример выше |
| `subtitleProps` | `AccordionTextProps \| undefined` | optional | См. типы и пример выше |
| `headSlot` | `ReactElement<any, string \| import("react").JSXElementConstructor<any>> \| undefined` | optional | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `prefix` | `ReactNode` | optional | См. типы и пример выше |
| `position` | `AccordionPosition \| undefined` | optional | См. типы и пример выше |
| `chevronPosition` | `AccordionChevronPosition \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `defaultOpen` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `IconLeft` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ IconLeft` | INSTANCE_SWAP | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotContent>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotHead>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Chevron-left` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Chevron-right` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Order` | Start, Mid, End | `position`; значения см. template |
| `Open` | On, Off | `defaultOpen`; значения см. template |
| `State` | Default, Hover, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma Actions/<slotAction> is arbitrary slot content,
while runtime Accordion accepts one ReactElement in headSlot.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
