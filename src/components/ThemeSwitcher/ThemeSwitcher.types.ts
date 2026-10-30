import type { Theme } from "@/providers";
import type { Size } from "@/types";
import type { SegmentedOption } from "@/components/Segmented/Segmented.types";

export type ThemeSwitcherProps = {
  className?: string;
  /** Total height: xs = 40px, sm = 48px, md = 56px. */
  size?: Size;
};

export type ThemeSwitcherOption = SegmentedOption<Theme>;
