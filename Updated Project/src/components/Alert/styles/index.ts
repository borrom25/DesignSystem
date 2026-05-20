export {
  actionsClasses,
  animationClasses,
  bodyClasses,
  bodyCompactClasses,
  closeButtonClasses,
  contentClasses,
  contentCompactClasses,
  descriptionClasses,
  iconWrapperClasses,
  rootClasses,
  rootClosableClasses,
  titleClasses,
  titleCompactClasses,
} from "./base";
export { variantClasses } from "./variants";

import {
  actionsClasses,
  animationClasses,
  bodyClasses,
  bodyCompactClasses,
  closeButtonClasses,
  contentClasses,
  contentCompactClasses,
  descriptionClasses,
  iconWrapperClasses,
  rootClasses,
  rootClosableClasses,
  titleClasses,
  titleCompactClasses,
} from "./base";
import { variantClasses } from "./variants";

export const alertStyles = {
  root: rootClasses,
  rootClosable: rootClosableClasses,
  animation: animationClasses,
  content: contentClasses,
  contentCompact: contentCompactClasses,
  iconWrapper: iconWrapperClasses,
  body: bodyClasses,
  bodyCompact: bodyCompactClasses,
  title: titleClasses,
  titleCompact: titleCompactClasses,
  description: descriptionClasses,
  actions: actionsClasses,
  closeButton: closeButtonClasses,
  variant: variantClasses,
} as const;
