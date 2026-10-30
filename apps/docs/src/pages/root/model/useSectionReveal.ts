import { type RefObject, useEffect, useState } from "react";
import { prefersReducedMotion, SECTION_REVEAL } from "./revealTiming.ts";

type UseSectionRevealOptions = {
  enabled?: boolean;
  delayMs?: number;
  observe?: boolean;
};

export const useSectionReveal = (
  ref: RefObject<HTMLElement | null>,
  { enabled = true, delayMs = 0, observe = true }: UseSectionRevealOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(
    () => enabled && prefersReducedMotion()
  );

  useEffect(() => {
    if (!enabled) {
      setIsVisible(false);
      return;
    }

    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    let delayTimer: number | undefined;
    const show = () => {
      if (delayMs <= 0) {
        setIsVisible(true);
        return;
      }
      delayTimer = window.setTimeout(() => setIsVisible(true), delayMs);
    };

    if (!observe) {
      show();
      return () => {
        if (delayTimer !== undefined) window.clearTimeout(delayTimer);
      };
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      show();
      observer.unobserve(el);
    }, SECTION_REVEAL);

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (delayTimer !== undefined) window.clearTimeout(delayTimer);
    };
  }, [delayMs, enabled, observe, ref]);

  return { isVisible };
};
