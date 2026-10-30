import {
  useCallback,
  useId,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { isRenderableNode } from "../AccordionBlock.utils";
import { useAnimatedProgress } from "./useAnimatedProgress";

interface UseAccordionBlockParams {
  defaultOpen: boolean;
  disabled?: boolean;
  children: ReactNode;
  description: ReactNode;
  progress?: number;
}

export function useAccordionBlock({
  defaultOpen,
  disabled,
  children,
  description,
  progress,
}: UseAccordionBlockParams) {
  const contentId = useId();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const animatedProgress = useAnimatedProgress(progress);

  const toggleOpen = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (disabled) return;
      setIsOpen((open) => !open);
    },
    [disabled]
  );

  return {
    contentId,
    isOpen,
    hasChildren: isRenderableNode(children),
    hasDescription: isRenderableNode(description),
    animatedProgress,
    toggleOpen,
  };
}
