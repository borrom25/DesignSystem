import type { LabelColor } from "../../Label.types";

export const flatClasses: Record<LabelColor, string> = {
  brand: "bg-brand-light text-brand-text-heavy",
  action: "bg-action-light text-action-text-heavy",
  danger: "bg-danger-light text-danger-text-heavy",
  positive: "bg-positive-light text-positive-text-heavy",
  warning: "bg-warning-light text-warning-text-heavy",
  info: "bg-info-light text-info-text-heavy",
  inverse: "bg-inverse-light text-inverse-text-heavy",
};
