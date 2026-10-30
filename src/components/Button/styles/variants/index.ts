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
    fill: "border-none bg-generic-disabled text-hint",
    outline:
      "border border-line-disabled bg-transparent text-hint hover:bg-transparent",
    ghost: "bg-transparent text-hint hover:bg-transparent",
    flat: "border-none bg-generic-disabled text-hint",
  };

  return disabledClassesMap[type] ?? disabledClassesMap.fill;
}
