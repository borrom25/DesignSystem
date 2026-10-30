import * as accordionBlockBase from "./base";
import { accordionBlockSizeClasses } from "./sizes";

export const accordionBlockStyles = {
  root: accordionBlockBase.rootClasses,
  size: accordionBlockSizeClasses,
  nested: accordionBlockBase.nestedClasses,
  body: accordionBlockBase.bodyClasses,
  header: accordionBlockBase.headerClasses,
  titleRow: accordionBlockBase.titleRowClasses,
  chevron: accordionBlockBase.chevronClasses,
  chevronOpen: accordionBlockBase.chevronOpenClasses,
  headSlot: accordionBlockBase.headSlotClasses,
  description: accordionBlockBase.descriptionClasses,
  descriptionText: accordionBlockBase.descriptionTextClasses,
  progressLayout: {
    end: {
      root: accordionBlockBase.progressClasses,
      bar: accordionBlockBase.progressBarClasses,
      value: accordionBlockBase.progressValueClasses,
    },
    top: {
      root: accordionBlockBase.progressTopClasses,
      bar: accordionBlockBase.progressBarTopClasses,
      value: accordionBlockBase.progressValueTopClasses,
    },
  },
  children: accordionBlockBase.childrenClasses,
  childrenVariants: accordionBlockBase.childrenVariantsClasses,
  childrenClip: accordionBlockBase.childrenClipClasses,
  childrenInner: accordionBlockBase.childrenInnerClasses,
} as const;
