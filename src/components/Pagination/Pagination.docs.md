# Pagination

Документация для связи Figma-компонента `Pagination` с runtime-компонентом `Pagination`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Pagination.figma.js`, если нужен Code Connect.

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
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1595-5950
figmaNodeId: 1595:5950
codeConnect: src/components/Pagination/Pagination.figma.js
```

## Public usage

```tsx
import { Pagination } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
import { useState } from "react";

export function Example() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      currentPage={page}
      totalPages={50}
      onPageChange={setPage}
      showFirstLast
      showPageNumbers
      showPageInput
      prevText="Назад"
      nextText="Далее"
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Pagination/Pagination.tsx` |
| Public props | `src/components/Pagination/Pagination.types.ts` |
| Utilities | `src/components/Pagination/Pagination.utils.ts` |
| Local export | `src/components/Pagination/index.ts` |
| Styles entry | `src/components/Pagination/styles/index.ts` |
| Storybook | `src/stories/Pagination.stories.tsx` |
| Code Connect | `src/components/Pagination/Pagination.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `State` | `Clear` | `showFirstLast`, `showPageNumbers`, `showPageInput` | `true`, `true`, from `gapIntoPage` | `true,true,false` | Базовый вариант без контейнера-обертки |
| `State` | `Generic` | `className` + те же props | tokenized wrapper class + базовая пагинация | - | Temporary mapping: обертка в Figma не имеет отдельного runtime prop |
| `State` | `Button only` | `showFirstLast`, `showPageNumbers`, `showPageInput`, `prevText`, `nextText` | `false`, `false`, `false`, text values | - | Режим карточек previous/next маппится на упрощенный режим кнопок |
| `endPage` | `true/false` | `totalPages` | `50` / `6` | required | Temporary mapping: значение последней страницы выводится из boolean |
| `gapIntoPage` | `true/false` | `showPageInput` | `boolean` | `false` | Отображение поля перехода на страницу |
| `pages` | `true/false` | `showPageNumbers` | `boolean` | `true` | Управление блоком нумерации |
| `textPrevious` | text | `prevText` | `string` | - | Текст кнопки "назад" |
| `textNext` | text | `nextText` | `string` | - | Текст кнопки "вперед" |
| `leftButtons` | `true/false` | `showFirstLast` + `prevText` | `boolean` + text/empty | - | Temporary mapping: скрыть всю левую группу one-to-one нельзя |
| `rightButtons` | `true/false` | `showFirstLast` + `nextText` | `boolean` + text/empty | - | Temporary mapping: скрыть всю правую группу one-to-one нельзя |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default (full navigation) | Yes | `showFirstLast showPageNumbers` |
| With page input | Yes | `showPageInput` |
| Button-only simplified | Partial | `showFirstLast={false} showPageNumbers={false}` |
| Generic boxed wrapper | Partial | `className` wrapper classes |
| Disabled | Yes | `disabled` |
| Few pages without ellipsis | Yes | small `totalPages` |
| Large pages with ellipsis | Yes | `totalPages` больше окна видимости |

## Design matching notes

- `Pagination` собран через `Tab` и `Input`, поэтому визуальные режимы зависят от `type`, `size` и boolean-флагов показа секций.
- Логика страниц и `...` формируется в `generatePaginationItems` (`Pagination.utils.ts`) и зависит от `currentPage`, `totalPages`, `siblingCount`.
- Переход через инпут поддерживает debounce (`inputDebounceDelay`) и Enter/blur обработчики.
- Вариант Figma `Button only` визуально ближе к layout-обертке из двух карточек; runtime дает близкий сценарий через отключение блока страниц/инпута.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `State=Generic` wrapper | `className` с border/background/padding | В API нет отдельного пропса режима контейнера | Добавить `variant` для wrapper, если это нужно как стабильный паттерн |
| `leftButtons/rightButtons=false` | `showFirstLast={false}` + пустой `prevText`/`nextText` | Runtime не умеет скрывать по отдельности левую/правую группу полностью | При необходимости добавить `showPrev` / `showNext` / `showPrevGroup` / `showNextGroup` |
| `endPage` boolean | `totalPages=50` или `6` | В Figma хранится факт наличия финальной страницы, не само число | Добавить numeric property в Figma для прямого маппинга |

## Examples

### Full navigation

```tsx
<Pagination
  currentPage={1}
  totalPages={50}
  onPageChange={() => {}}
  showFirstLast
  showPageNumbers
  showPageInput
  prevText="Назад"
  nextText="Далее"
/>
```

### Button-only

```tsx
<Pagination
  currentPage={3}
  totalPages={10}
  onPageChange={() => {}}
  showFirstLast={false}
  showPageNumbers={false}
  showPageInput={false}
  prevText="Previous page"
  nextText="Next page"
/>
```

### Disabled

```tsx
<Pagination
  currentPage={2}
  totalPages={12}
  onPageChange={() => {}}
  disabled
/>
```
