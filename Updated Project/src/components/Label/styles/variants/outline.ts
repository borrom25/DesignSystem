import type { LabelColor } from "../../Label.types";

export const outlineClasses: Record<LabelColor, string> = {
  brand: "border border-brand-line-heavy text-brand-text-heavy",
  action: "border border-action-line-heavy text-action-text-heavy",
  danger: "border border-danger-line-heavy text-danger-text-heavy",
  positive: "border border-positive-line-heavy text-positive-text-heavy",
  warning: "border border-warning-line-heavy text-warning-text-heavy",
  info: "border border-info-line-heavy text-info-text-heavy",
  inverse: "border border-inverse-line-heavy text-inverse-text-heavy",
};
