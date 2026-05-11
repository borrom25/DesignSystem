export {
  containerClasses,
  measurementClasses,
  triggerBaseClasses,
  listClasses,
  indicatorClasses,
  itemClasses,
} from "./base";
export { triggerSizeClasses, listItemSizeMap } from "./sizes";
export { tabStateClasses, moreTriggerStateClasses } from "./variants";

import {
  containerClasses,
  measurementClasses,
  triggerBaseClasses,
  listClasses,
  indicatorClasses,
  itemClasses,
  inlineItemClasses,
} from "./base";
import { triggerSizeClasses, listItemSizeMap } from "./sizes";
import { tabStateClasses, moreTriggerStateClasses } from "./variants";

export const tabsOverflowStyles = {
  container: containerClasses,
  measurement: measurementClasses,
  triggerBase: triggerBaseClasses,
  triggerSize: triggerSizeClasses,
  tabState: tabStateClasses,
  moreTriggerState: moreTriggerStateClasses,
  list: listClasses,
  indictor: indicatorClasses,
  item: itemClasses,
  inlineItem: inlineItemClasses,
  listItemSizeMap,
} as const;
