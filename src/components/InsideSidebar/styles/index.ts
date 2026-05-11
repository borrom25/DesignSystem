export * from "./base";

import * as insideSidebarBase from "./base";

export const insideSidebarStyles = {
  root: insideSidebarBase.rootClasses,
  rootMobile: insideSidebarBase.rootMobileClasses,
  headerRow: insideSidebarBase.headerRowClasses,
  titleText: insideSidebarBase.titleTextClasses,
  actionSlot: insideSidebarBase.actionSlotClasses,
  separator: insideSidebarBase.separatorClasses,
  headSlot: insideSidebarBase.headSlotClasses,
  contentContainer: insideSidebarBase.contentContainerClasses,
  bottomSlot: insideSidebarBase.bottomSlotClasses,
} as const;
