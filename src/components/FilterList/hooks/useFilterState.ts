import { useCallback, useMemo } from "react";
import { useDraftState } from "@/hooks/useDraftState/useDraftState.ts";

export interface UseFilterStateOptions<T> {
  value?: T[];
  defaultValue?: T[];
  onChange?: (value: T[]) => void;
  isEqual?: (left: T[], right: T[]) => boolean;
}

export interface UseFilterStateReturn<T> {
  value: T[];
  draft: T[];
  setDraft: React.Dispatch<React.SetStateAction<T[]>>;
  apply: () => void;
  reset: () => void;
  clear: () => void;
  isDirty: boolean;
  isEmpty: boolean;
  toggle: (item: T) => void;
  select: (item: T) => void;
  deselect: (item: T) => void;
  isSelected: (item: T) => boolean;
}

function defaultArrayIsEqual<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  const setB = new Set(b);
  return a.every((item) => setB.has(item));
}

export function useFilterState<T = string>({
  value,
  defaultValue = [],
  onChange,
  isEqual = defaultArrayIsEqual,
}: UseFilterStateOptions<T> = {}): UseFilterStateReturn<T> {
  const draftState = useDraftState<T[]>({
    value,
    defaultValue,
    onChange,
    isEqual,
    isEmpty: (arr) => arr.length === 0,
  });

  const draftSet = useMemo(() => new Set(draftState.draft), [draftState.draft]);

  const toggle = useCallback(
    (item: T) => {
      draftState.setDraft((prev) =>
        prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
      );
    },
    [draftState]
  );

  const select = useCallback(
    (item: T) => {
      draftState.setDraft((prev) =>
        prev.includes(item) ? prev : [...prev, item]
      );
    },
    [draftState]
  );

  const deselect = useCallback(
    (item: T) => {
      draftState.setDraft((prev) => prev.filter((v) => v !== item));
    },
    [draftState]
  );

  const isSelected = useCallback((item: T) => draftSet.has(item), [draftSet]);

  return {
    ...draftState,
    toggle,
    select,
    deselect,
    isSelected,
  };
}
