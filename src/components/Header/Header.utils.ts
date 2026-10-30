import type { ReactNode } from "react";

type HeaderLayoutState = {
  hasChildren: boolean;
  shouldShowSeparator: boolean;
};

export function getHeaderLayoutState(
  children?: ReactNode,
  isMobile?: boolean
): HeaderLayoutState {
  const hasChildren = Boolean(children);
  const shouldShowSeparator = hasChildren && !isMobile;

  return {
    hasChildren,
    shouldShowSeparator,
  };
}
