import { Size } from "@/types";

export type SegmentedPlaygroundState = {
  position: "horizontal" | "vertical";
  shape: "default" | "round";
  size: (typeof Size)[keyof typeof Size];
  withDisabledOption: boolean;
};

export const SEGMENTED_DEFAULT_STATE: SegmentedPlaygroundState = {
  position: "horizontal",
  shape: "default",
  size: Size.Sm,
  withDisabledOption: false,
};
