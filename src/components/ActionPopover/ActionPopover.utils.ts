import type { ReactNode } from "react";
import type { ActionPopoverLayoutState } from "./ActionPopover.types";

export function hasSelectedLabelContent(selectedLabel?: ReactNode): boolean {
  if (selectedLabel == null || selectedLabel === false) {
    return false;
  }

  if (typeof selectedLabel === "string") {
    return selectedLabel.trim().length > 0;
  }

  return true;
}

export function getActionPopoverLayoutState(
  selectedLabel?: ReactNode,
  children?: ReactNode,
  onClose?: () => void
): ActionPopoverLayoutState {
  const showSelectedLabel = hasSelectedLabelContent(selectedLabel);
  const showChildren = Boolean(children);

  return {
    showSelectedLabel,
    showContent: showSelectedLabel || showChildren,
    showClose: Boolean(onClose),
  };
}
