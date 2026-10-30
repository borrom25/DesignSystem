import { Size } from "@/types";

export type TabsOverflowValue =
  | "overview"
  | "analytics"
  | "reports"
  | "history"
  | "settings"
  | "access";

export type TabsOverflowPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  value: TabsOverflowValue;
  disabled: boolean;
  sideMenu: boolean;
};

export const TABS_OVERFLOW_DEFAULT_STATE: TabsOverflowPlaygroundState = {
  size: Size.Md,
  value: "overview",
  disabled: false,
  sideMenu: false,
};
