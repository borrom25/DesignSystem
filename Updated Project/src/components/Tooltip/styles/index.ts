export {
  contentBaseClasses,
  surfaceClasses,
  headerClasses,
  titleClasses,
  subTitleClasses,
  iconWrapperClasses,
  actionSlotClasses,
  arrowClasses,
} from "./base";
export { tooltipAnimationClasses } from "./animations";

import {
  contentBaseClasses,
  surfaceClasses,
  headerClasses,
  titleClasses,
  subTitleClasses,
  iconWrapperClasses,
  actionSlotClasses,
  arrowClasses,
} from "./base";
import { tooltipAnimationClasses } from "./animations";

export const tooltipStyles = {
  contentBase: contentBaseClasses,
  surface: surfaceClasses,
  header: headerClasses,
  title: titleClasses,
  subTitle: subTitleClasses,
  iconWrapper: iconWrapperClasses,
  actionSlot: actionSlotClasses,
  arrow: arrowClasses,
  animation: tooltipAnimationClasses,
} as const;
