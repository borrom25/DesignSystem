import { cn } from "@/utils";
import type { Size } from "@/types";
import type { TabType } from "@/components/Tab";
import { Tab } from "@/components/Tab";
import type { PaginationItem } from "../Pagination.types";
import { paginationStyles } from "../styles";

interface PaginationPagesProps {
  items: PaginationItem[];
  currentPage: number;
  type: TabType;
  size: Size;
  disabled: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationPages({
  items,
  currentPage,
  type,
  size,
  disabled,
  onPageChange,
}: PaginationPagesProps) {
  return (
    <div className={paginationStyles.pageNumbers}>
      {items.map((item) => {
        if (item.type === "ellipsis") {
          return (
            <span
              key={`ellipsis-${item.position}`}
              className={cn(
                paginationStyles.ellipsis,
                paginationStyles.ellipsisSize[size]
              )}
              aria-hidden="true"
            >
              ...
            </span>
          );
        }

        const isSelected = item.value === currentPage;
        return (
          <Tab
            key={`page-${item.value}`}
            type={type}
            size={size}
            selected={isSelected}
            disabled={disabled}
            onClick={() => onPageChange(item.value)}
            aria-label={`Страница ${item.value}`}
            aria-current={isSelected ? "page" : undefined}
            className={cn(paginationStyles.pageButton[size])}
          >
            {item.value}
          </Tab>
        );
      })}
    </div>
  );
}
