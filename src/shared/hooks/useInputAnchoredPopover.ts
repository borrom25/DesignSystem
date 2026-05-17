import type { Dispatch, RefObject, SetStateAction } from "react";
import { useCallback, useRef, useState } from "react";

export type UseInputAnchoredPopoverReturn = {
  containerRef: RefObject<HTMLDivElement>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  openPopover: () => void;
  handleRetainFieldInteraction: (
    event: { preventDefault: () => void },
    target?: EventTarget | null
  ) => void;
  handleFocusOutside: (event: {
    preventDefault: () => void;
    detail?: { originalEvent?: globalThis.FocusEvent };
  }) => void;
};

export function useInputAnchoredPopover(
  disabled: boolean
): UseInputAnchoredPopoverReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const openPopover = useCallback(() => !disabled && setOpen(true), [disabled]);

  const handleRetainFieldInteraction = useCallback(
    (event: { preventDefault: () => void }, target?: EventTarget | null) =>
      target instanceof Node &&
      containerRef.current?.contains(target) &&
      event.preventDefault(),
    []
  );

  const handleFocusOutside = useCallback(
    (event: {
      preventDefault: () => void;
      detail?: { originalEvent?: globalThis.FocusEvent };
    }) => {
      const detail = event.detail;
      handleRetainFieldInteraction(event, detail?.originalEvent?.relatedTarget);
    },
    [handleRetainFieldInteraction]
  );

  return {
    containerRef,
    open,
    setOpen,
    openPopover,
    handleRetainFieldInteraction,
    handleFocusOutside,
  };
}
