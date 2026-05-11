export * from "./base";
export * from "./positions";

import * as accordionBase from "./base";
import * as accordionPositions from "./positions";

export const accordionStyles = {
  base: accordionBase.baseClasses,
  content: accordionBase.contentClasses,
  head: accordionBase.headClasses,
  icon: accordionBase.iconClasses,
  subtitle: accordionBase.subtitleClasses,
  title: accordionBase.titleClasses,
  actions: accordionBase.actionClasses,
  headBlock: accordionBase.headBlockClasses,
  children: accordionBase.childrenClasses,
  childrenVariants: accordionBase.childrenVariantsClasses,
  childrenHidden: accordionBase.childrenHiddenClasses,
  position: accordionPositions.positionClasses,
  separator: accordionBase.separatorCLasses,
} as const;
