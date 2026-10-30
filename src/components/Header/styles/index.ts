import {
  actionsClasses,
  contentClasses,
  logoImageClasses,
  logoSectionClasses,
  logoWrapperClasses,
  notificationButtonClasses,
  rootClasses,
  rootPositionClasses,
  separatorClasses,
  titleClasses,
  menuList,
} from "./base.ts";

export {
  actionsClasses,
  contentClasses,
  logoImageClasses,
  logoSectionClasses,
  logoWrapperClasses,
  notificationButtonClasses,
  rootClasses,
  rootPositionClasses,
  separatorClasses,
  titleClasses,
  menuList,
} from "./base.ts";

export const headerStyles = {
  root: rootClasses,
  rootPosition: rootPositionClasses,
  content: contentClasses,
  logoSection: logoSectionClasses,
  notificationButton: notificationButtonClasses,
  logoWrapper: logoWrapperClasses,
  logoImage: logoImageClasses,
  title: titleClasses,
  separator: separatorClasses,
  actions: actionsClasses,
  menuList: menuList,
} as const;
