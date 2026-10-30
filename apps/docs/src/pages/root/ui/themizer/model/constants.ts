import desktopLastLight from "../../../../../assets/root/patterns/DesktopLastLight.svg";
import themizerDark from "../../../../../assets/root/themizer/ThemizerDark.svg";

export const DESIGN_WIDTH = 1580;
export const DESIGN_HEIGHT = 550;
export const IMAGE_WIDTH = 1060;

export const ENTER_OFFSET_Y = 100;
export const ANIMATION_DELAY_STEP_S = 0.2;

export const IMAGE_SHADOW = "drop-shadow(0 16px 20px rgba(25, 25, 26, 0.22))";

export const IMAGE_TRANSITION =
  "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease, filter 0.8s ease";

export const IMAGE_LAYOUT = [
  { src: themizerDark, zIndex: 1, offsetX: -140, offsetY: 100 },
  { src: desktopLastLight, zIndex: 2, offsetX: 200, offsetY: 0 },
] as const;

export type ThemizerImageLayout = (typeof IMAGE_LAYOUT)[number];
