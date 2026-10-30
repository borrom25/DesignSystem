import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size, AsChildTrueProps, AsChildFalseProps } from "@/types";
import type { AvatarProps } from "../Avatar/Avatar.types";

export const ListItemVariant = {
  Default: "default",
  Danger: "danger",
} as const;

export type ListItemVariant =
  (typeof ListItemVariant)[keyof typeof ListItemVariant];

type BaseListItemProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "prefix"
> & {
  size?: Size;
  variant?: ListItemVariant;
  selected?: boolean;
  visualSelected?: boolean;
  iconOnly?: boolean;
  indeterminate?: boolean;
  ref?: Ref<HTMLButtonElement>;
  scaling?: boolean;
  leading?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  wrapText?: boolean;
};

type ListItemOnlyProps = {
  title?: string;
  checkbox?: boolean;
  radio?: boolean;
  avatar?: Omit<AvatarProps, "size" | "style">;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  disabled?: boolean;
  hideSelectedOutline?: boolean;
};

type ListItemAsButton = AsChildFalseProps<BaseListItemProps, ListItemOnlyProps>;

type ListItemWithTitle = ListItemAsButton & {
  title: string;
  children?: never;
};

type ListItemWithChildren = ListItemAsButton & {
  title?: never;
  children: ReactNode;
};

type ListItemAsChild = AsChildTrueProps<
  BaseListItemProps,
  | "title"
  | "checkbox"
  | "radio"
  | "avatar"
  | "leading"
  | "iconLeft"
  | "iconRight"
  | "disabled"
  | "hideSelectedOutline"
>;

export type ListItemProps =
  | ListItemWithTitle
  | ListItemWithChildren
  | ListItemAsChild;
