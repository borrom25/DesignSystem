import { BlockVariant } from "@/components";
import { Size } from "@/types";

export const ACCORDION_BLOCK_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];

export const ACCORDION_BLOCK_VARIANT_OPTIONS = [
  { value: BlockVariant.Basic, label: "Basic" },
  { value: BlockVariant.Secondary, label: "Secondary" },
];

export const ACCORDION_BLOCK_PROGRESS_OPTIONS = [
  { value: "0", label: "0%" },
  { value: "5", label: "5%" },
  { value: "15", label: "15%" },
  { value: "50", label: "50%" },
  { value: "100", label: "100%" },
];

export const ACCORDION_BLOCK_LABEL_POSITION_OPTIONS = [
  { value: "end" as const, label: "End" },
  { value: "top" as const, label: "Top" },
];
