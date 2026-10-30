import { useEffect, useRef, useState } from "react";
import {
  Text,
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
} from "@/components";
import { useTheme } from "@/providers";
import { cn } from "@/utils";
import logoFull from "@docs/assets/root/logo/logo.png";
import logoMin from "@/assets/icons/logo-min.svg";
import {
  INTRO_DESCRIPTION,
  INTRO_DESCRIPTION_REVEAL_MS,
  INTRO_PHRASE_TOTAL_MS,
  INTRO_PHRASES,
  INTRO_TIMING,
  INTRO_TITLE,
} from "./model/constants.ts";

type IntroPhase = "logoFull" | "logoMin" | "phrases" | "title" | "description";

type LandingIntroProps = {
  onComplete: () => void;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const motionReduce =
  "motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:duration-0";

export function LandingIntro({ onComplete }: LandingIntroProps) {
  const { theme } = useTheme();
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const [phase, setPhase] = useState<IntroPhase>(() =>
    prefersReducedMotion() ? "description" : "logoFull"
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseMotion, setPhraseMotion] = useState<"in" | "out">("in");
  const [showFullLogo, setShowFullLogo] = useState(
    () => !prefersReducedMotion()
  );

  useEffect(() => {
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      onCompleteRef.current();
    };

    if (prefersReducedMotion()) {
      const timer = window.setTimeout(finish, INTRO_TIMING.holdMs);
      return () => window.clearTimeout(timer);
    }

    const timers: number[] = [];
    const at = (delay: number, fn: () => void) => {
      timers.push(window.setTimeout(fn, delay));
    };

    let cursor = 0;

    cursor += INTRO_TIMING.logoFullMs;
    at(cursor, () => setPhase("logoMin"));

    cursor += INTRO_TIMING.logoTransitionMs;
    at(cursor, () => setShowFullLogo(false));

    INTRO_PHRASES.forEach((_, index) => {
      at(cursor, () => {
        setPhase("phrases");
        setPhraseIndex(index);
        setPhraseMotion("in");
      });
      at(cursor + INTRO_TIMING.phraseInMs + INTRO_TIMING.phraseHoldMs, () => {
        setPhraseMotion("out");
      });
      cursor += INTRO_PHRASE_TOTAL_MS;
    });

    at(cursor, () => setPhase("title"));
    cursor += INTRO_TIMING.titleInMs;

    at(cursor, () => setPhase("description"));
    cursor += INTRO_DESCRIPTION_REVEAL_MS + INTRO_TIMING.holdMs;

    at(cursor, finish);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const showMinLogo = phase !== "logoFull";
  const showTitle = phase === "title" || phase === "description";
  const showDescription = phase === "description";
  const fullLogoSrc = theme === "dark" ? logoFull : logoMin;

  return (
    <div
      className="relative -translate-y-20 flex flex-col items-center"
      role="status"
      aria-live="polite"
      aria-label="Загрузка Alabuga UI"
    >
      <div
        className={cn(
          "relative flex items-center justify-center transition-[width,height] duration-[400ms] ease-out motion-reduce:transition-none",
          showMinLogo ? "size-[104px]" : "size-[248px]"
        )}
      >
        {showFullLogo && (
          <img
            src={fullLogoSrc}
            alt=""
            className={cn(
              "absolute inset-0 size-full object-contain",
              theme === "dark" && "[mix-blend-mode:screen]",
              motionReduce,
              phase === "logoFull"
                ? "animate-in fade-in duration-500 fill-mode-forwards"
                : "animate-out fade-out duration-[400ms] fill-mode-forwards"
            )}
          />
        )}
        {showMinLogo && (
          <img
            src={logoMin}
            alt=""
            className={cn(
              "size-[104px] object-contain",
              motionReduce,
              "animate-in fade-in zoom-in-75 duration-[400ms] fill-mode-forwards"
            )}
          />
        )}
      </div>

      <div className="absolute top-full mt-2 flex w-max min-w-[320px] flex-col items-center px-2">
        <div className="flex h-20 items-center justify-center overflow-hidden py-2">
          {phase === "phrases" && (
            <Text
              key={phraseIndex}
              as="p"
              variant={TextVariant.H1}
              weight={TextWeight.Bold}
              color={TextColor.Basic}
              shade={TextShade.Primary}
              className={cn(
                "m-0 whitespace-nowrap leading-[1.2]",
                motionReduce,
                phraseMotion === "out"
                  ? "animate-out fade-out slide-out-to-top-full duration-[400ms] fill-mode-forwards ease-in"
                  : "animate-in fade-in slide-in-from-bottom-full duration-[400ms] fill-mode-forwards ease-out"
              )}
            >
              {INTRO_PHRASES[phraseIndex]}
            </Text>
          )}
          {showTitle && (
            <Text
              as="p"
              variant={TextVariant.D2}
              weight={TextWeight.Bold}
              color={TextColor.Basic}
              shade={TextShade.Primary}
              className={cn(
                "m-0 whitespace-nowrap leading-[1.2]",
                motionReduce,
                "animate-in fade-in slide-in-from-bottom-full duration-[400ms] fill-mode-forwards ease-out"
              )}
            >
              {INTRO_TITLE}
            </Text>
          )}
        </div>

        {showDescription && (
          <div className="mt-2 flex flex-col items-center gap-1">
            {INTRO_DESCRIPTION.map((line, index) => (
              <Text
                key={line}
                as="p"
                variant={TextVariant.H3}
                weight={TextWeight.Medium}
                color={TextColor.Basic}
                shade={TextShade.Complementary}
                className={cn(
                  "m-0 whitespace-nowrap leading-[1.2]",
                  motionReduce,
                  "animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-[400ms] ease-out"
                )}
                style={{
                  animationDelay: `${index * INTRO_TIMING.descStaggerMs}ms`,
                }}
              >
                {line}
              </Text>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
