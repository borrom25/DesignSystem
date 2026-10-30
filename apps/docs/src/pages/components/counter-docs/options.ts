import { CounterVariant } from "@/components";
import { Size } from "@/types";

export const COUNTER_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];

export const COUNTER_VARIANT_OPTIONS = [
  { value: CounterVariant.Accent, label: "Accent" },
  { value: CounterVariant.Neutral, label: "Neutral" },
  { value: CounterVariant.White, label: "White" },
];

export const COUNTER_VALUE_OPTIONS = [
  { value: "0", label: "0" },
  { value: "3", label: "3" },
  { value: "17", label: "17" },
  { value: "120", label: "120" },
];

export const COUNTER_MAX_OPTIONS = [
  { value: "none", label: "none" },
  { value: "9", label: "9" },
  { value: "99", label: "99" },
];
