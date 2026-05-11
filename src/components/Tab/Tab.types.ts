import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size, Type, AsChildTrueProps, AsChildFalseProps } from "@/types";

export type TabType = Extract<Type, "fill" | "ghost" | "outline">;

type BaseTabProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  type?: TabType;
  size?: Size;
  selected?: boolean;
  scaling?: boolean;
};

type TabOnlyProps = {
  iconLeft?: LucideIcon;
  count?: number;
  children: ReactNode;
};

type TabAsButton = AsChildFalseProps<BaseTabProps, TabOnlyProps>;

type TabAsChild = AsChildTrueProps<BaseTabProps, "iconLeft" | "count">;

export type TabProps = TabAsButton | TabAsChild;
