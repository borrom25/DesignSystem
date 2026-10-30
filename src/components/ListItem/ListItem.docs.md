# ListItem

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: ListItem
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { ListItem } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/ListItem/ListItem.tsx
types: src/types/polymorphic.ts
localExport: src/components/ListItem/index.ts
publicExport: src/index.ts
storybook: src/stories/ListItem.stories.tsx
figmaComponent: ListItem
figmaNodeId: 400:1335
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=400-1335
codeConnect: src/components/ListItem/ListItem.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { ListItem } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<ListItem
          title="Пример"
          size="xs"
          variant="default"







        />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/ListItem/ListItem.tsx](ListItem.tsx) |
| Props / shared types | [src/types/polymorphic.ts](../../types/polymorphic.ts) |
| Props / shared types | [src/components/ListItem/ListItem.types.ts](ListItem.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/ListItem.stories.tsx](../../stories/ListItem.stories.tsx) |
| Code Connect | [src/components/ListItem/ListItem.figma.js](ListItem.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `variant` | `ListItemVariant \| undefined` | optional | См. типы и пример выше |
| `selected` | `boolean \| undefined` | optional | См. типы и пример выше |
| `visualSelected` | `boolean \| undefined` | optional | См. типы и пример выше |
| `iconOnly` | `boolean \| undefined` | optional | См. типы и пример выше |
| `indeterminate` | `boolean \| undefined` | optional | См. типы и пример выше |
| `ref` | `Ref<HTMLButtonElement> \| undefined` | optional | См. типы и пример выше |
| `scaling` | `boolean \| undefined` | optional | См. типы и пример выше |
| `leading` | `undefined` | optional | См. типы и пример выше |
| `prefix` | `ReactNode` | optional | См. типы и пример выше |
| `suffix` | `ReactNode` | optional | См. типы и пример выше |
| `wrapText` | `boolean \| undefined` | optional | См. типы и пример выше |
| `asChild` | `true` | required (зависит от union) | См. типы и пример выше |
| `checkbox` | `boolean \| undefined` | optional | См. типы и пример выше |
| `radio` | `boolean \| undefined` | optional | См. типы и пример выше |
| `avatar` | `Omit<AvatarProps, "style" \| "size"> \| undefined` | optional | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `iconRight` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `hideSelectedOutline` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `↳ textTitle` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ textSubtitle` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Subtitle` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ textSuffix` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Avatar` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Suffix` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Counter` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Icon-right` | BOOLEAN | `iconRight`; значения см. template |
| `Actions-left` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ Action-left` | INSTANCE_SWAP | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Icon-left` | BOOLEAN | `iconLeft`; значения см. template |
| `↳  Flag` | INSTANCE_SWAP | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Flag` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotAction-right>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Action-right` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Selected, Hover, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `iconOnly` | Off, On | `iconOnly`; значения см. template |
| `Error` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Selected` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `selected`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma exposes Avatar as a visibility boolean, while the
current ListItem API needs concrete Avatar data.

Temporary mapping: Figma exposes only a left action slot. Runtime ListItem
supports the built-in checkbox behavior, not arbitrary action content.

Temporary mapping: subtitle, counter, and right action are present in Figma
but do not have public ListItem props yet.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
