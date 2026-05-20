import { cn } from "@/utils";
import type { TableProps } from "./types";
import { useTable } from "./hooks/useDataTable";
import { useDataTableColumns } from "./hooks/useDataTableColumns";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import { useDataTableColumnLayout } from "./hooks/useDataTableColumnLayout";
import { useDataTableScrollEnd } from "./hooks/useDataTableScrollEnd";
import { useDataTablePopoverAction } from "./hooks/useDataTablePopoverAction";
import {
  TableHeader,
  TableBody,
  TableVirtualBody,
  TableEmpty,
  TableLoading,
  TableLoadingMore,
  DataTableToolbar,
  DataTablePopoverAction,
} from "./ui";
import { tableStyles } from "./styles";
import {
  defaultRowHeight,
  defaultOverscan,
  defaultLoadMoreThreshold,
} from "./utils/constants";

const noop = () => {};

export function Table<TData>({
  data,
  columns,
  sorting,
  onSortingChange,
  filters,
  globalFilter,
  onGlobalFilterChange,
  columnVisibility,
  onColumnVisibilityChange,
  rowSelection,
  onRowSelectionChange,
  expanded,
  onExpandedChange,
  enableSorting = true,
  enableFiltering = true,
  enableColumnFilters = true,
  enableGlobalFilter = true,
  enableRowSelection = false,
  enableMultiRowSelection = true,
  manualSorting = false,
  manualFiltering = false,
  manualPagination = false,
  enableColumnResizing = true,
  columnResizeMode = "onChange",
  virtualized = false,
  rowHeight = defaultRowHeight,
  overscan = defaultOverscan,
  hasMore = false,
  isFetchingMore = false,
  onLoadMore,
  onScrollEnd,
  loadMoreThreshold = defaultLoadMoreThreshold,
  loading = false,
  emptyState,
  loadingState,
  stickyHeader = false,
  stickySelectionColumn = true,
  stickyActionsColumn = true,
  striped = false,
  bordered = false,
  compact = false,
  getRowId,
  enableNestedRows = false,
  getSubRows,
  maxExpandedDepth,
  onRowClick,
  onRowDoubleClick,
  tableClassName,
  headerClassName,
  bodyClassName,
  rowClassName,
  cellClassName,
  toolbarSlot,
  footerSlot,
  showToolbar = false,
  toolbarProps,
  rowActions,
  popoverAction,
  className,
  ...restProps
}: TableProps<TData>) {
  const tableColumns = useDataTableColumns({
    columns,
    enableRowSelection,
    enableNestedRows,
    rowActions,
    stickySelectionColumn,
    stickyActionsColumn,
  });

  const { table, rows } = useTable({
    data,
    columns: tableColumns,
    sorting,
    onSortingChange,
    columnFilters: filters?.columnFiltersState,
    onColumnFiltersChange: filters?.onColumnFiltersChange,
    globalFilter,
    onGlobalFilterChange,
    columnVisibility,
    onColumnVisibilityChange,
    rowSelection,
    onRowSelectionChange,
    expanded,
    onExpandedChange,
    enableSorting,
    enableFiltering,
    enableColumnFilters,
    enableGlobalFilter,
    enableRowSelection,
    enableMultiRowSelection,
    manualSorting,
    manualFiltering,
    manualPagination,
    enableColumnResizing,
    columnResizeMode,
    getRowId,
    enableNestedRows,
    getSubRows,
    maxExpandedDepth,
  });

  const {
    visibleColumnSignature,
    visibleColumnCount,
    beforeStickyRightColumnIds,
  } = useDataTableColumnLayout(table);
  const isEmpty = rows.length === 0;
  const popoverActionState = useDataTablePopoverAction({
    table,
    popoverAction,
  });

  const { containerRef, handleScrollEnd, onContainerScroll } =
    useDataTableScrollEnd({
      virtualized,
      isEmpty,
      hasMore,
      isFetchingMore,
      onLoadMore,
      onScrollEnd,
    });

  const { sentinelRef } = useInfiniteScroll({
    hasMore: !virtualized && hasMore,
    isFetchingMore,
    onLoadMore: onLoadMore ?? noop,
    threshold: loadMoreThreshold,
  });

  if (loading) {
    return (
      <div className={cn(tableStyles.wrapper, className)} {...restProps}>
        {showToolbar && (
          <div className={tableStyles.toolbar}>
            <DataTableToolbar {...toolbarProps} rowCount={0} />
          </div>
        )}
        {toolbarSlot && (
          <div className={tableStyles.toolbar}>{toolbarSlot}</div>
        )}
        <TableLoading>{loadingState}</TableLoading>
      </div>
    );
  }

  return (
    <div className={cn(tableStyles.wrapper, className)} {...restProps}>
      {showToolbar && (
        <div className={tableStyles.toolbar}>
          <DataTableToolbar {...toolbarProps} rowCount={rows.length} />
        </div>
      )}
      {toolbarSlot && <div className={tableStyles.toolbar}>{toolbarSlot}</div>}

      <div
        ref={containerRef}
        data-table-scroll-container="true"
        data-table-virtualized={virtualized ? "true" : "false"}
        className={cn(
          tableStyles.container,
          virtualized && tableStyles.containerVirtualized,
          isEmpty && tableStyles.containerEmpty
        )}
        onScroll={onContainerScroll}
      >
        <table
          className={cn(
            tableStyles.table,
            striped && tableStyles.tableStriped,
            bordered && tableStyles.tableBordered,
            compact && tableStyles.tableCompact,
            tableClassName
          )}
          style={{ width: table.getTotalSize(), minWidth: "100%" }}
        >
          <TableHeader
            headerGroups={table.getHeaderGroups()}
            stickyHeader={stickyHeader}
            className={headerClassName}
            filters={filters}
            beforeStickyRightColumnIds={beforeStickyRightColumnIds}
          />

          {!isEmpty &&
            (virtualized ? (
              <TableVirtualBody
                rows={rows}
                columnSignature={visibleColumnSignature}
                columnCount={visibleColumnCount}
                parentRef={containerRef}
                rowHeight={rowHeight}
                overscan={overscan}
                onScrollEnd={handleScrollEnd}
                onRowClick={onRowClick}
                onRowDoubleClick={onRowDoubleClick}
                rowClassName={rowClassName}
                cellClassName={cellClassName}
                bordered={bordered}
                className={bodyClassName}
                beforeStickyRightColumnIds={beforeStickyRightColumnIds}
              />
            ) : (
              <TableBody
                rows={rows}
                columnSignature={visibleColumnSignature}
                onRowClick={onRowClick}
                onRowDoubleClick={onRowDoubleClick}
                rowClassName={rowClassName}
                cellClassName={cellClassName}
                bordered={bordered}
                className={bodyClassName}
                beforeStickyRightColumnIds={beforeStickyRightColumnIds}
              />
            ))}
        </table>

        {isEmpty && (
          <div
            className={tableStyles.emptyViewport}
            data-table-empty-container="true"
          >
            <TableEmpty>{emptyState}</TableEmpty>
          </div>
        )}

        {!isEmpty && (
          <div className={tableStyles.contentFill} aria-hidden="true" />
        )}

        {!isEmpty && !virtualized && hasMore && (
          <div ref={sentinelRef}>{isFetchingMore && <TableLoadingMore />}</div>
        )}

        {!isEmpty && virtualized && isFetchingMore && <TableLoadingMore />}
      </div>

      {footerSlot && <div className={tableStyles.footer}>{footerSlot}</div>}

      {popoverActionState.shouldShow && popoverActionState.options && (
        <DataTablePopoverAction
          context={popoverActionState.context}
          options={popoverActionState.options}
        />
      )}
    </div>
  );
}
