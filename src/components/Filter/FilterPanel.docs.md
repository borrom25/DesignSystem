# FilterPanel

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: FilterPanel
package: borrom-ds-test
packageVersion: 0.0.72
import: import { FilterPanel } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Filter/FilterPanel.tsx
types: src/components/Filter/Filter.types.ts
localExport: src/components/Filter/index.ts
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
import { FilterPanel } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <FilterPanel  />;
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Filter/FilterPanel.tsx](FilterPanel.tsx) |
| Props / shared types | [src/components/Filter/Filter.types.ts](Filter.types.ts) |
| Public export | [src/index.ts](../../index.ts) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `width` | `number \| undefined` | optional | См. типы и пример выше |
| `bodyClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `footerClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `searchValue` | `string \| undefined` | optional | См. типы и пример выше |
| `onSearchChange` | `((value: string) => void) \| undefined` | optional | См. типы и пример выше |
| `onSearchClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `searchPlaceholder` | `string \| undefined` | optional | См. типы и пример выше |
| `searchSlot` | `ReactNode` | optional | См. типы и пример выше |
| `showSearch` | `boolean \| undefined` | optional | См. типы и пример выше |
| `maxBodyHeight` | `string \| number \| undefined` | optional | См. типы и пример выше |
| `onScrollEnd` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `scrollEndOffset` | `number \| undefined` | optional | См. типы и пример выше |
| `isLoading` | `boolean \| undefined` | optional | См. типы и пример выше |
| `hasMore` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onReset` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `onApply` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `resetLabel` | `ReactNode` | optional | См. типы и пример выше |
| `applyLabel` | `ReactNode` | optional | См. типы и пример выше |
| `resetDisabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `applyDisabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `resetButtonType` | `Type \| undefined` | optional | См. типы и пример выше |
| `resetButtonColor` | `Color \| undefined` | optional | См. типы и пример выше |
| `applyButtonType` | `Type \| undefined` | optional | См. типы и пример выше |
| `applyButtonColor` | `Color \| undefined` | optional | См. типы и пример выше |
| `actionButtonSize` | `Size \| undefined` | optional | См. типы и пример выше |
| `footer` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
