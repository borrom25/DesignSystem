import type { TabType } from "../../Tab.types";
import { fillClasses } from "./fill";
import { ghostClasses } from "./ghost";
import { outlineClasses } from "./outline";

const variantClassesMap: Record<TabType, string> = {
  fill: fillClasses,
  ghost: ghostClasses,
  outline: outlineClasses,
};

export function getVariantClasses(type: TabType): string {
  return variantClassesMap[type] ?? fillClasses;
}
