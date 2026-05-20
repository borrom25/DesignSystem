import { cardBaseClasses } from "./base";
import { cardSizeClasses } from "./sizes";

export { cardBaseClasses, cardSizeClasses };

export const cardStyles = {
  base: cardBaseClasses,
  size: cardSizeClasses,
} as const;
