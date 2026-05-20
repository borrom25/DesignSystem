import type { ReactNode } from "react";

export function getCollapsedLabel(
  label: ReactNode,
  collapsed: boolean
): string | undefined {
  if (!collapsed) return undefined;
  return typeof label === "string" ? label : undefined;
}
