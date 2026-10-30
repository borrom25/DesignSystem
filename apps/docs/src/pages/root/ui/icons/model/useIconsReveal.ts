import { type CSSProperties, useEffect, useRef, useState } from "react";
import {
  CELL_STRIDE_PX,
  GRID_COLS,
  ICON_TRANSITION,
  MAX_STAGGER_S,
} from "./constants.ts";
import {
  prefersReducedMotion,
  schedulePaint,
} from "../../../model/revealTiming.ts";

export const useIconsReveal = (iconCount: number, enabled: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = prefersReducedMotion();
  const [isVisible, setIsVisible] = useState(reducedMotion && enabled);
  const [animating, setAnimating] = useState(false);

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

  const rows = Math.max(Math.ceil(iconCount / GRID_COLS), 1);
  const centerCol = (GRID_COLS - 1) / 2;
  const centerRow = (rows - 1) / 2;
  const maxDist = Math.hypot(centerCol, centerRow) || 1;

  const getIconStyle = (index: number): CSSProperties => {
    const col = index % GRID_COLS;
    const row = Math.floor(index / GRID_COLS);
    const dx = (centerCol - col) * CELL_STRIDE_PX;
    const dy = (centerRow - row) * CELL_STRIDE_PX;
    const dist = Math.hypot(col - centerCol, row - centerRow);
    const delay = (dist / maxDist) * MAX_STAGGER_S;

    if (reducedMotion) {
      return {
        opacity: 1,
        transform: "translate(0, 0) scale(1)",
      };
    }

    return {
      transition: ICON_TRANSITION,
      transitionDelay: `${delay}s`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? "translate(0, 0) scale(1)"
        : `translate(${dx}px, ${dy}px) scale(0.35)`,
      willChange: animating ? "transform, opacity" : "auto",
    };
  };

  const onIconTransitionEnd = (index: number) => {
    if (index === iconCount - 1) setAnimating(false);
  };

  return { containerRef, getIconStyle, onIconTransitionEnd };
};
