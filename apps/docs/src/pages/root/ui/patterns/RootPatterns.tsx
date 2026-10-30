import { HeadBlock } from "../../ui/head-block/HeadBlock.tsx";
import { rootText } from "../../model/contants.ts";
import { Button } from "@/components";
import { Link } from "react-router-dom";
import { Color, Size } from "@/types";
import { useTheme } from "@/providers";
import { useEffect, useRef, useState } from "react";
import { patternsImages } from "./model/constants.ts";
import { ScrollReveal } from "../scroll-reveal/ScrollReveal.tsx";
import {
  SectionReveal,
  useRevealChildEnabled,
} from "../scroll-reveal/SectionReveal.tsx";
import {
  prefersReducedMotion,
  REVEAL_CHILD,
  schedulePaint,
} from "../../model/revealTiming.ts";

const IMAGE_LAYOUT = [
  { zIndex: 1, offsetX: -700, offsetY: 408 },
  { zIndex: 2, offsetX: 0, offsetY: 0 },
  { zIndex: 3, offsetX: 850, offsetY: 358 },
] as const;

const IMAGE_WIDTH_PX = 2300;
const DESIGN_WIDTH = 2990;
const DESIGN_HEIGHT = 1640;
const IMAGE_SHADOW = "drop-shadow(0 16px 20px rgba(25, 25, 26, 0.22))";
const IMAGE_TRANSITION =
  "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease, filter 0.8s ease";

const PatternsStage = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaEnabled = useRevealChildEnabled(REVEAL_CHILD.media);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [scale, setScale] = useState(1);
  const [animating, setAnimating] = useState(false);
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    if (!mediaEnabled) {
      setIsIntersecting(false);
      setAnimating(false);
      return;
    }

    if (reducedMotion) {
      setIsIntersecting(true);
      return;
    }

    return schedulePaint(() => {
      setIsIntersecting(true);
      setAnimating(true);
    });
  }, [mediaEnabled, reducedMotion]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      setScale(el.clientWidth / DESIGN_WIDTH);
    };

    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-visible"
      style={{ height: "630px" }}
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2"
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {patternsImages(theme).map((src, index, list) => {
          const layout = IMAGE_LAYOUT[index];
          if (!layout) return null;

          const enterY =
            isIntersecting || reducedMotion
              ? layout.offsetY
              : layout.offsetY - 100;
          const visible = isIntersecting || reducedMotion;

          return (
            <img
              key={src}
              src={src}
              alt=""
              decoding="async"
              className="absolute top-0 left-1/2"
              onTransitionEnd={() => {
                if (index === list.length - 1) {
                  setAnimating(false);
                }
              }}
              style={{
                zIndex: layout.zIndex,
                width: IMAGE_WIDTH_PX,
                height: "auto",
                maxWidth: "none",
                filter: IMAGE_SHADOW,
                transition: reducedMotion ? undefined : IMAGE_TRANSITION,
                transitionDelay: reducedMotion ? undefined : `${index * 0.2}s`,
                opacity: visible ? 1 : 0,
                transform: `translate(calc(-50% + ${layout.offsetX}px), ${enterY}px)`,
                willChange: animating ? "transform, opacity" : "auto",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const RootPatterns = () => {
  return (
    <SectionReveal
      id="patterns"
      className="flex w-full flex-col items-center gap-9"
    >
      <HeadBlock
        title={rootText.patterns.title}
        description={rootText.patterns.description}
      />

      <ScrollReveal>
        <Button color={Color.Generic} asChild size={Size.Md}>
          <Link to={"patterns"}>Подробнее</Link>
        </Button>
      </ScrollReveal>

      <PatternsStage />
    </SectionReveal>
  );
};
