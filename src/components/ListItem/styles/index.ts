export * from "./base";
export * from "./sizes";
export * from "./variants";
export * from "./rightGroup";
export * from "./icon";

import * as listItemBase from "./base";
import * as listItemSizes from "./sizes";
import * as listItemVariants from "./variants";
import * as listItemRightGroup from "./rightGroup";
import * as listItemIcon from "./icon";

export const listItemStyles = {
  base: listItemBase.baseClasses,
  text: listItemBase.textClasses,
  size: listItemSizes.sizeClasses,
  iconOnlySize: listItemSizes.iconOnlySizeClasses,
  titleSize: listItemSizes.titleSizeClasses,
  iconSizeMap: listItemSizes.iconSizeMap,
  avatarSizeMap: listItemSizes.avatarSizeMap,
  getVariant: listItemVariants.getVariantClasses,
  rightGroup: listItemRightGroup.rightGroupClasses,
  icon: listItemIcon.iconClasses,
} as const;
