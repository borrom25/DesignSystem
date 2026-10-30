import { Color } from "@/types";

export const quickStartLink = {
  title: "Быстрый старт",
  to: "quick-start",
  color: Color.Brand,
} as const;

export const HERO_STEPS = [
  "logo",
  "title",
  "description",
  "btnQuickStart",
  "cardDesigners",
  "cardDevelopers",
  "cursors",
] as const;

export type HeroStep = (typeof HERO_STEPS)[number];

export const CARD_STEPS = ["cardDesigners", "cardDevelopers"] as const;

export const HERO_TIMING = {
  logoInMs: 500,
  stepInMs: 400,
  stepGapMs: 160,
} as const;

export const HERO_LOGO_FRAME = {
  box: "relative h-[156px] w-[168px] overflow-hidden",
  img: "absolute left-1/2 top-[55%] size-[352px] max-w-none -translate-x-1/2 -translate-y-1/2",
} as const;

export const HERO_CURSORS = [
  {
    id: "green",
    className: "left-[calc(50%-26.5rem)] top-[10.25rem]",
    imgClassName: "h-20 w-auto [animation:green_5s_linear_infinite]",
    delayMs: 0,
  },
  {
    id: "pink",
    className: "left-[calc(50%+11rem)] top-[9.75rem]",
    imgClassName: "h-20 w-auto [animation:pink_6s_linear_infinite]",
    delayMs: 140,
  },
  {
    id: "yellow",
    className: "left-[calc(50%+6.5rem)] top-[23.25rem]",
    imgClassName: "h-[4.5rem] w-auto [animation:yellow_4s_linear_infinite]",
    delayMs: 280,
  },
] as const;
