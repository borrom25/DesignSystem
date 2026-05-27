import { useCallback, useState } from "react";
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
  embedded = false,
  getRowId,
  enableNestedRows = false,
  getSubRows,
  maxExpandedDepth,
  renderExpandedContent,
  getRowCanExpandContent,
  expandedContentClassName,
  expandedContentEstimateSize,
  onRowClick,
  onRowDoubleClick,
  editable = false,
  editableCellIds,
  isCellEditable,
  editablePlaceholder,
  onCellDraftChange,
  onCellValueChange,
  cellEditor,
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
  const [isHeaderSeparated, setIsHeaderSeparated] = useState(false);
  const enableExpandedContent = Boolean(renderExpandedContent);
  const enableExpanding = enableNestedRows || enableExpandedContent;
  const tableColumns = useDataTableColumns({
    columns,
    enableRowSelection,
    enableExpanding,
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
    enableExpandedContent,
    getRowCanExpandContent,
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
  const handleContainerScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      setIsHeaderSeparated(event.currentTarget.scrollTop > 0);
      onContainerScroll?.();
    },
    [onContainerScroll]
  );

  const { sentinelRef } = useInfiniteScroll({
    hasMore: !virtualized && hasMore,
    isFetchingMore,
    onLoadMore: onLoadMore ?? noop,
    threshold: loadMoreThreshold,
  });

  if (loading) {
    return (
      <div
        className={cn(
          embedded ? tableStyles.wrapperEmbedded : tableStyles.wrapper,
          className
        )}
        {...restProps}
      >
        {showToolbar && (
          <div className={tableStyles.toolbar}>
            <DataTableToolbar {...toolbarProps} />
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
    <div
      className={cn(
        embedded ? tableStyles.wrapperEmbedded : tableStyles.wrapper,
        className
      )}
      {...restProps}
    >
      {showToolbar && (
        <div className={tableStyles.toolbar}>
          <DataTableToolbar {...toolbarProps} />
        </div>
      )}
      {toolbarSlot && <div className={tableStyles.toolbar}>{toolbarSlot}</div>}

      <div
        ref={containerRef}
        data-table-scroll-container="true"
        data-table-virtualized={virtualized ? "true" : "false"}
        data-table-embedded={embedded ? "true" : "false"}
        className={cn(
          embedded ? tableStyles.containerEmbedded : tableStyles.container,
          virtualized && tableStyles.containerVirtualized,
          isEmpty && tableStyles.containerEmpty
        )}
        onScroll={handleContainerScroll}
      >
        <table
          className={cn(
            tableStyles.table,
            embedded && tableStyles.tableEmbedded,
            striped && tableStyles.tableStriped,
            !embedded && bordered && tableStyles.tableBordered,
            compact && tableStyles.tableCompact,
            tableClassName
          )}
          style={{ width: table.getTotalSize(), minWidth: "100%" }}
        >
          <TableHeader
            headerGroups={table.getHeaderGroups()}
            stickyHeader={embedded ? false : stickyHeader}
            className={cn(
              embedded && tableStyles.headerEmbedded,
              stickyHeader && isHeaderSeparated && tableStyles.headerScrolled,
              headerClassName
            )}
            filters={filters}
            beforeStickyRightColumnIds={beforeStickyRightColumnIds}
          />

          {!isEmpty &&
            (virtualized ? (
              <TableVirtualBody
                table={table}
                rows={rows}
                columnSignature={visibleColumnSignature}
                columnCount={visibleColumnCount}
                parentRef={containerRef}
                rowHeight={rowHeight}
                expandedContentEstimateSize={expandedContentEstimateSize}
                overscan={overscan}
                onScrollEnd={handleScrollEnd}
                renderExpandedContent={renderExpandedContent}
                getRowCanExpandContent={getRowCanExpandContent}
                expandedContentClassName={expandedContentClassName}
                onRowClick={onRowClick}
                onRowDoubleClick={onRowDoubleClick}
                editable={editable}
                editableCellIds={editableCellIds}
                isCellEditable={isCellEditable}
                editablePlaceholder={editablePlaceholder}
                onCellDraftChange={onCellDraftChange}
                onCellValueChange={onCellValueChange}
                cellEditor={cellEditor}
                rowClassName={rowClassName}
                cellClassName={cellClassName}
                bordered={bordered}
                className={bodyClassName}
                beforeStickyRightColumnIds={beforeStickyRightColumnIds}
              />
            ) : (
              <TableBody
                table={table}
                rows={rows}
                columnSignature={visibleColumnSignature}
                columnCount={visibleColumnCount}
                renderExpandedContent={renderExpandedContent}
                getRowCanExpandContent={getRowCanExpandContent}
                expandedContentClassName={expandedContentClassName}
                onRowClick={onRowClick}
                onRowDoubleClick={onRowDoubleClick}
                editable={editable}
                editableCellIds={editableCellIds}
                isCellEditable={isCellEditable}
                editablePlaceholder={editablePlaceholder}
                onCellDraftChange={onCellDraftChange}
                onCellValueChange={onCellValueChange}
                cellEditor={cellEditor}
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

        {!isEmpty && !embedded && (
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
