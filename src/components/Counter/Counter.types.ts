import type { HTMLAttributes } from "react";
import type { Size } from "@/types";

export const CounterVariant = {
  Accent: "accent",
  Neutral: "neutral",
  White: "white",
} as const;

export type CounterVariant =
  (typeof CounterVariant)[keyof typeof CounterVariant];

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CounterVariant;
  size?: Size;
  count: number;
  maxCount?: number;
  empty?: boolean;
}
