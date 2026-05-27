import { cardBaseClasses } from "./base";
import {
  actionSlotClasses,
  actionSlotPositionClasses,
  contentLayoutClasses,
  headerTextClasses,
  headerTextWithActionClasses,
  subtitleClasses,
  titleClasses,
  withActionSlotClasses,
} from "./header";
import { cardSizeClasses } from "./sizes";
import { cardVariantClasses } from "./variants";

export { cardBaseClasses, cardSizeClasses, cardVariantClasses };

export const cardStyles = {
  base: cardBaseClasses,
  size: cardSizeClasses,
  variant: cardVariantClasses,
  withActionSlot: withActionSlotClasses,
  headerText: headerTextClasses,
  headerTextWithAction: headerTextWithActionClasses,
  title: titleClasses,
  subtitle: subtitleClasses,
  actionSlot: actionSlotClasses,
  actionSlotPosition: actionSlotPositionClasses,
  contentLayout: contentLayoutClasses,
} as const;
