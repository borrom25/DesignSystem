import { cn } from "@/utils";

export const motionReduce =
  "motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:duration-0";

export const headRevealIn =
  "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both ease-out";

export const mediaRevealIn =
  "animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both ease-out";

export function revealDelayStyle(isVisible: boolean, delayMs: number) {
  return isVisible ? { animationDelay: `${delayMs}ms` } : undefined;
}

export function revealClassName(
  isVisible: boolean,
  animation: string,
  className?: string
) {
  return cn(className, motionReduce, isVisible ? animation : "opacity-0");
}
