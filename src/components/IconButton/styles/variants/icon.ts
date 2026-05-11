import type { IconButtonColor } from "../../IconButton.types";

export const iconClasses: Record<IconButtonColor, string> = {
  brand:
    "bg-transparent text-brand-text-medium  hover:text-brand-heavy disabled:text-basic-hint",
  action:
    "bg-transparent text-action-text-medium hover:text-action-heavy  disabled:text-basic-hint",
  danger:
    "bg-transparent text-danger-text-medium hover:text-danger-heavy  disabled:text-basic-hint",
  positive:
    "bg-transparent text-positive-text-medium hover:text-positive-heavy  disabled:text-basic-hint",
  warning:
    "bg-transparent text-warning-text-medium hover:text-warning-heavy  disabled:text-basic-hint",
  info: "bg-transparent text-info-text-medium hover:text-info-heavy  disabled:text-basic-hint",
  inverse:
    "bg-transparent  text-inverse-line-light hover:text-inverse-text-heavy disabled:text-basic-hint",
};
