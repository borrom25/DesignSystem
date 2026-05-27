import { CardVariant } from "../Card.types";

export const cardVariantClasses: Record<CardVariant, string> = {
  surface: "bg-generic hover:shadow-popover",
  nested: "bg-generic-medium hover:bg-generic-medium-hover",
} as const;
