# FilterListPanel

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: FilterListPanel
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { FilterListPanel } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/FilterList/ui/FilterListPanel.tsx
types: src/components/FilterList/FilterList.types.ts
localExport: src/components/FilterList/ui/index.ts
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
import { FilterListPanel } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <FilterListPanel value={[]} onApply={() => {}} />;
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/FilterList/ui/FilterListPanel.tsx](FilterListPanel.tsx) |
| Props / shared types | [src/components/FilterList/FilterList.types.ts](../FilterList.types.ts) |
| Public export | [src/index.ts](../../../index.ts) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `value` | `T[]` | required (зависит от union) | См. типы и пример выше |
| `onApply` | `(value: T[]) => void` | required (зависит от union) | См. типы и пример выше |
| `options` | `FilterListOption<T>[] \| undefined` | optional | См. типы и пример выше |
| `groups` | `FilterListGroup<T>[] \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `width` | `number \| undefined` | optional | См. типы и пример выше |
| `searchPlaceholder` | `string \| undefined` | optional | См. типы и пример выше |
| `showSearch` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showSelectAll` | `boolean \| undefined` | optional | См. типы и пример выше |
| `emptyMessage` | `string \| undefined` | optional | См. типы и пример выше |
| `getSearchText` | `((option: FilterListOption<T>) => string) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

## Supported states

- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
