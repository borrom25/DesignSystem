import { useCallback } from "react";
import { flexRender } from "@tanstack/react-table";
import { ChevronsUpDown, Filter } from "lucide-react";
import { cn } from "@/utils";
import { Counter } from "@/components/Counter";
import { IconButton, IconButtonType } from "@/components/IconButton";
import { Popover } from "@/components/Popover";
import { Size } from "@/types";
import { tableStyles } from "../styles";
import type { TableHeaderCellProps, TableHeaderProps } from "../types";
import {
  filterColumnAriaLabel,
  resizeColumnAriaLabel,
  sortColumnAriaLabel,
} from "../utils/header";
import { getDataTableHeaderCellLayout } from "../utils/headerCellLayout";
import { DataTableFilterRenderer } from "./DataTableFilters";

export function TableHeader<TData>({
  headerGroups,
  stickyHeader = false,
  className,
  filters,
  beforeStickyRightColumnIds,
}: TableHeaderProps<TData>) {
  return (
    <thead
      className={cn(
        tableStyles.header,
        stickyHeader && tableStyles.headerSticky,
        className
      )}
    >
      {headerGroups.map((headerGroup, headerRowIndex) => (
        <tr key={headerGroup.id} className={tableStyles.headerRow}>
          {headerGroup.headers.map((header) => {
            const hasNestedColumns = Boolean(header.column.columns?.length);

            if (!hasNestedColumns && headerRowIndex > header.column.depth) {
              return null;
            }

            const rowSpan = hasNestedColumns
              ? 1
              : headerGroups.length - headerRowIndex;

            return (
              <TableHeaderCell
                key={header.id}
                header={header}
                rowSpan={rowSpan}
                colSpan={header.colSpan}
                headerRowIndex={headerRowIndex}
                stickyHeader={stickyHeader}
                filters={filters}
                isBeforeStickyRight={beforeStickyRightColumnIds.has(
                  header.column.id
                )}
              />
            );
          })}
        </tr>
      ))}
    </thead>
  );
}

const headerRowHeight = 56;

function TableHeaderCell<TData>({
  header,
  rowSpan = 1,
  colSpan = 1,
  headerRowIndex = 0,
  stickyHeader = false,
  filters,
  isBeforeStickyRight = false,
}: TableHeaderCellProps<TData>) {
  const {
    canSort,
    isSorted,
    isServiceCol,
    stickyPosition,
    canResize,
    isResizing,
    sortButtonStateClass,
    filterConfig,
    filterId,
    canFilter,
    isFiltered,
    widthStyle,
  } = getDataTableHeaderCellLayout(header, filters);

  const handleSort = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      if (canSort) {
        header.column.toggleSorting();
      }
    },
    [canSort, header.column]
  );

  const handleResizerClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  const handleResizerDoubleClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      header.column.resetSize();
    },
    [header.column]
  );

  return (
    <th
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={cn(
        tableStyles.headerCell,
        stickyHeader && tableStyles.headerCellStickyHeader,
        isServiceCol && tableStyles.headerCellSelection,
        rowSpan > 1 && tableStyles.headerCellSpanning,
        canSort && tableStyles.headerCellSortable,
        isSorted && tableStyles.headerCellSorted,
        isBeforeStickyRight && tableStyles.headerCellBeforeStickyRight,
        stickyPosition === "left" && tableStyles.headerCellStickyLeft,
        stickyPosition === "right" && tableStyles.headerCellStickyRight
      )}
      style={{
        ...widthStyle,
        ...(stickyHeader
          ? { top: headerRowIndex * headerRowHeight }
          : undefined),
      }}
    >
      <div
        className={cn(
          tableStyles.headerCellContent,
          isServiceCol && tableStyles.headerCellSelectionContent
        )}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}
        {(canFilter || canSort) && (
          <div className={tableStyles.headerCellIcons}>
            {canFilter && filterConfig && filters && (
              <Popover>
                <Popover.Trigger asChild>
                  <div className={tableStyles.filterButtonWrapper}>
                    <IconButton
                      icon={Filter}
                      size={Size.Sm}
                      type={IconButtonType.icon}
                      className={cn(
                        tableStyles.filterButton,
                        isFiltered && tableStyles.filterButtonActive
                      )}
                      aria-label={filterColumnAriaLabel}
                    />
                    {isFiltered && (
                      <Counter
                        count={0}
                        size={Size.Xs}
                        empty
                        className={tableStyles.filterButtonIndicator}
                      />
                    )}
                  </div>
                </Popover.Trigger>
                <Popover.Content
                  onOpenAutoFocus={(event) => event.preventDefault()}
                >
                  <Popover.Surface className={tableStyles.filterPopoverSurface}>
                    <DataTableFilterRenderer
                      config={filterConfig}
                      filterId={filterId}
                      filters={filters}
                    />
                  </Popover.Surface>
                </Popover.Content>
              </Popover>
            )}
            {canSort && (
              <IconButton
                icon={ChevronsUpDown}
                size={Size.Sm}
                type={IconButtonType.icon}
                className={cn(tableStyles.sortButton, sortButtonStateClass)}
                onClick={handleSort}
                aria-label={sortColumnAriaLabel}
              />
            )}
          </div>
        )}
      </div>

      {canResize && (
        <button
          type="button"
          className={cn(tableStyles.headerCellResizer, isResizing)}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          onClick={handleResizerClick}
          onDoubleClick={handleResizerDoubleClick}
          aria-label={resizeColumnAriaLabel}
        />
      )}
    </th>
  );
}
