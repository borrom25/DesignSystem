import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import type { LucideIcon } from "lucide-react";
import type {
  Color,
  Size,
  Type,
  HtmlType,
  AsChildTrueProps,
  AsChildFalseProps,
} from "@/types";

type BaseButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled"
> & {
  color?: Color;
  type?: Type;
  size?: Size;
  ref?: Ref<HTMLButtonElement>;
  scaling?: boolean;
};

type ButtonOnlyProps = {
  htmlType?: HtmlType;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  count?: number;
  loading?: boolean;
  disabled?: boolean;
};

type ButtonAsButton = AsChildFalseProps<BaseButtonProps, ButtonOnlyProps>;

type ButtonWithIconOnly = ButtonAsButton & {
  iconOnly?: LucideIcon;
};

type ButtonWithoutIconOnly = ButtonAsButton & {
  iconOnly?: never;
  children?: ReactNode;
};

type ButtonAsChild = AsChildTrueProps<
  BaseButtonProps,
  | "htmlType"
  | "iconLeft"
  | "iconRight"
  | "iconOnly"
  | "count"
  | "loading"
  | "disabled"
>;

export type ButtonProps =
  | ButtonWithIconOnly
  | ButtonWithoutIconOnly
  | ButtonAsChild;
