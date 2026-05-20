import type { HTMLAttributes, ReactNode } from "react";
import type {
  ColumnDef as TanStackColumnDef,
  Header,
  HeaderGroup,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  RowSelectionState,
  ExpandedState,
  ColumnResizeMode,
  OnChangeFn,
  Row,
  Table,
  TableOptions,
} from "@tanstack/react-table";
import type { ButtonDropItem } from "@/components/ButtonDrop/ButtonDrop.types";
import type {
  ColumnFilterConfig,
  FilterSchema,
  DataTableFiltersState,
} from "./DataTable.filter.types";
import type { DataTablePopoverActionProps } from "./DataTable.popoverAction.types";

export type StickyPosition = "left" | "right";

type DefaultColumnValue<TData> =
  TableOptions<TData>["columns"][number] extends TanStackColumnDef<
    TData,
    infer TValue
  >
    ? TValue
    : never;

export type ColumnDef<
  TData,
  TValue = DefaultColumnValue<TData>,
> = TanStackColumnDef<TData, TValue> & {
  sticky?: boolean | StickyPosition;
  filter?: ColumnFilterConfig<TValue>;
};

export type TableFiltersState<TSchema extends FilterSchema = FilterSchema> =
  DataTableFiltersState<TSchema> & {
    columnFiltersState?: ColumnFiltersState;
    onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
  };

export interface DataTableToolbarProps {
  topSlot?: ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  rowCount?: number;
  rowCountLabel?: ReactNode;
  rowCountValue?: ReactNode;
  actions?: ButtonDropItem[];
  actionsPlaceholder?: string;
  onActionChange?: (value: string) => void;
  middleSlot?: ReactNode;
  bottomSlot?: ReactNode;
  className?: string;
}

export interface TableProps<TData> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  data: TData[];
  columns: ColumnDef<TData>[];

  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;

  filters?: TableFiltersState<FilterSchema>;

  globalFilter?: string;
  onGlobalFilterChange?: OnChangeFn<string>;

  columnVisibility?: VisibilityState;
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;

  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  expanded?: ExpandedState;
  onExpandedChange?: OnChangeFn<ExpandedState>;

  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableColumnFilters?: boolean;
  enableGlobalFilter?: boolean;
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  enableMultiRowSelection?: boolean;

  manualSorting?: boolean;
  manualFiltering?: boolean;
  manualPagination?: boolean;
  enableColumnResizing?: boolean;
  columnResizeMode?: ColumnResizeMode;

  virtualized?: boolean;
  rowHeight?: number;
  overscan?: number;

  hasMore?: boolean;
  isFetchingMore?: boolean;
  onLoadMore?: () => void;
  onScrollEnd?: () => void;
  loadMoreThreshold?: number;

  loading?: boolean;
  emptyState?: ReactNode;
  loadingState?: ReactNode;

  stickyHeader?: boolean;
  stickySelectionColumn?: boolean;
  stickyActionsColumn?: boolean;
  striped?: boolean;
  bordered?: boolean;
  compact?: boolean;

  getRowId?: (originalRow: TData, index: number) => string;
  enableNestedRows?: boolean;
  getSubRows?: (originalRow: TData, index: number) => TData[] | undefined;
  maxExpandedDepth?: number;
  onRowClick?: (row: Row<TData>) => void;
  onRowDoubleClick?: (row: Row<TData>) => void;

  tableClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string | ((row: Row<TData>) => string);
  cellClassName?: string;

  toolbarSlot?: ReactNode;
  footerSlot?: ReactNode;

  showToolbar?: boolean;
  toolbarProps?: Omit<DataTableToolbarProps, "rowCount">;

  rowActions?: (row: Row<TData>) => ButtonDropItem[] | null | undefined;
  popoverAction?: boolean | DataTablePopoverActionProps<TData>;
}

export interface TableContextValue<TData> {
  table: Table<TData>;
  virtualized: boolean;
  rowHeight: number;
  stickyHeader: boolean;
  striped: boolean;
  bordered: boolean;
  compact: boolean;
  onRowClick?: (row: Row<TData>) => void;
  onRowDoubleClick?: (row: Row<TData>) => void;
  rowClassName?: string | ((row: Row<TData>) => string);
  cellClassName?: string;
}

export interface UseDataTableColumnsParams<TData> {
  columns: ColumnDef<TData>[];
  enableRowSelection: boolean | ((row: Row<TData>) => boolean);
  enableNestedRows: boolean;
  stickySelectionColumn: boolean;
  stickyActionsColumn: boolean;
  rowActions?: (row: Row<TData>) => ButtonDropItem[] | null | undefined;
}

export interface TableBodySharedProps<TData> {
  rows: Row<TData>[];
  columnSignature: string;
  beforeStickyRightColumnIds: ReadonlySet<string>;
  onRowClick?: (row: Row<TData>) => void;
  onRowDoubleClick?: (row: Row<TData>) => void;
  rowClassName?: string | ((row: Row<TData>) => string);
  cellClassName?: string;
  bordered?: boolean;
  className?: string;
}

export type TableBodyProps<TData> = TableBodySharedProps<TData>;

export interface TableVirtualBodyProps<
  TData,
> extends TableBodySharedProps<TData> {
  columnCount: number;
  parentRef: React.RefObject<HTMLDivElement | null>;
  rowHeight: number;
  overscan?: number;
  onScrollEnd?: () => void;
}

export interface TableRowProps<TData> {
  row: Row<TData>;
  rowIndex?: number;
  isSelected?: boolean;
  isExpanded?: boolean;
  beforeStickyRightColumnIds: ReadonlySet<string>;
  onRowClick?: (row: Row<TData>) => void;
  onRowDoubleClick?: (row: Row<TData>) => void;
  rowClassName?: string | ((row: Row<TData>) => string);
  cellClassName?: string;
  bordered?: boolean;
  style?: React.CSSProperties;
}

export interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
  stickyHeader?: boolean;
  className?: string;
  filters?: DataTableFiltersState<FilterSchema>;
  beforeStickyRightColumnIds: ReadonlySet<string>;
}

export interface TableHeaderCellProps<TData> {
  header: Header<TData, unknown>;
  filters?: DataTableFiltersState<FilterSchema>;
  isBeforeStickyRight?: boolean;
}

export interface UseTableOptions<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  globalFilter?: string;
  onGlobalFilterChange?: OnChangeFn<string>;
  columnFilters?: ColumnFiltersState;
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
  columnVisibility?: VisibilityState;
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  expanded?: ExpandedState;
  onExpandedChange?: OnChangeFn<ExpandedState>;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableColumnFilters?: boolean;
  enableGlobalFilter?: boolean;
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  enableMultiRowSelection?: boolean;
  manualSorting?: boolean;
  manualFiltering?: boolean;
  manualPagination?: boolean;
  enableColumnResizing?: boolean;
  columnResizeMode?: ColumnResizeMode;
  getRowId?: (originalRow: TData, index: number) => string;
  enableNestedRows?: boolean;
  getSubRows?: (originalRow: TData, index: number) => TData[] | undefined;
  maxExpandedDepth?: number;
}

export interface UseVirtualScrollOptions {
  count: number;
  rowHeight: number;
  overscan?: number;
  parentRef: React.RefObject<HTMLDivElement | null>;
  onScrollEnd?: () => void;
}

export interface UseInfiniteScrollOptions {
  hasMore: boolean;
  isFetchingMore: boolean;
  onLoadMore: () => void;
  threshold?: number;
}

export type { SortingState, ColumnFiltersState, ExpandedState, Row, Table };
