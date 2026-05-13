# InputSearch

Документация для связи Figma-компонента `Search/Autocomplete` с runtime-компонентом `Input`.

Этот файл предназначен именно для Figma-узла поиска:

```text
https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=18-2407
```

## Machine-readable summary

```yaml
component: Input
figmaAlias: InputSearch
package: borrom-ds-test
import: import { Input } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Input/Input.tsx
types: src/components/Input/Input.types.ts
localExport: src/components/Input/index.ts
publicExport: src/index.ts
storybook: src/stories/Input.stories.tsx
figmaComponent: Search/Autocomplete
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=18-2407
figmaNodeId: 18:2407
codeConnect: src/components/Input/InputSearch.figma.js
```

## Что прикреплять в Figma

- Для `🚧 Input` прикрепляй:
  `src/components/Input/Input.docs.md` или `src/components/Input/Input.figma.js`
- Для `Search/Autocomplete` прикрепляй:
  `src/components/Input/InputSearch.docs.md` или `src/components/Input/InputSearch.figma.js`

## Public usage

```tsx
import { Search } from "lucide-react";
import { Input } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Input type="search" size="sm" placeholder="Поиск" iconLeft={Search} />
  );
}
```

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `State=Disable` | `disabled` | `boolean` | `false` | Прямой mapping |
| `State=Selected` | `autoFocus` | `boolean` | `false` | Temporary mapping для стартового focus-состояния |
| `State=Filled` | `defaultValue` | `string` | - | Temporary mapping: демо текст `"Search query"` |
| `Hint` | `hint` | `string` | - | Temporary mapping: `"Start typing to search"` |
| nested `lucide/general/search` | `iconLeft` | `Search` | - | Импорт из `lucide-react` |

## Важное ограничение

`Search/Autocomplete` в текущем runtime — это **пресет на `Input`**, а не отдельный `Autocomplete` с выпадающим списком подсказок.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `State=Selected` | `autoFocus` | Нет персистентного selected-state prop | Управлять фокусом в интеграции |
| `State=Filled` | `defaultValue="Search query"` | Текст не вынесен в top-level property | Добавить text property в Figma |
| `Hint=true` | `hint="Start typing to search"` | Нет явного property для hint текста | Добавить отдельное hint text property |
| Autocomplete dropdown | не генерируется | Нет отдельного публичного runtime-компонента autocomplete | Делать композицию (`Input + Popover/List`) |
