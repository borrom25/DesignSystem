import { useMemo } from "react";
import type {
  UsePaginationStateProps,
  UsePaginationStateReturn,
} from "../Pagination.types";
import { generatePaginationItems } from "../Pagination.utils";

export function usePaginationState({
  currentPage,
  totalPages,
  siblingCount = 1,
}: UsePaginationStateProps): UsePaginationStateReturn {
  const items = useMemo(
    () => generatePaginationItems(currentPage, totalPages, siblingCount),
    [currentPage, totalPages, siblingCount]
  );

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return {
    items,
    canGoPrev,
    canGoNext,
    isFirstPage,
    isLastPage,
  };
}
