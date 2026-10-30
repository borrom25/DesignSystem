export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const SECTION_REVEAL = {
  threshold: 0,
  rootMargin: "0px 0px -12% 0px",
} as const;

/** Matches the -12% bottom rootMargin: first-wave if top is above this share of the viewport. */
export const FIRST_VIEW_BOTTOM_RATIO = 0.88;

export const REVEAL_TIMING = {
  headDurationMs: 500,
  mediaDurationMs: 700,
  childStaggerMs: 120,
  sectionCascadeMs: 400,
} as const;

export const REVEAL_CHILD = {
  icon: 0,
  title: 1,
  description: 2,
  cta: 3,
  media: 4,
} as const;

export type LandingSectionId =
  | "components"
  | "patterns"
  | "themizer"
  | "icons"
  | "connection"
  | "footer";

export const isSectionInFirstView = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const limit = window.innerHeight * FIRST_VIEW_BOTTOM_RATIO;
  return rect.top < limit && rect.bottom > 0;
};

export const isSectionAboveView = (el: HTMLElement) =>
  el.getBoundingClientRect().bottom <= 0;

export const schedulePaint = (fn: () => void) => {
  let innerId = 0;
  const outerId = window.requestAnimationFrame(() => {
    innerId = window.requestAnimationFrame(fn);
  });

  return () => {
    window.cancelAnimationFrame(outerId);
    window.cancelAnimationFrame(innerId);
  };
};
