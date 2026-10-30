# Photo

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Photo
package: borrom-ds-test
import: import { Photo } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Photo/Photo.tsx
types: src/components/Photo/Photo.types.ts
localExport: src/components/Photo/index.ts
publicExport: src/index.ts
storybook: src/stories/Photo.stories.tsx
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
import { Photo } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <Photo open={false} items={[]} />;
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Photo/Photo.tsx](Photo.tsx) |
| Props / shared types | [src/components/Photo/Photo.types.ts](Photo.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Photo.stories.tsx](../../stories/Photo.stories.tsx) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `open` | `boolean` | required (зависит от union) | См. типы и пример выше |
| `onOpenChange` | `((open: boolean) => void) \| undefined` | optional | См. типы и пример выше |
| `items` | `PhotoItem[]` | required (зависит от union) | См. типы и пример выше |
| `index` | `number \| undefined` | optional | См. типы и пример выше |
| `defaultIndex` | `number \| undefined` | optional | См. типы и пример выше |
| `onIndexChange` | `((index: number) => void) \| undefined` | optional | См. типы и пример выше |
| `onDownload` | `((item: PhotoItem, index: number) => void) \| undefined` | optional | См. типы и пример выше |
| `onEdit` | `((item: PhotoItem, index: number) => void) \| undefined` | optional | См. типы и пример выше |
| `onDelete` | `((item: PhotoItem, index: number) => void) \| undefined` | optional | См. типы и пример выше |
| `onRotate` | `((item: PhotoItem, index: number, delta: 90 \| -90) => void \| PhotoItem \| Promise<void \| PhotoItem \| undefined>) \| undefined` | optional | См. типы и пример выше |
| `closeOnOverlayClick` | `boolean \| undefined` | optional | См. типы и пример выше |
| `closeOnEscape` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

## Supported states

- `open`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
