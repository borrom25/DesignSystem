import type { CounterVariant } from "../Counter.types";

export const variantClasses: Record<CounterVariant, string> = {
  accent: "bg-action-heavy text-on-brand",
  neutral: "bg-generic-heavy text-inverse-text-medium",
  white: "bg-contrast-light-heavy text-contrast-dark-text-heavy",
} as const;
