import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../../model/revealTiming.ts";
import { HERO_STEPS, HERO_TIMING, type HeroStep } from "./constants.ts";

export const useHeroReveal = (enabled: boolean) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    if (prefersReducedMotion()) {
      setVisibleCount(HERO_STEPS.length);
      return;
    }

    setVisibleCount(1);

    const timers: number[] = [];
    let cursor = HERO_TIMING.logoInMs + HERO_TIMING.stepGapMs;

    for (let index = 1; index < HERO_STEPS.length; index += 1) {
      const nextCount = index + 1;
      timers.push(window.setTimeout(() => setVisibleCount(nextCount), cursor));
      cursor += HERO_TIMING.stepInMs + HERO_TIMING.stepGapMs;
    }

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [enabled]);

  const isVisible = (step: HeroStep) => visibleCount > HERO_STEPS.indexOf(step);

  return { isVisible, isComplete: visibleCount >= HERO_STEPS.length };
};
