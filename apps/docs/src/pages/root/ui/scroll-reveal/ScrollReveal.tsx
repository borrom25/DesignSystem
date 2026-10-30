import { type ReactNode } from "react";
import {
  mediaRevealIn,
  revealClassName,
  revealDelayStyle,
} from "./revealStyles.ts";
import { useSectionRevealState } from "./SectionReveal.tsx";
import { REVEAL_CHILD } from "../../model/revealTiming.ts";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export function ScrollReveal({
  children,
  className,
  index = REVEAL_CHILD.cta,
}: ScrollRevealProps) {
  const { isVisible, childDelay } = useSectionRevealState();
  const delayMs = childDelay(index);

  return (
    <div
      className={revealClassName(isVisible, mediaRevealIn, className)}
      style={revealDelayStyle(isVisible, delayMs)}
    >
      {children}
    </div>
  );
}
