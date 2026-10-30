import { Size } from "@/types";
import { ListItemVariant } from "@/components";

export type ListItemPlaygroundState = {
  title: string;
  size: (typeof Size)[keyof typeof Size];
  variant: (typeof ListItemVariant)[keyof typeof ListItemVariant];
  selected: boolean;
  disabled: boolean;
  checkbox: boolean;
  scaling: boolean;
  iconOnly: boolean;
  withLeftIcon: boolean;
  withRightIcon: boolean;
  withAvatar: boolean;
  hideSelectedOutline: boolean;
  wrapText: boolean;
};

export const LIST_ITEM_DEFAULT_STATE: ListItemPlaygroundState = {
  title: "List Item",
  size: Size.Sm,
  variant: ListItemVariant.Default,
  selected: false,
  disabled: false,
  checkbox: false,
  scaling: true,
  iconOnly: false,
  withLeftIcon: true,
  withRightIcon: true,
  withAvatar: false,
  hideSelectedOutline: false,
  wrapText: true,
};
