import { Color } from "@/types";
import type { AlertColor, AlertVariantStyles } from "../Alert.types";

export const variantClasses: Record<AlertColor, AlertVariantStyles> = {
  [Color.Positive]: {
    container: "border-l-positive-line-heavy",
    iconWrapper: "bg-positive-light",
    icon: "text-positive-text-heavy",
  },
  [Color.Danger]: {
    container: "border-l-danger-line-heavy",
    iconWrapper: "bg-danger-light",
    icon: "text-danger-text-heavy",
  },
  [Color.Warning]: {
    container: "border-l-warning-line-heavy",
    iconWrapper: "bg-warning-light",
    icon: "text-warning-text-heavy",
  },
  [Color.Info]: {
    container: "border-l-info-line-heavy",
    iconWrapper: "bg-info-light",
    icon: "text-info-text-heavy",
  },
};
