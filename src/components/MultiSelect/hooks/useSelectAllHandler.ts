import { useCallback, useRef, useEffect } from "react";

export type UseSelectAllHandlerProps<T extends string | number = string> = {
  value: T[];
  selectableValues: T[];
  valueSet: Set<T>;
  allSelected: boolean;
  open: boolean;
  emitChange: (value: T[], isSelectAll?: boolean) => void;
};

export type UseSelectAllHandlerReturn = {
  handleSelectAll: () => void;
  selectAllActiveRef: React.MutableRefObject<boolean>;
};

export function useSelectAllHandler<T extends string | number = string>({
  value,
  selectableValues,
  valueSet,
  allSelected,
  open,
  emitChange,
}: UseSelectAllHandlerProps<T>): UseSelectAllHandlerReturn {
  const selectAllActiveRef = useRef(false);

  useEffect(() => {
    if (!selectAllActiveRef.current || !open) return;

    const missingValues = selectableValues.filter((v) => !valueSet.has(v));
    if (missingValues.length > 0) {
      emitChange([...value, ...missingValues], true);
    }
  }, [selectableValues, valueSet, value, emitChange, open]);

  const handleSelectAll = useCallback(() => {
    if (allSelected || selectAllActiveRef.current) {
      selectAllActiveRef.current = false;
      const nonSelectableValues = value.filter(
        (v) => !selectableValues.includes(v)
      );
      emitChange(nonSelectableValues, true);
    } else {
      selectAllActiveRef.current = true;
      const newValues = [
        ...value,
        ...selectableValues.filter((v) => !valueSet.has(v)),
      ];
      emitChange(newValues, true);
    }
  }, [allSelected, value, selectableValues, valueSet, emitChange]);

  return { handleSelectAll, selectAllActiveRef };
}
