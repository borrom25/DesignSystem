import { useRef, useCallback } from "react";
import { cn } from "@/utils";
import type { TableProps } from "./types";
import { useTable } from "./hooks/useDataTable";
import { useDataTableColumns } from "./hooks/useDataTableColumns";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import {
  TableHeader,
  TableBody,
  TableVirtualBody,
  TableEmpty,
  TableLoading,
  TableLoadingMore,
  DataTableToolbar,
} from "./ui";
import { tableStyles } from "./styles";
import {
  defaultRowHeight,
  defaultOverscan,
  defaultLoadMoreThreshold,
  scrollEndDistance,
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
  className,
  ...restProps
}: TableProps<TData>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const tableColumns = useDataTableColumns({
    columns,
    enableRowSelection,
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
  });

  const visibleColumnIds = table
    .getVisibleLeafColumns()
    .map((column) => column.id);
  const visibleColumnSignature = visibleColumnIds.join("|");
  const visibleColumnCount = visibleColumnIds.length;
  const isEmpty = rows.length === 0;

  const handleScrollEnd = useCallback(() => {
    onScrollEnd?.();
    if (hasMore && !isFetchingMore && onLoadMore) {
      onLoadMore();
    }
  }, [onScrollEnd, hasMore, isFetchingMore, onLoadMore]);

  const { sentinelRef } = useInfiniteScroll({
    hasMore: !virtualized && hasMore,
    isFetchingMore,
    onLoadMore: onLoadMore ?? noop,
    threshold: loadMoreThreshold,
  });

  const handleNonVirtualizedScroll = useCallback(() => {
    const element = containerRef.current;
    if (!element) return;

    const { scrollTop, scrollHeight, clientHeight } = element;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

    if (distanceFromBottom <= scrollEndDistance) {
      handleScrollEnd();
    }
  }, [handleScrollEnd]);

  const onContainerScroll =
    !virtualized && !isEmpty ? handleNonVirtualizedScroll : undefined;

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
    </div>
  );
}
