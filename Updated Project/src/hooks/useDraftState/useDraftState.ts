import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  UseDraftStateOptions,
  UseDraftStateReturn,
} from "./useDraftState.types.ts";
import { defaultIsEmpty, defaultIsEqual } from "./useDraftState.utils.ts";

export function useDraftState<T>(
  options: UseDraftStateOptions<T>
): UseDraftStateReturn<T> {
  const {
    value: controlledValue,
    defaultValue,
    onChange,
    isEqual = defaultIsEqual,
    isEmpty: isEmptyFn = defaultIsEmpty,
  } = options;
  const isControlled = "value" in options;
  const [internalValue, setInternalValue] = useState<T>(defaultValue);
  const appliedValue = (isControlled ? controlledValue : internalValue) as T;
  const [draft, setDraft] = useState<T>(appliedValue);
  const previousAppliedValueRef = useRef(appliedValue);

  useEffect(() => {
    if (!isEqual(previousAppliedValueRef.current, appliedValue)) {
      previousAppliedValueRef.current = appliedValue;
      setDraft(appliedValue);
      return;
    }

    previousAppliedValueRef.current = appliedValue;
  }, [appliedValue, isEqual]);

  const isDirty = useMemo(
    () => !isEqual(draft, appliedValue),
    [draft, appliedValue, isEqual]
  );

  const isEmpty = useMemo(
    () => isEmptyFn(appliedValue),
    [appliedValue, isEmptyFn]
  );

  const apply = useCallback(() => {
    setInternalValue(draft);
    onChange?.(draft);
  }, [draft, onChange]);

  const reset = useCallback(() => {
    setDraft(appliedValue);
  }, [appliedValue]);

  const clear = useCallback(() => {
    setDraft(defaultValue);
    setInternalValue(defaultValue);
    onChange?.(defaultValue);
  }, [defaultValue, onChange]);

  return {
    value: appliedValue,
    draft,
    setDraft,
    apply,
    reset,
    clear,
    isDirty,
    isEmpty,
  };
}
