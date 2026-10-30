import { cn } from "@/utils";
import type { Size } from "@/types";
import type { TabType } from "@/components/Tab";
import { Tab } from "@/components/Tab";
import type { PaginationItem } from "../Pagination.types";
import { usePaginationIndicator } from "../hooks/usePaginationIndicator";
import { paginationStyles } from "../styles";

interface PaginationPagesProps {
  items: PaginationItem[];
  currentPage: number;
  type: TabType;
  size: Size;
  disabled: boolean;
  forwardOnly?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationPages({
  items,
  currentPage,
  type,
  size,
  disabled,
  forwardOnly,
  onPageChange,
}: PaginationPagesProps) {
  const { containerRef, indicatorStyles, registerButtonRef } =
    usePaginationIndicator(currentPage, items);

  return (
    <div ref={containerRef} className={paginationStyles.pageNumbers}>
      {indicatorStyles && (
        <div
          className={cn(
            paginationStyles.indicator,
            paginationStyles.indicatorSize[size]
          )}
          style={indicatorStyles}
          aria-hidden="true"
        />
      )}

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
            asChild
            type={type}
            size={size}
            selected={isSelected}
            disabled={disabled || Boolean(forwardOnly)}
            className={cn(
              paginationStyles.pageButtonBase,
              paginationStyles.pageButton[size]
            )}
          >
            <button
              ref={(element) => registerButtonRef(item.value, element)}
              type="button"
              onClick={() => onPageChange(item.value)}
              aria-label={`Страница ${item.value}`}
              aria-current={isSelected ? "page" : undefined}
            >
              {item.value}
            </button>
          </Tab>
        );
      })}
    </div>
  );
}
