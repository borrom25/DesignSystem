import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const TABLE_FILTERS_STATE_PROPS: readonly PropDefinition[] = [
  {
    name: "values",
    type: "TSchema",
    description:
      "Текущие значения всех фильтров в удобной объектной форме по id колонок.",
  },
  {
    name: "setValue / getValue",
    type: "(id, value) => void / (id) => value",
    description:
      "Императивное чтение и обновление конкретного фильтра из внешнего UI.",
  },
  {
    name: "clearValue / clearAll",
    type: "(id) => void / () => void",
    description:
      "Сброс одного фильтра или всей схемы обратно к defaultValue/пустым значениям.",
  },
  {
    name: "hasValue / activeCount",
    type: "(id) => boolean / number",
    description:
      "Проверка, активен ли конкретный фильтр, и количество активных фильтров в целом.",
  },
  {
    name: "columnFiltersState",
    type: "ColumnFiltersState",
    description:
      "Формат TanStack Table. Полезен для ручной синхронизации с таблицей или сервером.",
  },
  {
    name: "onColumnFiltersChange",
    type: "OnChangeFn<ColumnFiltersState>",
    description:
      "Обработчик для controlled-режима, если состояние фильтров приходит извне.",
  },
];

export const TABLE_FILTER_KIND_PROPS: readonly PropDefinition[] = [
  {
    name: "columnHelper.columnFilter",
    type: "text filter",
    description:
      "Фильтр по строковому совпадению внутри одной колонки. Поддерживает placeholder и кастомные подписи Apply/Reset.",
  },
  {
    name: "columnHelper.list",
    type: "multi-select filter",
    description:
      "Выбор одного или нескольких значений из options/groups. Подходит для статусов, ролей, категорий и enum-полей.",
  },
  {
    name: "columnHelper.radio",
    type: "single-select filter",
    description:
      "Выбор одного значения радиокнопками из options/groups. Подходит, когда у колонки может быть только одно активное значение.",
  },
  {
    name: "columnHelper.date",
    type: "single date filter",
    description:
      "Фильтр по одной дате. Внутри использует Calendar и сравнивает строки по календарному дню.",
  },
  {
    name: "columnHelper.dateRange",
    type: "date interval filter",
    description:
      "Фильтр по диапазону дат для одной колонки. Хорошо подходит для дедлайнов, createdAt и plannedAt.",
  },
  {
    name: "columnHelper.numberRange",
    type: "number interval filter",
    description:
      "Фильтр по диапазону чисел. Поддерживает placeholder'ы и отдельные props для min/max inputs.",
  },
  {
    name: "dataTableFilter.custom",
    type: "custom renderer",
    description:
      "Полностью кастомный UI фильтра. Для него обычно нужно дополнительно определить собственный filterFn.",
  },
];

export const TABLE_FILTER_OPTION_PROPS: readonly PropDefinition[] = [
  {
    name: "defaultValue",
    type: "depends on filter kind",
    description:
      "Начальное значение фильтра. `useDataTableFilters` автоматически подхватывает его при создании схемы.",
  },
  {
    name: "popoverWidth / className",
    type: "number / string",
    description:
      "Базовые настройки контейнера фильтра: ширина popover и кастомные классы обертки.",
  },
  {
    name: "options / groups / searchable / selectAll",
    type: "list config",
    description:
      "Ключевые опции list-фильтра: набор значений, группировка, локальный поиск и массовый выбор. У radio-фильтра те же options, groups и searchable, без массового выбора.",
  },
  {
    name: "searchValue / onSearchChange / filterOptionsLocally",
    type: "string / (value: string) => void / boolean",
    description:
      'Серверный поиск опций в list/radio: `onSearchChange` вызывается при вводе, `searchValue` делает поиск controlled. Для ответа с API обычно ставьте `filterOptionsLocally: false`, иначе клиент дополнительно отфильтрует options по подстроке. По умолчанию локальная фильтрация включена. `Применить` / `Сбросить` очищают search в popover и вызывают `onSearchChange("")` — пустой query лучше не слать на API, а сбросить options к начальному набору. То же значение приходит при очистке поля крестиком.',
  },
  {
    name: "searchPlaceholder / applyLabel / resetLabel",
    type: "string | ReactNode",
    description:
      "Тексты для text/date/list-сценариев, когда важно сделать фильтр более предметным для пользователя.",
  },
  {
    name: "calendarProps",
    type: "Calendar props subset",
    description:
      "Тонкая настройка date-фильтра через пропсы календаря без переопределения значения и обработчиков.",
  },
  {
    name: "placeholderStart / placeholderEnd / dateRangeProps",
    type: "string / string / DateRange props subset",
    description:
      "Настройки dateRange-фильтра: плейсхолдеры и прокидывание ограниченного набора props в `DateRangeCompact`.",
  },
  {
    name: "minPlaceholder / maxPlaceholder / minInputProps / maxInputProps",
    type: "string / string / InputNumber props subset",
    description:
      "Настройки numberRange-фильтра: подписи и кастомизация полей минимального и максимального значения.",
  },
  {
    name: "onScrollEnd / scrollEndOffset / isLoading / hasMore",
    type: "() => void / number / boolean / boolean",
    description:
      "Ленивая подгрузка опций в list/radio popover. Работает вместе с серверным поиском через `onSearchChange`.",
  },
  {
    name: "render",
    type: "({ value, onChange, onClear }) => ReactNode",
    description:
      "Точка входа для custom-фильтра. Вы сами рисуете UI и управляете значением фильтра.",
  },
];

export const TABLE_FILTER_RULES_PROPS: readonly PropDefinition[] = [
  {
    name: "filter id",
    type: "column.id | accessorKey",
    description:
      "Ключ фильтра берется из `id` колонки или из `accessorKey`. По нему хранятся values и columnFiltersState.",
  },
  {
    name: "empty values",
    type: "'' | [] | undefined | empty range",
    description:
      "Пустые значения автоматически исключаются из `columnFiltersState`, поэтому reset и clear работают предсказуемо.",
  },
  {
    name: "default schema",
    type: "getDataTableFilterDefaultValues(columns)",
    description:
      "Если не передавать `defaultValues`, схема создается автоматически на основе колонок и их filter-конфигов.",
  },
  {
    name: "scopeKey",
    type: "string",
    description:
      "Если одинаковая таблица или один и тот же набор колонок живет в разных вкладках, передайте `scopeKey`, чтобы `values` и toolbar search не пересекались между инстансами.",
  },
  {
    name: "custom filterFn",
    type: "(row, columnId, filterValue) => boolean",
    description:
      "Для `custom`-фильтра UI задается через `render`, а сама логика фильтрации обычно прописывается отдельно в `filterFn`.",
  },
  {
    name: "remote options search",
    type: "onSearchChange + filterOptionsLocally: false",
    description:
      'Для поиска опций list/radio на беке передайте `onSearchChange` (и при необходимости controlled `searchValue`), обновляйте `options`/`groups` из ответа API и отключите локальную фильтрацию через `filterOptionsLocally: false`. Учитывайте, что Apply/Reset и clear поиска вызывают `onSearchChange("")`: пустую строку обычно не запрашивают с сервера.',
  },
];
