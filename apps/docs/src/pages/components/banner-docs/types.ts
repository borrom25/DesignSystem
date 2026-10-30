import { Color } from "@/types";
import { BannerSize } from "@/components";

export type BannerPlaygroundState = {
  text: string;
  size: BannerSize;
  color: Color;
};

export const BANNER_DEFAULT_STATE: BannerPlaygroundState = {
  text: "New billing dashboard is available for all workspace admins.",
  size: BannerSize.xs,
  color: Color.Brand,
};
