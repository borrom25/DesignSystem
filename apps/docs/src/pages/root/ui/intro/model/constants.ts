export const INTRO_PHRASES = [
  "Для дизайнеров",
  "Для разработчиков",
  "Для продукта",
] as const;

export const INTRO_TITLE = "Alabuga UI";

export const INTRO_DESCRIPTION = [
  "Дизайн-система",
  "Особой экономической зоны",
  "Алабуга",
] as const;

export const INTRO_TIMING = {
  logoFullMs: 800,
  logoTransitionMs: 400,
  phraseInMs: 400,
  phraseHoldMs: 600,
  phraseOutMs: 400,
  titleInMs: 600,
  descInMs: 400,
  descStaggerMs: 350,
  holdMs: 800,
} as const;

export const INTRO_PHRASE_TOTAL_MS =
  INTRO_TIMING.phraseInMs +
  INTRO_TIMING.phraseHoldMs +
  INTRO_TIMING.phraseOutMs;

export const INTRO_DESCRIPTION_REVEAL_MS =
  INTRO_TIMING.descStaggerMs * (INTRO_DESCRIPTION.length - 1) +
  INTRO_TIMING.descInMs;
