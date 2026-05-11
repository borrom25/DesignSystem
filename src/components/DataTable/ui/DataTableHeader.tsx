import { useCallback } from "react";
import {
  flexRender,
  type HeaderGroup,
  type Header,
} from "@tanstack/react-table";
import { ChevronsUpDown, Filter } from "lucide-react";
import { cn } from "@/utils";
import { Counter } from "@/components/Counter";
import { IconButton, IconButtonType } from "@/components/IconButton";
import { Popover, PopoverSurface } from "@/components/Popover";
import { Size } from "@/types";
import { tableStyles } from "../styles";
import { getStickyPosition, isServiceColumn } from "../utils/columnLayout";
import type { ColumnDef } from "../types";
import type {
  DataTableFiltersState,
  FilterSchema,
} from "../types/DataTable.filter.types";
import {
  filterColumnAriaLabel,
  resizeColumnAriaLabel,
  sortColumnAriaLabel,
} from "../utils/header";
import { DataTableFilterRenderer } from "./DataTableFilters";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
  stickyHeader?: boolean;
  className?: string;
  filters?: DataTableFiltersState<FilterSchema>;
}

export function TableHeader<TData>({
  headerGroups,
  stickyHeader = false,
  className,
  filters,
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
            />
          ))}
        </tr>
      ))}
    </thead>
  );
}

interface TableHeaderCellProps<TData> {
  header: Header<TData, unknown>;
  filters?: DataTableFiltersState<FilterSchema>;
}

function TableHeaderCell<TData>({
  header,
  filters,
}: TableHeaderCellProps<TData>) {
  const columnDef = header.column.columnDef as ColumnDef<TData>;
  const canSort = header.column.getCanSort();
  const isSorted = header.column.getIsSorted();
  const isServiceCol = isServiceColumn(header.column.id);
  const stickyPosition = getStickyPosition(columnDef.sticky);
  const canResize = header.column.getCanResize() && !isServiceCol;
  const isResizing = header.column.getIsResizing();
  const sortButtonStateClass =
    isSorted === "asc"
      ? tableStyles.sortButtonAsc
      : isSorted === "desc"
        ? tableStyles.sortButtonDesc
        : tableStyles.sortButtonDefault;

  const filterConfig = columnDef.filter;
  const filterId = header.column.id;
  const canFilter = !!filterConfig && !!filters && !isServiceCol;
  const isFiltered = filters?.hasValue(filterId) ?? false;

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
        stickyPosition === "left" && tableStyles.headerCellStickyLeft,
        stickyPosition === "right" && tableStyles.headerCellStickyRight
      )}
      style={isServiceCol ? undefined : { width: header.getSize() }}
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
                  <PopoverSurface className={filterConfig.className}>
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
