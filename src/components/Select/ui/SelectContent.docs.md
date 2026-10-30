# SelectContent

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: SelectContent
package: borrom-ds-test
import: import { SelectContent } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Select/ui/SelectContent.tsx
types: src/shared/Select/types/base.ts
localExport: src/components/Select/ui/index.ts
publicExport: src/index.ts
storybook: null
figmaComponent: null
figmaNodeId: null
figmaUrl: null
codeConnect: null
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: no confirmed mapping
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { SelectContent } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <SelectContent  />;
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Select/ui/SelectContent.tsx](SelectContent.tsx) |
| Props / shared types | [src/shared/Select/types/base.ts](../../../shared/Select/types/base.ts) |
| Props / shared types | [src/components/Select/types/index.ts](../types/index.ts) |
| Public export | [src/index.ts](../../../index.ts) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `matchTriggerWidth` | `boolean \| undefined` | optional | См. типы и пример выше |
| `maxHeight` | `number \| "available" \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `onScrollEnd` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `scrollEndOffset` | `number \| undefined` | optional | См. типы и пример выше |
| `side` | `"top" \| "bottom" \| "left" \| "right" \| undefined` | optional | См. типы и пример выше |
| `sideOffset` | `number \| undefined` | optional | См. типы и пример выше |
| `align` | `"start" \| "center" \| "end" \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
