import { useCallback, useRef, type MouseEvent } from "react";

export interface UseDateRangeFieldSectionParams {
  disabled: boolean;
  filled: boolean;
  active: boolean;
  onClick?: () => void;
}

export const useDateRangeFieldSection = ({
  disabled,
  filled,
  active,
  onClick,
}: UseDateRangeFieldSectionParams) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isInteractive = !disabled && !!onClick;
  const isLabelActive = active || filled;

  const focusInput = useCallback(() => {
    requestAnimationFrame(() => {
      const input = inputRef.current;

      if (!input) {
        return;
      }

      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }, []);

  const handleSectionClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      if (!isInteractive || !onClick) {
        return;
      }

      onClick();
      focusInput();
    },
    [focusInput, isInteractive, onClick]
  );

  const handleInputClick = useCallback(
    (event: MouseEvent<HTMLInputElement>) => {
      event.stopPropagation();

      if (!isInteractive || !onClick) {
        return;
      }

      onClick();
      focusInput();
    },
    [focusInput, isInteractive, onClick]
  );

  const handleInputFocus = useCallback(() => {
    if (isInteractive && onClick) {
      onClick();
    }
  }, [isInteractive, onClick]);

  return {
    inputRef,
    isInteractive,
    isLabelActive,
    focusInput,
    handleSectionClick,
    handleInputClick,
    handleInputFocus,
  };
};
