import type { Color, Type } from "@/types";
import { fillClasses } from "./fill";
import { ghostClasses } from "./ghost";
import { outlineClasses } from "./outline";
import { flatClasses } from "./flat";

const variantClassesMap: Record<Type, Record<Color, string>> = {
  fill: fillClasses,
  outline: outlineClasses,
  flat: flatClasses,
  ghost: ghostClasses,
};

export function getVariantClasses(type: Type, color: Color): string {
  return variantClassesMap[type]?.[color] ?? fillClasses[color];
}

export function getDisabledClasses(type: Type): string {
  const disabledClassesMap: Record<Type, string> = {
    fill: "rounded-xs border border-line-disabled bg-generic-disabled text-hint",
    outline: "rounded-xs border border-line-disabled-hover text-hint",
    ghost: "text-hint",
    flat: "rounded-xs border border-line-disabled bg-generic-disabled text-hint",
  };

  return disabledClassesMap[type] ?? disabledClassesMap.fill;
}
