# Pagination

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Pagination
package: borrom-ds-test
import: import { Pagination } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Pagination/Pagination.tsx
types: src/components/Pagination/Pagination.types.ts
localExport: src/components/Pagination/index.ts
publicExport: src/index.ts
storybook: src/stories/Pagination.stories.tsx
figmaComponent: Pagination
figmaNodeId: 1595:5950
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1595-5950
codeConnect: src/components/Pagination/Pagination.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Pagination } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Pagination
      className=""
      currentPage={1}
      totalPages={6}
      onPageChange={() => {}}
      showFirstLast={false}
      showPageNumbers={false}
      showPageInput={false}
      prevText=""
      nextText=""
      pageInputPlaceholder="Page #"
      size="sm"
      type="fill"
    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Pagination/Pagination.tsx](Pagination.tsx) |
| Props / shared types | [src/components/Pagination/Pagination.types.ts](Pagination.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Pagination.stories.tsx](../../stories/Pagination.stories.tsx) |
| Code Connect | [src/components/Pagination/Pagination.figma.js](Pagination.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `currentPage` | `number` | required (зависит от union) | См. типы и пример выше |
| `totalPages` | `number` | required (зависит от union) | См. типы и пример выше |
| `onPageChange` | `(page: number) => void` | required (зависит от union) | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `type` | `TabType \| undefined` | optional | См. типы и пример выше |
| `showFirstLast` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showPageNumbers` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showPageInput` | `boolean \| undefined` | optional | См. типы и пример выше |
| `prevText` | `string \| undefined` | optional | См. типы и пример выше |
| `nextText` | `string \| undefined` | optional | См. типы и пример выше |
| `pageInputPlaceholder` | `string \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `siblingCount` | `number \| undefined` | optional | См. типы и пример выше |
| `inputDebounceDelay` | `number \| undefined` | optional | См. типы и пример выше |
| `forwardOnly` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `endPage` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Gap into page` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `rightButtons` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `leftButtons` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Pages` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textPrevious` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textNext` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<Slot>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Clear, Generic, Button only | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma has separate leftButtons/rightButtons toggles.
Runtime API does not support hiding entire left or right groups independently.

Temporary mapping: "Generic" in Figma includes a wrapper surface.
Runtime API has no dedicated wrapper variant, so we map it via className.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
