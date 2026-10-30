import {
  rootClasses,
  headerClasses,
  bodyClasses,
  sidebarClasses,
  mainClasses,
  containerClasses,
} from "./base";

export {
  rootClasses,
  headerClasses,
  bodyClasses,
  sidebarClasses,
  mainClasses,
  containerClasses,
};

export const mobileAppLayoutStyles = {
  root: rootClasses,
  header: headerClasses,
  body: bodyClasses,
  sidebar: sidebarClasses,
  main: mainClasses,
  container: containerClasses,
} as const;
