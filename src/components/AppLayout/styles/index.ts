import {
  appLayoutRootClasses,
  appLayoutHeaderClasses,
  appLayoutBodyClasses,
  appLayoutSidebarClasses,
  appLayoutMainClasses,
} from "./base";
import {
  appLayoutContainerClasses,
  getAppLayoutContainerStyle,
} from "./container";

export {
  appLayoutRootClasses,
  appLayoutHeaderClasses,
  appLayoutBodyClasses,
  appLayoutSidebarClasses,
  appLayoutMainClasses,
  appLayoutContainerClasses,
  getAppLayoutContainerStyle,
};

export { getAppLayoutSidebarStyle } from "./sidebar";

export const appLayoutStyles = {
  root: appLayoutRootClasses,
  header: appLayoutHeaderClasses,
  body: appLayoutBodyClasses,
  sidebar: appLayoutSidebarClasses,
  main: appLayoutMainClasses,
  container: appLayoutContainerClasses,
  getContainerStyle: getAppLayoutContainerStyle,
} as const;
