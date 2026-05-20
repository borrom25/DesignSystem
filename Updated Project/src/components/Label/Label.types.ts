import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { Color, Size, Type } from "@/types";

export type LabelColor = Exclude<
  Color,
  "contrastDark" | "contrastLight" | "generic"
>;
export type LabelType = Extract<Type, "fill" | "outline" | "flat"> | "text";

type BaseLabelProps = Omit<HTMLAttributes<HTMLSpanElement>, "color"> & {
  color?: LabelColor;
  type?: LabelType;
  size?: Size;
  rounded?: boolean;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  disabled?: boolean;
};

type LabelWithIconOnly = BaseLabelProps & {
  iconOnly: LucideIcon;
  children?: never;
};

type LabelWithoutIconOnly = BaseLabelProps & {
  iconOnly?: never;
  children?: ReactNode;
};

export type LabelProps = LabelWithIconOnly | LabelWithoutIconOnly;
