import type { HTMLAttributes } from "react";
import type { Size } from "@/types";
import type { TabType } from "@/components/Tab";

export interface PaginationProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;

  size?: Size;
  type?: TabType;
  showFirstLast?: boolean;
  showPageNumbers?: boolean;
  showPageInput?: boolean;
  prevText?: string;
  nextText?: string;
  pageInputPlaceholder?: string;
  disabled?: boolean;
  siblingCount?: number;
  inputDebounceDelay?: number;
}

export type PaginationItem =
  | { type: "page"; value: number }
  | { type: "ellipsis"; position: "start" | "end" };

export interface UsePaginationStateProps {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
}

export interface UsePaginationStateReturn {
  items: PaginationItem[];
  canGoPrev: boolean;
  canGoNext: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
}
