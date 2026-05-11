import type { ButtonHTMLAttributes, Ref } from "react";
import type { LucideIcon } from "lucide-react";
import type {
  Color,
  Type,
  Size,
  AsChildTrueProps,
  AsChildFalseProps,
} from "@/types";

export type IconButtonColor = Exclude<Color, "contrastDark" | "contrastLight">;

export const IconButtonType = {
  flat: "flat",
  ghost: "ghost",
  icon: "icon",
} as const satisfies Record<Extract<Type, "flat" | "ghost"> | "icon", string>;

export type IconButtonType =
  (typeof IconButtonType)[keyof typeof IconButtonType];

type BaseIconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled"
> & {
  color?: IconButtonColor;
  type?: IconButtonType;
  size?: Size;
  iconSize?: number;
  rounded?: boolean;
  ref?: Ref<HTMLButtonElement>;
  scaling?: boolean;
};

type IconButtonOnlyProps = {
  icon: LucideIcon;
  htmlType?: "button" | "submit" | "reset";
  count?: number;
  showBadge?: boolean;
  disabled?: boolean;
};

type IconButtonAsButton = AsChildFalseProps<
  BaseIconButtonProps,
  IconButtonOnlyProps
>;

type IconButtonAsChild = AsChildTrueProps<
  BaseIconButtonProps,
  "icon" | "htmlType" | "count" | "showBadge" | "disabled"
>;

export type IconButtonProps = IconButtonAsButton | IconButtonAsChild;
