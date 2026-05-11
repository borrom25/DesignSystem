import {
  actionsClasses,
  contentClasses,
  logoImageClasses,
  logoSectionClasses,
  logoWrapperClasses,
  notificationButtonClasses,
  rootClasses,
  separatorClasses,
  titleClasses,
} from "./base.ts";

export {
  actionsClasses,
  contentClasses,
  logoImageClasses,
  logoSectionClasses,
  logoWrapperClasses,
  notificationButtonClasses,
  rootClasses,
  separatorClasses,
  titleClasses,
} from "./base.ts";

export const headerStyles = {
  root: rootClasses,
  content: contentClasses,
  logoSection: logoSectionClasses,
  notificationButton: notificationButtonClasses,
  logoWrapper: logoWrapperClasses,
  logoImage: logoImageClasses,
  title: titleClasses,
  separator: separatorClasses,
  actions: actionsClasses,
} as const;
