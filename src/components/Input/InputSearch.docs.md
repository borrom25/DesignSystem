# Search / Autocomplete — сохранённая ссылка

Figma component `18:2407` теперь сопоставлен с публичным `SearchAutocomplete`, реализованным в `src/components/SearchAutocomplete/SearchAutocomplete.tsx`.

Актуальные props, пример и ограничения находятся в [SearchAutocomplete.docs.md](../SearchAutocomplete/SearchAutocomplete.docs.md).

Существующий путь [InputSearch.figma.js](./InputSearch.figma.js) сохранён для прежних ссылок Figma. Его `source`, `component` и публичный import указывают на `SearchAutocomplete`. Файл Figma не изменялся.

## Temporary mappings / assumptions

Figma Size и Counter не имеют прямого соответствия в публичном SearchAutocomplete API. Размер и иконка задаются самим runtime; mapping не добавляет несуществующие props.
