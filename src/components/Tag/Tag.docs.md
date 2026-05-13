# Tag

Документация для связи Figma-компонента `Tag` с runtime-компонентом `Tag`.

```text
src/components/Tag/Tag.docs.md
```

Парный Code Connect файл:

```text
src/components/Tag/Tag.figma.js
```

## Machine-readable summary

```yaml
component: Tag
package: borrom-ds-test
import: import { Tag } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Tag/Tag.tsx
types: src/components/Tag/Tag.types.ts
localExport: src/components/Tag/index.ts
publicExport: src/index.ts
storybook: src/stories/Tag.stories.tsx
figmaComponent: Tag
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21672-239
figmaNodeId: 21672:239
codeConnect: src/components/Tag/Tag.figma.js
```

## Public usage

```tsx
import { Tag } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Tag size="sm" onClose={() => {}}>
      Tag
    </Tag>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Tag/Tag.tsx` |
| Public props | `src/components/Tag/Tag.types.ts` |
| Local export | `src/components/Tag/index.ts` |
| Styles entry | `src/components/Tag/styles/index.ts` |
| Storybook | `src/stories/Tag.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Error` | `error` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `↳ Text` | `children` | `ReactNode` | - | Текст тега |
| `Icon-left` + `Instance` | `leftContent` | `ReactNode` | - | Temporary mapping через `Check` из `lucide-react` |
| `Avatar` | `avatar` | `TagAvatarProps` | - | `On` добавляет `avatar` |
| `Disable` | partial | - | `Off` | Нет отдельного `disabled` prop в API `Tag` |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | стандартный `<Tag />` |
| Error | Yes | `error` |
| With left icon | Yes | `leftContent` |
| With avatar | Yes | `avatar` |
| Disabled | Partial | через отсутствие `onClose`; визуальный disabled-state в API не выделен |

## Design matching notes

- `Tag` поддерживает два разных варианта leading content: `leftContent` (иконка/узел) и `avatar`.
- Кнопка закрытия появляется только при наличии `onClose`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Disable=On` | `onClose` не передается | В `TagProps` нет отдельного `disabled` prop | Добавить `disabled` в API, если нужен строгий визуальный disabled-state |
| `Instance` icon swap | `leftContent={<Check size={12} />}` | Нет гарантированного runtime mapping для произвольного instance swap | Добавить явный icon mapping при необходимости |
| `Avatar=On` | демо `avatar` с placeholder src | Figma avatar instance не дает прямого runtime payload для данных пользователя | Подставлять реальные avatar props на уровне интеграции |

## Examples

### Basic

```tsx
<Tag>Tag</Tag>
```

### With icon and close

```tsx
import { Check } from "lucide-react";

<Tag leftContent={<Check size={12} />} onClose={() => {}}>
  Tag
</Tag>;
```

### With avatar

```tsx
<Tag
  avatar={{
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=tag-avatar",
    alt: "Avatar",
  }}
>
  Tag
</Tag>
```
