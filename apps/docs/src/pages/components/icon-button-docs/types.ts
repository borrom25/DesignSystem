import { Color, Size } from "@/types";

export type IconButtonType = "flat" | "ghost" | "icon";

export type IconButtonPlaygroundState = {
  type: IconButtonType;
  color: Exclude<
    (typeof Color)[keyof typeof Color],
    "contrastDark" | "contrastLight" | "generic"
  >;
  size: (typeof Size)[keyof typeof Size];
  rounded: boolean;
  disabled: boolean;
  badge: boolean;
};

export const ICON_BUTTON_DEFAULT_STATE: IconButtonPlaygroundState = {
  type: "flat",
  color: Color.Brand,
  size: Size.Sm,
  rounded: false,
  disabled: false,
  badge: false,
};
