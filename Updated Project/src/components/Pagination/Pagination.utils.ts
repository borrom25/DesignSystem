import type { PaginationItem } from "./Pagination.types";

export function clampPage(page: number, totalPages: number): number {
  return Math.min(Math.max(1, page), totalPages);
}

export function isValidPage(page: number, totalPages: number): boolean {
  return Number.isInteger(page) && page >= 1 && page <= totalPages;
}

export function parsePageInput(value: string): number | null {
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

function range(start: number, end: number): number[] {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}

export function generatePaginationItems(
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1
): PaginationItem[] {
  const visiblePages = siblingCount * 2 + 1;
  const totalSlots = visiblePages + 4;

  if (totalPages <= totalSlots) {
    return range(1, totalPages).map((page) => ({ type: "page", value: page }));
  }

  const half = Math.floor(visiblePages / 2);

  let startPage: number;
  let endPage: number;

  if (currentPage <= half + 2) {
    startPage = 1;
    endPage = visiblePages + 2;
  } else if (currentPage >= totalPages - half - 1) {
    startPage = totalPages - visiblePages - 1;
    endPage = totalPages;
  } else {
    startPage = currentPage - half;
    endPage = currentPage + half;
  }

  const items: PaginationItem[] = [];

  if (startPage > 1) {
    items.push({ type: "page", value: 1 });
    if (startPage > 2) {
      items.push({ type: "ellipsis", position: "start" });
    }
  }

  for (let page = startPage; page <= endPage; page++) {
    if (page >= 1 && page <= totalPages) {
      items.push({ type: "page", value: page });
    }
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      items.push({ type: "ellipsis", position: "end" });
    }
    items.push({ type: "page", value: totalPages });
  }

  return items;
}

export function getMaxPageDigits(totalPages: number): number {
  return String(totalPages).length;
}
