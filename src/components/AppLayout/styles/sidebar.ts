import type { CSSProperties } from "react";

const sidebarWidthValue =
  "calc(var(--sidebar-width) + var(--spacing-7) + var(--spacing-7))";

const sidebarTopWithHeaderValue =
  "calc(var(--spacing-7) + var(--spacing-19) + var(--spacing-7))";

const sidebarTopWithoutHeaderValue = "var(--spacing-19)";

export function getAppLayoutSidebarStyle(
  sidebarWidth: number,
  hasHeader: boolean,
  isFill = false
): CSSProperties {
  const style = {
    "--app-layout-sidebar-bottom": isFill ? "0px" : "var(--spacing-7)",
    "--app-layout-sidebar-top": hasHeader
      ? sidebarTopWithHeaderValue
      : sidebarTopWithoutHeaderValue,
  } as CSSProperties;

  if (sidebarWidth > 0) {
    Object.assign(style, {
      width: sidebarWidthValue,
      "--sidebar-width": `${sidebarWidth}px`,
    });
  }

  return style;
}
