import type { ProgressBarStatus } from "../ProgressBar.types";

export const statusClasses: Record<ProgressBarStatus, string> = {
  loading: "bg-brand-heavy",
  success: "bg-positive-heavy",
  error: "bg-danger-heavy",
} as const;
