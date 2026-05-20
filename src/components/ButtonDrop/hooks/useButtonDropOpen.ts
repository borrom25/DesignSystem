import { useCallback, useState } from "react";

interface UseButtonDropOpenOptions {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export function useButtonDropOpen({
  open,
  onOpenChange,
  defaultOpen = false,
}: UseButtonDropOpenOptions) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const setIsOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
  );

  return {
    isOpen,
    setIsOpen,
  };
}
