import type { HTMLAttributes } from "react";
import { Color } from "@/types";

export const BannerSize = {
  xs: "xs",
  sm: "sm",
} as const;

export type BannerSize = (typeof BannerSize)[keyof typeof BannerSize];

export type BannerProps = HTMLAttributes<HTMLDivElement> & {
  color?: Color;
  size?: BannerSize;
};
