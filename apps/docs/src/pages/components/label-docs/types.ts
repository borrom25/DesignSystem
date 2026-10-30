import { Color, Size, Type } from "@/types";

export type { LabelType } from "@/components/Label/Label.types";
import type { LabelType } from "@/components/Label/Label.types";

export type LabelPlaygroundState = {
  type: LabelType;
  color: Exclude<
    (typeof Color)[keyof typeof Color],
    "contrastDark" | "contrastLight" | "generic"
  >;
  size: (typeof Size)[keyof typeof Size];
  text: string;
  rounded: boolean;
  disabled: boolean;
  iconOnly: boolean;
  withIconRight: boolean;
};

export const LABEL_DEFAULT_STATE: LabelPlaygroundState = {
  type: Type.Fill,
  color: Color.Brand,
  size: Size.Md,
  text: "Label",
  rounded: false,
  disabled: false,
  iconOnly: false,
  withIconRight: false,
};
