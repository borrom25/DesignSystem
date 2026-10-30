# Tag

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Tag
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { Tag } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Tag/Tag.tsx
types: src/components/Tag/Tag.types.ts
localExport: src/components/Tag/index.ts
publicExport: src/index.ts
storybook: src/stories/Tag.stories.tsx
figmaComponent: Tag
figmaNodeId: 21672:239
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21672-239
codeConnect: src/components/Tag/Tag.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Tag } from "borrom-ds-test";
import { Check } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Tag
      size="xs"


      avatar={{
        src: "https://api.dicebear.com/7.x/avataaars/svg?seed=tag-avatar",
        alt: "Avatar"
      }}


      onClose={() => {}}
    >
      Пример
    </Tag>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Tag/Tag.tsx](Tag.tsx) |
| Props / shared types | [src/components/Tag/Tag.types.ts](Tag.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Tag.stories.tsx](../../stories/Tag.stories.tsx) |
| Code Connect | [src/components/Tag/Tag.figma.js](Tag.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `avatar` | `TagAvatarProps \| undefined` | optional | См. типы и пример выше |
| `leftContent` | `ReactNode` | optional | См. типы и пример выше |
| `onClose` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `↳ Text` | TEXT | `children`; значения см. template |
| `Icon-left` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Instance` | INSTANCE_SWAP | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Avatar` | On, Off | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Error` | Off | `error`; значения см. template |
| `Disable` | Off, On | `disabled`; значения см. template |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: instance swap currently maps to a stable icon fallback.

Temporary mapping: Tag API has no explicit disabled prop.
Disable=On maps to non-interactive tag by omitting onClose handler.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
