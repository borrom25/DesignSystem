import { type CSSProperties, useEffect, useRef, useState } from "react";
import {
  ANIMATION_DELAY_STEP_S,
  DESIGN_HEIGHT,
  DESIGN_WIDTH,
  ENTER_OFFSET_Y,
  IMAGE_SHADOW,
  IMAGE_TRANSITION,
  IMAGE_WIDTH,
  type ThemizerImageLayout,
} from "./constants.ts";
import {
  prefersReducedMotion,
  schedulePaint,
} from "../../../model/revealTiming.ts";

export const useThemizerStage = (enabled: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [animating, setAnimating] = useState(false);
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    if (!enabled) {
      setIsVisible(false);
      setAnimating(false);
      return;
    }

    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    return schedulePaint(() => {
      setIsVisible(true);
      setAnimating(true);
    });
  }, [enabled, reducedMotion]);

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

  const viewportStyle: CSSProperties = {
    height: DESIGN_HEIGHT * scale,
  };

  const stageStyle: CSSProperties = {
    width: DESIGN_WIDTH,
    height: DESIGN_HEIGHT,
    transform: `translateX(-50%) scale(${scale})`,
    transformOrigin: "top center",
  };

  const getImageStyle = (
    layout: ThemizerImageLayout,
    index: number
  ): CSSProperties => {
    const visible = isVisible || reducedMotion;
    const offsetY = visible ? layout.offsetY : layout.offsetY - ENTER_OFFSET_Y;

    return {
      zIndex: layout.zIndex,
      width: IMAGE_WIDTH,
      height: "auto",
      maxWidth: "none",
      filter: IMAGE_SHADOW,
      transition: reducedMotion ? undefined : IMAGE_TRANSITION,
      transitionDelay: reducedMotion
        ? undefined
        : `${index * ANIMATION_DELAY_STEP_S}s`,
      opacity: visible ? 1 : 0,
      transform: `translate(calc(-50% + ${layout.offsetX}px), ${offsetY}px)`,
      willChange: animating ? "transform, opacity" : "auto",
    };
  };

  const onImageTransitionEnd = (index: number, total: number) => {
    if (index === total - 1) setAnimating(false);
  };

  return {
    containerRef,
    viewportStyle,
    stageStyle,
    getImageStyle,
    onImageTransitionEnd,
  };
};
