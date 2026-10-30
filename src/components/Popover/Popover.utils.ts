import { Children, type CSSProperties, type ReactNode } from "react";

export const DEFAULT_SEARCH_EMPTY_MESSAGE = "Ничего не найдено";

export function hasRenderableChildren(children: ReactNode): boolean {
  return Children.toArray(children).length > 0;
}

export function getContentStyles(
  matchTriggerWidth?: boolean,
  maxHeight?: number | "available"
): CSSProperties {
  const styles: CSSProperties = {};

  if (matchTriggerWidth) {
    styles.width = "var(--radix-popover-trigger-width)";
    styles.maxWidth = "var(--radix-popover-trigger-width)";
  }

  if (maxHeight === "available") {
    styles.maxHeight = "var(--radix-popover-content-available-height, 400px)";
  } else if (typeof maxHeight === "number") {
    styles.maxHeight = `${maxHeight}px`;
  }

  return styles;
}

export function getScrollAreaStyles(
  maxHeight?: number | "available"
): CSSProperties {
  const styles: CSSProperties = {};

  if (maxHeight === "available") {
    styles.maxHeight = "var(--radix-popover-content-available-height, 400px)";
  } else if (typeof maxHeight === "number") {
    styles.maxHeight = `${maxHeight}px`;
  }

  return styles;
}
