import { useCallback } from "react";
import { flexRender } from "@tanstack/react-table";
import { ChevronsUpDown, Filter } from "lucide-react";
import { cn } from "@/utils";
import { Counter } from "@/components/Counter";
import { IconButton, IconButtonType } from "@/components/IconButton";
import { Popover, PopoverSurface } from "@/components/Popover";
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
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className={tableStyles.headerRow}>
          {headerGroup.headers.map((header) => (
            <TableHeaderCell
              key={header.id}
              header={header}
              filters={filters}
              isBeforeStickyRight={beforeStickyRightColumnIds.has(
                header.column.id
              )}
            />
          ))}
        </tr>
      ))}
    </thead>
  );
}

function TableHeaderCell<TData>({
  header,
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
      className={cn(
        tableStyles.headerCell,
        isServiceCol && tableStyles.headerCellSelection,
        canSort && tableStyles.headerCellSortable,
        isSorted && tableStyles.headerCellSorted,
        isBeforeStickyRight && tableStyles.headerCellBeforeStickyRight,
        stickyPosition === "left" && tableStyles.headerCellStickyLeft,
        stickyPosition === "right" && tableStyles.headerCellStickyRight
      )}
      style={widthStyle}
    >
      <div
        className={cn(
          tableStyles.headerCellContent,
          isServiceCol && tableStyles.headerCellSelectionContent
        )}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
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
                <Popover.Content>
                  <PopoverSurface className={tableStyles.filterPopoverSurface}>
                    <DataTableFilterRenderer
                      config={filterConfig}
                      filterId={filterId}
                      filters={filters}
                    />
                  </PopoverSurface>
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
