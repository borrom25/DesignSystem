import { CounterVariant } from "@/components";
import { Size } from "@/types";

export type CounterSize = Extract<
  (typeof Size)[keyof typeof Size],
  "xs" | "sm" | "md"
>;
export type CounterCount = "0" | "3" | "17" | "120";
export type CounterMaxCount = "none" | "9" | "99";

export type CounterPlaygroundState = {
  size: CounterSize;
  variant: (typeof CounterVariant)[keyof typeof CounterVariant];
  count: CounterCount;
  maxCount: CounterMaxCount;
  empty: boolean;
  disabled: boolean;
};

export const COUNTER_DEFAULT_STATE: CounterPlaygroundState = {
  size: Size.Sm,
  variant: CounterVariant.Accent,
  count: "17",
  maxCount: "99",
  empty: false,
  disabled: false,
};
