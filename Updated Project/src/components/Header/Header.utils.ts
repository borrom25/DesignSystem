import type { ReactNode } from "react";

type HeaderLayoutState = {
  hasChildren: boolean;
  shouldShowSeparator: boolean;
};

export function getHeaderLayoutState(
  children?: ReactNode,
  showNotification?: boolean,
  isMobile?: boolean
): HeaderLayoutState {
  const hasChildren = Boolean(children);
  const shouldShowSeparator = Boolean(
    !isMobile && (hasChildren || showNotification)
  );

  return {
    hasChildren,
    shouldShowSeparator,
  };
}
