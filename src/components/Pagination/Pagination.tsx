import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { cn } from "@/utils";
import { Size, Type } from "@/types";
import type { PaginationProps } from "./Pagination.types";
import { usePaginationState } from "./hooks/usePaginationState";
import { usePaginationHandlers } from "./hooks/usePaginationHandlers";
import { PaginationButton, PaginationPages, PaginationInput } from "./ui";
import { paginationStyles } from "./styles";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  size = Size.Sm,
  type = Type.Fill,
  showFirstLast = true,
  showPageNumbers = true,
  showPageInput = false,
  prevText,
  nextText,
  pageInputPlaceholder = "Страница #",
  disabled = false,
  siblingCount = 1,
  inputDebounceDelay = 500,
  className,
  ...restProps
}: PaginationProps) {
  const { items, canGoPrev, canGoNext, isFirstPage, isLastPage } =
    usePaginationState({ currentPage, totalPages, siblingCount });

  const {
    inputValue,
    handlePageChange,
    handleFirst,
    handlePrev,
    handleNext,
    handleLast,
    handleInputKeyDown,
    handleInputChange,
    handleInputBlur,
  } = usePaginationHandlers({
    currentPage,
    totalPages,
    onPageChange,
    disabled,
    inputDebounceDelay,
  });

  if (totalPages <= 0) return null;

  return (
    <nav
      className={cn(paginationStyles.wrapper, className)}
      aria-label="Pagination"
      {...restProps}
    >
      {showFirstLast && (
        <PaginationButton
          type={type}
          size={size}
          icon={ChevronsLeft}
          disabled={disabled || isFirstPage}
          onClick={handleFirst}
          label="Первая страница"
        />
      )}

      <PaginationButton
        type={type}
        size={size}
        icon={ChevronLeft}
        disabled={disabled || !canGoPrev}
        onClick={handlePrev}
        label="Предыдущая страница"
        text={prevText}
      />

      {showPageNumbers && (
        <PaginationPages
          items={items}
          currentPage={currentPage}
          type={type}
          size={size}
          disabled={disabled}
          onPageChange={handlePageChange}
        />
      )}

      <PaginationButton
        type={type}
        size={size}
        icon={ChevronRight}
        disabled={disabled || !canGoNext}
        onClick={handleNext}
        label="Следующая страница"
        text={nextText}
      />

      {showFirstLast && (
        <PaginationButton
          type={type}
          size={size}
          icon={ChevronsRight}
          disabled={disabled || isLastPage}
          onClick={handleLast}
          label="Последняя страница"
        />
      )}

      {showPageInput && (
        <PaginationInput
          size={size}
          value={inputValue}
          placeholder={pageInputPlaceholder}
          disabled={disabled}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
        />
      )}
    </nav>
  );
}
