import { Size } from "@/types";
import { ListItemVariant } from "@/components";

export const LIST_ITEM_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];

export const LIST_ITEM_VARIANT_OPTIONS = [
  { value: ListItemVariant.Default, label: "Default" },
  { value: ListItemVariant.Danger, label: "Danger" },
];
