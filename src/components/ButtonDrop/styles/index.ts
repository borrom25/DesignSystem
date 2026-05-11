export {
  triggerClasses,
  placeholderClasses,
  valueClasses,
  listClasses,
  listItemClasses,
} from "./base";
export {
  triggerPaddingClasses,
  listIconSizeClasses,
  listItemSizeMap,
} from "./sizes";

import {
  triggerClasses,
  placeholderClasses,
  valueClasses,
  listClasses,
  listItemClasses,
} from "./base";
import {
  triggerPaddingClasses,
  listIconSizeClasses,
  listItemSizeMap,
} from "./sizes";

export const buttonDropStyles = {
  trigger: triggerClasses,
  triggerPadding: triggerPaddingClasses,
  placeholder: placeholderClasses,
  value: valueClasses,
  list: listClasses,
  listIconSize: listIconSizeClasses,
  listItem: listItemClasses,
  listItemSizeMap,
} as const;
