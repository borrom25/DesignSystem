export {
  contentBaseClasses,
  contentPageZIndexClasses,
  contentModalZIndexClasses,
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
  contentPageZIndexClasses,
  contentModalZIndexClasses,
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
  contentPageZIndex: contentPageZIndexClasses,
  contentModalZIndex: contentModalZIndexClasses,
  surface: surfaceClasses,
  header: headerClasses,
  title: titleClasses,
  subTitle: subTitleClasses,
  iconWrapper: iconWrapperClasses,
  actionSlot: actionSlotClasses,
  arrow: arrowClasses,
  animation: tooltipAnimationClasses,
} as const;
