# IconAvatar

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: IconAvatar
package: borrom-ds-test
packageVersion: 0.0.72
import: import { IconAvatar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/IconAvatar/IconAvatar.tsx
types: src/components/IconAvatar/IconAvatar.types.ts
localExport: src/components/IconAvatar/index.ts
publicExport: src/index.ts
storybook: src/stories/IconAvatar.stories.tsx
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
import { IconAvatar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
import { Check } from "lucide-react";

export function Example() {
  return <IconAvatar size={1} icon={Check} />;
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/IconAvatar/IconAvatar.tsx](IconAvatar.tsx) |
| Props / shared types | [src/components/IconAvatar/IconAvatar.types.ts](IconAvatar.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/IconAvatar.stories.tsx](../../stories/IconAvatar.stories.tsx) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `number` | required (зависит от union) | См. типы и пример выше |
| `icon` | `LucideIcon` | required (зависит от union) | См. типы и пример выше |
| `borderVariant` | `IconAvatarBorderVariant \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
