import { CardVariant } from "../Card.types";

export const cardVariantClasses: Record<CardVariant, string> = {
  basic: "border border-line bg-generic",
  secondary: "bg-generic-medium",
} as const;

export const cardHoverClasses: Record<CardVariant, string> = {
  basic:
    "transition-shadow duration-0 ease-out hover:duration-400 hover:shadow-card",
  secondary: "hover:bg-generic-medium-hover",
} as const;
