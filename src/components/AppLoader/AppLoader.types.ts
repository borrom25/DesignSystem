import type { HTMLAttributes, SVGAttributes } from "react";

export interface AppLoaderProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
  ariaLabel?: string;
}

export interface AppLoaderInContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  ariaLabel?: string;
}
