import { cn } from "@/utils";
import { tableStyles } from "../styles";
import { isServiceColumn } from "../utils/columnLayout";
import type {
  Row,
  TanStackTable,
  TableExpandedContentRenderer,
} from "../types";

export interface DataTableExpandedContentRowProps<TData> {
  table: TanStackTable<TData>;
  row: Row<TData>;
  columnCount: number;
  renderExpandedContent: TableExpandedContentRenderer<TData>;
  className?: string;
  virtualIndex?: number;
  measureElement?: (node: Element | null) => void;
}

export function DataTableExpandedContentRow<TData>({
  table,
  row,
  columnCount,
  renderExpandedContent,
  className,
  virtualIndex,
  measureElement,
}: DataTableExpandedContentRowProps<TData>) {
  const content = renderExpandedContent({ row, table });

  if (content === null || content === undefined || content === false) {
    return null;
  }

  const visibleColumns = table.getVisibleLeafColumns();
  const firstColumn = visibleColumns[0];
  const hasLeadingServiceColumn =
    firstColumn !== undefined && isServiceColumn(firstColumn.id);
  const serviceColumnWidth = hasLeadingServiceColumn
    ? (firstColumn.getSize() ?? 40)
    : 0;
  const contentColSpan = hasLeadingServiceColumn
    ? columnCount - 1
    : columnCount;

  return (
    <tr
      ref={measureElement}
      className={tableStyles.expandedContentRow}
      data-table-expanded-content-row="true"
      data-table-row-id={row.id}
      data-index={virtualIndex}
    >
      {hasLeadingServiceColumn && (
        <td
          style={{ width: serviceColumnWidth, minWidth: serviceColumnWidth }}
          className={tableStyles.expandedContentServiceCell}
        />
      )}
      <td
        colSpan={contentColSpan}
        className={cn(tableStyles.expandedContentCell, className)}
      >
        {content}
      </td>
    </tr>
  );
}
