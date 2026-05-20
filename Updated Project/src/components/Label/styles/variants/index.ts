import type { LabelColor, LabelType } from "../../Label.types";
import { fillClasses } from "./fill";
import { textClasses } from "./text";
import { outlineClasses } from "./outline";
import { flatClasses } from "./flat";

const variantClassesMap: Record<LabelType, Record<LabelColor, string>> = {
  fill: fillClasses,
  outline: outlineClasses,
  flat: flatClasses,
  text: textClasses,
};

export function getVariantClasses(type: LabelType, color: LabelColor): string {
  return variantClassesMap[type]?.[color] ?? fillClasses[color];
}
