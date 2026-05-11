import {
  appLayoutRootClasses,
  appLayoutHeaderClasses,
  appLayoutBodyClasses,
  appLayoutSidebarClasses,
  appLayoutMainClasses,
} from "./base";
import { appLayoutContainerClasses } from "./container";

export {
  appLayoutRootClasses,
  appLayoutHeaderClasses,
  appLayoutBodyClasses,
  appLayoutSidebarClasses,
  appLayoutMainClasses,
  appLayoutContainerClasses,
};

export const appLayoutStyles = {
  root: appLayoutRootClasses,
  header: appLayoutHeaderClasses,
  body: appLayoutBodyClasses,
  sidebar: appLayoutSidebarClasses,
  main: appLayoutMainClasses,
  container: appLayoutContainerClasses,
} as const;
