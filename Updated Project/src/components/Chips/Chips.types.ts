import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size, Type, AsChildTrueProps, AsChildFalseProps } from "@/types";

export type ChipsAppearance = Extract<Type, "fill" | "outline">;

type BaseChipsProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  size?: Size;
  type?: ChipsAppearance;
  selected?: boolean;
  scaling?: boolean;
};

type ChipsOnlyProps = {
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  count?: number;
  disabled?: boolean;
};

type ChipsAsButton = AsChildFalseProps<BaseChipsProps, ChipsOnlyProps>;

type ChipsWithIconOnly = ChipsAsButton & {
  iconOnly: LucideIcon;
  children?: never;
};

type ChipsWithoutIconOnly = ChipsAsButton & {
  iconOnly?: never;
  children?: ReactNode;
};

type ChipsAsChild = AsChildTrueProps<
  BaseChipsProps,
  "iconLeft" | "iconRight" | "iconOnly" | "count" | "disabled"
>;

export type ChipsProps =
  | ChipsWithIconOnly
  | ChipsWithoutIconOnly
  | ChipsAsChild;
