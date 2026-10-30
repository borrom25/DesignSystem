import { cardBaseClasses } from "./base";
import {
  actionSlotClasses,
  contentLayoutClasses,
  headerClasses,
  headerSubtitleTextClasses,
  headerTextClasses,
  headerTitleTextClasses,
} from "./header";
import { cardSizeClasses } from "./sizes";
import { cardHoverClasses, cardVariantClasses } from "./variants";

export { cardBaseClasses, cardSizeClasses, cardVariantClasses };

export const cardStyles = {
  base: cardBaseClasses,
  size: cardSizeClasses,
  variant: cardVariantClasses,
  hover: cardHoverClasses,
  header: headerClasses,
  headerText: headerTextClasses,
  headerTitleText: headerTitleTextClasses,
  headerSubtitleText: headerSubtitleTextClasses,
  actionSlot: actionSlotClasses,
  contentLayout: contentLayoutClasses,
} as const;
