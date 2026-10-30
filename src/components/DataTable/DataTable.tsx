import { useCallback, useState } from "react";
import { ActionPopover } from "../ActionPopover/ActionPopover";
import { cn } from "@/utils";
import type { TableProps } from "./types";
import { useTable } from "./hooks/useDataTable";
import { useDataTableColumns } from "./hooks/useDataTableColumns";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import { useDataTableColumnLayout } from "./hooks/useDataTableColumnLayout";
import { useDataTableScrollEnd } from "./hooks/useDataTableScrollEnd";
import { useDataTablePopoverAction } from "./hooks/useDataTablePopoverAction";
import {
  DataTableRowActionPopoverContext,
  useDataTableRowActionPopover,
} from "./hooks/useDataTableRowActionPopover";
import { useDataTableViewportMetrics } from "./hooks/useDataTableViewportMetrics";
import {
  TableHeader,
  TableBody,
  TableVirtualBody,
  TableEmpty,
  TableLoadingMore,
  TableSkeletonBody,
  TableStateOverlay,
  DataTableToolbar,
} from "./ui";
import { tableStyles } from "./styles";
import {
  defaultRowHeight,
  defaultOverscan,
  defaultLoadMoreThreshold,
} from "./utils/constants";
import {
  getDataTableColumnWidthStyle,
  resolveDataTablePopoverActionChildren,
  resolveDataTablePopoverActionSelectedLabel,
} from "./utils";

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
  embeddedLeadingInset = 0,
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
  style,
  ...restProps
}: TableProps<TData>) {
  const [isHeaderSeparated, setIsHeaderSeparated] = useState(false);
  const enableExpandedContent = Boolean(renderExpandedContent);
  const enableExpanding = enableNestedRows || enableExpandedContent;
  const hasEmbeddedLeadingInset = embedded && embeddedLeadingInset > 0;
  const wrapperStyle = hasEmbeddedLeadingInset
    ? ({
        ...style,
        "--data-table-embedded-leading-inset": `${embeddedLeadingInset}px`,
      } as React.CSSProperties)
    : style;
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
  const tableWidth = hasEmbeddedLeadingInset
    ? `calc(${table.getTotalSize()}px + ${embeddedLeadingInset}px)`
    : table.getTotalSize();
  const tableMinWidth = hasEmbeddedLeadingInset
    ? `calc(100% + ${embeddedLeadingInset}px)`
    : "100%";

  const {
    visibleColumnSignature,
    visibleColumnCount,
    beforeStickyRightColumnIds,
  } = useDataTableColumnLayout(table);
  const isEmpty = rows.length === 0;
  const showSkeleton = loading && !loadingState;
  const showStateOverlay =
    (loading && Boolean(loadingState)) || (!loading && isEmpty);
  const showDataRows = !loading && !isEmpty;
  const popoverActionState = useDataTablePopoverAction({
    table,
    popoverAction,
  });

  const { containerRef, handleScrollEnd, onContainerScroll } =
    useDataTableScrollEnd({
      virtualized,
      isEmpty: isEmpty || loading,
      hasMore,
      isFetchingMore,
      onLoadMore,
      onScrollEnd,
    });
  const rowActionPopover = useDataTableRowActionPopover(containerRef);
  const viewportMetrics = useDataTableViewportMetrics(
    containerRef,
    showSkeleton || showStateOverlay
  );
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

  return (
    <DataTableRowActionPopoverContext.Provider
      value={rowActionPopover.contextValue}
    >
      <div
        className={cn(
          embedded ? tableStyles.wrapperEmbedded : tableStyles.wrapper,
          hasEmbeddedLeadingInset && tableStyles.wrapperEmbeddedInset,
          className
        )}
        style={wrapperStyle}
        {...restProps}
      >
        {showToolbar && (
          <div className={tableStyles.toolbar}>
            <DataTableToolbar {...toolbarProps} filters={filters} />
          </div>
        )}
        {toolbarSlot && (
          <div className={tableStyles.toolbar}>{toolbarSlot}</div>
        )}

        <div
          ref={containerRef}
          data-table-scroll-container="true"
          data-table-virtualized={virtualized ? "true" : "false"}
          data-table-embedded={embedded ? "true" : "false"}
          className={cn(
            embedded ? tableStyles.containerEmbedded : tableStyles.container,
            virtualized && tableStyles.containerVirtualized
          )}
          onScroll={handleContainerScroll}
        >
          <table
            aria-busy={loading || undefined}
            className={cn(
              tableStyles.table,
              embedded && tableStyles.tableEmbedded,
              hasEmbeddedLeadingInset && tableStyles.tableEmbeddedInset,
              striped && tableStyles.tableStriped,
              !embedded && bordered && tableStyles.tableBordered,
              compact && tableStyles.tableCompact,
              tableClassName
            )}
            style={{ width: tableWidth, minWidth: tableMinWidth }}
          >
            <colgroup>
              {table.getVisibleLeafColumns().map((column) => (
                <col
                  key={column.id}
                  style={getDataTableColumnWidthStyle(
                    column.id,
                    column.getSize()
                  )}
                />
              ))}
            </colgroup>
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

            {showSkeleton && (
              <TableSkeletonBody
                table={table}
                beforeStickyRightColumnIds={beforeStickyRightColumnIds}
                bordered={bordered}
                className={bodyClassName}
                cellClassName={cellClassName}
                rowCount={viewportMetrics.skeletonRowCount}
              />
            )}

            {showDataRows &&
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

            {showStateOverlay && (
              <TableStateOverlay
                colSpan={visibleColumnCount}
                height={viewportMetrics.overlayHeight}
                width={viewportMetrics.clientWidth}
              >
                {loading ? loadingState : <TableEmpty>{emptyState}</TableEmpty>}
              </TableStateOverlay>
            )}
          </table>

          {showDataRows && !embedded && (
            <div className={tableStyles.contentFill} aria-hidden="true" />
          )}

          {showDataRows && !virtualized && hasMore && (
            <div ref={sentinelRef}>
              {isFetchingMore && <TableLoadingMore />}
            </div>
          )}

          {showDataRows && virtualized && isFetchingMore && (
            <TableLoadingMore />
          )}
        </div>

        {footerSlot && <div className={tableStyles.footer}>{footerSlot}</div>}

        {popoverActionState.shouldShow && popoverActionState.options && (
          <div className={tableStyles.popoverActionWrapper}>
            <ActionPopover
              selectedLabel={resolveDataTablePopoverActionSelectedLabel(
                popoverActionState.options.selectedLabel,
                popoverActionState.context.selectedCount
              )}
              closeAriaLabel={popoverActionState.options.closeAriaLabel}
              className={popoverActionState.options.className}
              onClose={() => {
                popoverActionState.options?.onClose?.(
                  popoverActionState.context
                );
                popoverActionState.context.hide();
              }}
            >
              {resolveDataTablePopoverActionChildren(
                popoverActionState.options.children,
                popoverActionState.context
              )}
            </ActionPopover>
          </div>
        )}
      </div>
    </DataTableRowActionPopoverContext.Provider>
  );
}
