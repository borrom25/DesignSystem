import { useMemo, type ReactNode } from "react";

export interface UseDateRangeVisualStateParams {
  error: boolean;
  hintError?: ReactNode;
  hint?: ReactNode;
  startError: boolean;
  endError: boolean;
}

export const useDateRangeVisualState = ({
  error,
  hintError,
  hint,
  startError,
  endError,
}: UseDateRangeVisualStateParams) =>
  useMemo(
    () => ({
      isError: error || !!hintError || startError || endError,
      showHint: Boolean(hintError || hint),
    }),
    [error, hint, hintError, startError, endError]
  );
