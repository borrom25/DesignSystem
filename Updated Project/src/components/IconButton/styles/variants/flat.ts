import type { IconButtonColor } from "../../IconButton.types";

export const flatClasses: Record<IconButtonColor, string> = {
  brand:
    "bg-brand-light hover:bg-brand-light-hover text-brand-text-medium disabled:bg-transparent disabled:text-basic-hint",
  action:
    "bg-action-light hover:bg-action-light-hover text-action-text-medium disabled:bg-transparent disabled:text-basic-hint",
  danger:
    "bg-danger-light hover:bg-danger-light-hover text-danger-text-medium disabled:bg-transparent disabled:text-basic-hint",
  positive:
    "bg-positive-light hover:bg-positive-light-hover text-positive-text-medium disabled:bg-transparent disabled:text-basic-hint",
  warning:
    "bg-warning-light hover:bg-warning-light-hover text-warning-text-medium disabled:bg-transparent disabled:text-basic-hint",
  info: "bg-info-light hover:bg-info-light-hover text-info-text-medium disabled:bg-transparent disabled:text-basic-hint",
  inverse:
    "bg-inverse-light hover:bg-inverse-light-hover text-inverse-text-medium disabled:bg-transparent disabled:text-basic-hint",
};
