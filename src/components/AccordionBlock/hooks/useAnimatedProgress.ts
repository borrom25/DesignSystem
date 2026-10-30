import { useEffect, useMemo, useState } from "react";
import { clampProgress } from "../../ProgressBar/ProgressBar.utils";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

let reducedMotionMq: MediaQueryList | null | undefined;

function getReducedMotionMq() {
  if (typeof window === "undefined") return null;
  reducedMotionMq ??= window.matchMedia(REDUCED_MOTION_QUERY);
  return reducedMotionMq;
}

function prefersReducedMotion() {
  return getReducedMotionMq()?.matches ?? false;
}

export function useAnimatedProgress(progress?: number) {
  const clamped = progress == null ? undefined : clampProgress(progress);
  const [barProgress, setBarProgress] = useState(() =>
    clamped != null && prefersReducedMotion() ? clamped : 0
  );

  useEffect(() => {
    if (clamped == null) return;

    const applyProgress = (value: number) => {
      setBarProgress((current) => (current === value ? current : value));
    };

    if (prefersReducedMotion()) {
      applyProgress(clamped);
      return;
    }

    const frame = requestAnimationFrame(() => applyProgress(clamped));
    return () => cancelAnimationFrame(frame);
  }, [clamped]);

  return useMemo(() => {
    if (clamped == null) return;
    return { label: clamped, bar: barProgress } as const;
  }, [barProgress, clamped]);
}
