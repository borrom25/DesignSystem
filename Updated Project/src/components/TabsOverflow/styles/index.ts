export {
  containerClasses,
  measurementClasses,
  triggerBaseClasses,
  listClasses,
  indicatorClasses,
  itemClasses,
  itemSlotClasses,
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
  itemSlotClasses,
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
  itemSlot: itemSlotClasses,
  listItemSizeMap,
} as const;
