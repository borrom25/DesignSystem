export * from "./base";
export * from "./positions";

import * as accordionBase from "./base";
import * as accordionPositions from "./positions";

export const accordionStyles = {
  base: accordionBase.baseClasses,
  content: accordionBase.contentClasses,
  head: accordionBase.headClasses,
  titleGroup: accordionBase.titleGroupClasses,
  titleGroupSingleLine: accordionBase.titleGroupSingleLineClasses,
  icon: accordionBase.iconClasses,
  iconHover: accordionBase.iconHoverClasses,
  iconCustomHover: accordionBase.iconCustomHoverClasses,
  subtitle: accordionBase.subtitleClasses,
  title: accordionBase.titleClasses,
  titleHover: accordionBase.titleHoverClasses,
  actions: accordionBase.actionClasses,
  headBlock: accordionBase.headBlockClasses,
  children: accordionBase.childrenClasses,
  childrenVariants: accordionBase.childrenVariantsClasses,
  childrenHidden: accordionBase.childrenHiddenClasses,
  position: accordionPositions.positionClasses,
  separator: accordionBase.separatorCLasses,
  prefix: accordionBase.prefixClasses,
} as const;
