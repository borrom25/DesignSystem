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
  "type"
> & {
  size?: Size;
  variant?: ListItemVariant;
  selected?: boolean;
  visualSelected?: boolean;
  iconOnly?: boolean;
  ref?: Ref<HTMLButtonElement>;
  scaling?: boolean;
};

type ListItemOnlyProps = {
  title?: string;
  checkbox?: boolean;
  avatar?: Omit<AvatarProps, "size" | "style">;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  suffix?: ReactNode;
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
  | "avatar"
  | "iconLeft"
  | "iconRight"
  | "suffix"
  | "disabled"
  | "hideSelectedOutline"
>;

export type ListItemProps =
  | ListItemWithTitle
  | ListItemWithChildren
  | ListItemAsChild;
