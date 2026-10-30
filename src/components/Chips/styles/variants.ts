import type { ChipsAppearance } from "../Chips.types";

export const fillClasses =
  "bg-generic-medium text-secondary hover:bg-generic-medium-hover hover:text-secondary aria-pressed:bg-brand-light aria-pressed:text-brand-heavy aria-pressed:hover:bg-brand-light-hover aria-pressed:hover:text-brand-heavy disabled:bg-generic-disabled disabled:text-hint aria-disabled:bg-generic-disabled aria-disabled:text-hint";

export const outlineClasses =
  "border border-line bg-transparent text-secondary hover:border-line-hover hover:bg-generic-medium hover:text-secondary aria-pressed:border-brand-line-heavy aria-pressed:bg-brand-light aria-pressed:text-brand-heavy aria-pressed:hover:bg-brand-light-hover aria-pressed:hover:text-brand-heavy disabled:border-line-disabled-hover disabled:bg-transparent disabled:text-hint aria-disabled:border-line-disabled-hover aria-disabled:bg-transparent aria-disabled:text-hint";

const variantClassesMap: Record<ChipsAppearance, string> = {
  fill: fillClasses,
  outline: outlineClasses,
};

export const getVariantClasses = (type: ChipsAppearance): string =>
  variantClassesMap[type];
