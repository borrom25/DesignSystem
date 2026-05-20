import { useCallback, useEffect, type KeyboardEvent } from "react";
import { useDebouncedValue } from "@/hooks";
import { clampPage, parsePageInput, isValidPage } from "../Pagination.utils";

export interface UsePaginationHandlersProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled: boolean;
  inputDebounceDelay: number;
}

export function usePaginationHandlers({
  currentPage,
  totalPages,
  onPageChange,
  disabled,
  inputDebounceDelay,
}: UsePaginationHandlersProps) {
  const {
    value: inputValue,
    debouncedValue,
    setValue: setInputValue,
    flush,
  } = useDebouncedValue("", { delay: inputDebounceDelay });

  const handlePageChange = useCallback(
    (page: number) => {
      if (disabled) return;
      const clampedPage = clampPage(page, totalPages);
      if (clampedPage !== currentPage) {
        onPageChange(clampedPage);
      }
    },
    [disabled, totalPages, currentPage, onPageChange]
  );

  useEffect(() => {
    if (debouncedValue) {
      const page = parsePageInput(debouncedValue);
      if (page !== null && isValidPage(page, totalPages)) {
        handlePageChange(page);
        setInputValue("");
      }
    }
  }, [debouncedValue, totalPages, handlePageChange, setInputValue]);

  const handleFirst = useCallback(
    () => handlePageChange(1),
    [handlePageChange]
  );
  const handlePrev = useCallback(
    () => handlePageChange(currentPage - 1),
    [handlePageChange, currentPage]
  );
  const handleNext = useCallback(
    () => handlePageChange(currentPage + 1),
    [handlePageChange, currentPage]
  );
  const handleLast = useCallback(
    () => handlePageChange(totalPages),
    [handlePageChange, totalPages]
  );

  const handleInputKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        flush();
      }
    },
    [flush]
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
    },
    [setInputValue]
  );

  return {
    inputValue,
    handlePageChange,
    handleFirst,
    handlePrev,
    handleNext,
    handleLast,
    handleInputKeyDown,
    handleInputChange,
    handleInputBlur: flush,
  };
}
