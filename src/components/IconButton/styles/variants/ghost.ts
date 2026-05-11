import type { IconButtonColor } from "../../IconButton.types";

export const ghostClasses: Record<IconButtonColor, string> = {
  brand:
    "bg-transparent text-brand-text-medium hover:text-brand-text-heavy hover:bg-generic-medium-hover disabled:bg-generic-disabled disabled:text-hint",
  action:
    "bg-transparent text-action-text-medium hover:text-action-text-heavy hover:bg-generic-medium-hover disabled:bg-generic-disabled disabled:text-hint",
  danger:
    "bg-transparent text-danger-text-medium hover:text-danger-text-heavy hover:bg-generic-medium-hover disabled:bg-generic-disabled disabled:text-hint",
  positive:
    "bg-transparent text-positive-text-medium hover:text-positive-text-heavy hover:bg-generic-medium-hover disabled:bg-generic-disabled disabled:text-hint",
  warning:
    "bg-transparent text-warning-text-medium hover:text-warning-text-heavy hover:bg-generic-medium-hover disabled:bg-generic-disabled disabled:text-hint",
  info: "bg-transparent text-info-text-medium hover:text-info-text-heavy hover:bg-generic-medium-hover disabled:bg-generic-disabled disabled:text-hint",
  inverse:
    "bg-transparent text-inverse-line-light hover:text-inverse-text-heavy hover:bg-generic-medium-hover disabled:bg-generic-disabled disabled:text-hint",
};
