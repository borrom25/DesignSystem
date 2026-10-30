import { Size, Type } from "@/types";

export type TabAppearance = "fill" | "ghost" | "outline";

export type TabPlaygroundState = {
  type: TabAppearance;
  size: (typeof Size)[keyof typeof Size];
  selected: boolean;
  disabled: boolean;
  scaling: boolean;
  iconLeft: boolean;
  count: boolean;
};

export const TAB_DEFAULT_STATE: TabPlaygroundState = {
  type: Type.Fill,
  size: Size.Md,
  selected: true,
  disabled: false,
  scaling: false,
  iconLeft: true,
  count: true,
};
