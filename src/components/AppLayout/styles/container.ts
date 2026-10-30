import type { CSSProperties } from "react";

const containerTransitionClasses =
  "transition-[max-width,padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

const containerPaddingClasses = "px-7";
const containerBaseClasses = `mx-auto flex min-h-full w-full flex-col ${containerPaddingClasses} ${containerTransitionClasses}`;

export const appLayoutContainerClasses = {
  default: `${containerBaseClasses} max-w-[1000px]`,
  fill: `flex h-full min-h-0 w-full flex-col pr-7 ${containerTransitionClasses}`,
} as const;

export function getAppLayoutContainerStyle(
  isFill: boolean,
  size?: number
): CSSProperties | undefined {
  return !isFill && size !== undefined ? { maxWidth: size } : undefined;
}
