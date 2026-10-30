import { Size, Type } from "@/types";

export type ChipsPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  type: Extract<(typeof Type)[keyof typeof Type], "fill" | "outline">;
  text: string;
  selected: boolean;
  disabled: boolean;
  scaling: boolean;
  iconOnly: boolean;
  withLeftIcon: boolean;
  withRightIcon: boolean;
  withCounter: boolean;
  count: "1" | "3" | "12";
};

export const CHIPS_DEFAULT_STATE: ChipsPlaygroundState = {
  size: Size.Md,
  type: Type.Fill,
  text: "Chips",
  selected: false,
  disabled: false,
  scaling: true,
  iconOnly: false,
  withLeftIcon: false,
  withRightIcon: false,
  withCounter: false,
  count: "3",
};
