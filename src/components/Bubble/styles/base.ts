import type { BubbleSide } from "../Bubble.types";

export const containerBaseClasses = "flex w-fit max-w-[420px] min-w-0 flex-col";

export const textClasses = "whitespace-pre-wrap break-words leading-normal";

export const alignmentClasses: Record<BubbleSide, string> = {
  incoming: "self-start",
  outgoing: "self-end",
} as const;

export const shellBaseClasses =
  "min-w-0 overflow-hidden font-roboto-flex shadow-sm text-primary";

export const shellRadiusClasses: Record<BubbleSide, string> = {
  incoming: "rounded-[10px] rounded-bl-none",
  outgoing: "rounded-[10px] rounded-br-none",
} as const;

export const shellSideClasses: Record<BubbleSide, string> = {
  incoming: "bg-brand-light",
  outgoing: "bg-generic-medium",
} as const;
