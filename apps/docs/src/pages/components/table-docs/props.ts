import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const TABLE_PROPS: readonly PropDefinition[] = [
  {
    name: "data",
    type: "TData[]",
    description: "Массив строк, который таблица отображает и обрабатывает.",
  },
  {
    name: "columns",
    type: "ColumnDef<TData>[]",
    description:
      "Описание колонок через `createDataTableColumnHelper` или совместимые ColumnDef.",
  },
  {
    name: "getRowId",
    type: "(row: TData, index: number) => string",
    description:
      "Стабильный идентификатор строки. Рекомендуется для выбора, редактирования и вложенных строк.",
  },
  {
    name: "filters / globalFilter / onGlobalFilterChange",
    type: "TableFiltersState / string / OnChangeFn<string>",
    description:
      "Подключение локальных фильтров и глобального поиска, обычно вместе с `useDataTableFilters`.",
  },
  {
    name: "loading / loadingState / emptyState",
    type: "boolean / ReactNode / ReactNode",
    description:
      "При `loading` без `loadingState` показывается скелетон строк с ширинами колонок. `loadingState` подменяет тело таблицы кастомным контентом. При пустых строках — «Нет данных для отображения» или `emptyState`. Шапка остаётся, таблица скроллится по X, заглушка держится по центру видимой области.",
  },
  {
    name: "showToolbar / toolbarProps",
    type: "boolean / DataTableToolbarProps",
    description:
      "Подключает встроенный тулбар с поиском, слотами и меню действий. `toolbarProps.actionsIcon` по умолчанию — шестерёнка; `null` убирает левую иконку кнопки действий. `toolbarProps.showResetFilters` (по умолчанию `true`) показывает кнопку «Сбросить фильтры»; передайте `false`, если сброс делает внешний UI.",
  },
  {
    name: "enableRowSelection / rowSelection / onRowSelectionChange",
    type: "boolean / RowSelectionState / OnChangeFn<RowSelectionState>",
    description:
      "Управление чекбоксами выбора строк и контролируемым состоянием выделения.",
  },
  {
    name: "stickyHeader / striped / bordered / compact / embedded",
    type: "boolean",
    description:
      "Основные визуальные режимы таблицы для экранов, карточек и встроенных сценариев.",
  },
  {
    name: "virtualized / rowHeight / overscan",
    type: "boolean / number / number",
    description:
      "Виртуализация длинных списков с управлением высотой строк и запасом рендера.",
  },
  {
    name: "hasMore / isFetchingMore / onLoadMore / onScrollEnd / loadMoreThreshold",
    type: "boolean / boolean / () => void / () => void / number",
    description:
      "Инструменты для infinite scroll. `onScrollEnd` срабатывает при достижении конца списка, а `onLoadMore` дополнительно помогает дозагружать данные, если `hasMore=true`.",
  },
  {
    name: "enableNestedRows / getSubRows / renderExpandedContent",
    type: "boolean / (row) => TData[] | undefined / ({ row, table }) => ReactNode",
    description:
      "Раскрытие иерархии данных или дополнительного контента внутри строки.",
  },
  {
    name: "editable / isCellEditable / onCellValueChange / cellEditor",
    type: "boolean / predicate / callback / renderer",
    description:
      "Включает inline-редактирование ячеек и кастомные редакторы значений.",
  },
  {
    name: "rowActions / popoverAction / footerSlot",
    type: "function / boolean | props / ReactNode",
    description:
      "Расширения для массовых действий, контекстных меню и нижнего слота таблицы.",
  },
];
