import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type HeaderInsideLayoutState = {
  hasChildren: boolean;
  hasActionButton: boolean;
  shouldShowSeparator: boolean;
};

export function getHeaderInsideLayoutState(
  children?: ReactNode,
  showActionButton?: boolean,
  actionIcon?: LucideIcon,
  isMobile?: boolean
): HeaderInsideLayoutState {
  const hasChildren = Boolean(children);
  const hasActionButton = Boolean(showActionButton && actionIcon);
  const shouldShowSeparator = (hasChildren || hasActionButton) && !isMobile;

  return {
    hasChildren,
    hasActionButton,
    shouldShowSeparator,
  };
}
