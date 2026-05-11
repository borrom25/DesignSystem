import type { ReactNode } from "react";

export function getModalLayoutState(
  title: ReactNode,
  subtitle: ReactNode,
  actionSlot: ReactNode,
  bottomSlot: ReactNode
) {
  return {
    hasHeader: Boolean(title || subtitle || actionSlot),
    hasFooter: Boolean(bottomSlot),
    hasTitle: Boolean(title),
    hasSubtitle: Boolean(subtitle),
    hasActionSlot: Boolean(actionSlot),
  };
}
