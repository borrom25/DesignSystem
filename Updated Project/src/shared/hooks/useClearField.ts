import { useCallback } from "react";
import type { RefObject } from "react";

type ClearableFieldElement = HTMLInputElement | HTMLTextAreaElement;

interface UseClearFieldProps<T extends ClearableFieldElement> {
  ref: RefObject<T | null>;
  onClear?: () => void;
}

export function useClearField<T extends ClearableFieldElement>({
  ref,
  onClear,
}: UseClearFieldProps<T>) {
  return useCallback(() => {
    const field = ref.current;

    if (field) {
      if (field instanceof HTMLInputElement) {
        const valueSetter = Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          "value"
        )?.set;

        valueSetter?.call(field, "");
      } else {
        const valueSetter = Object.getOwnPropertyDescriptor(
          HTMLTextAreaElement.prototype,
          "value"
        )?.set;

        valueSetter?.call(field, "");
      }

      field.dispatchEvent(new Event("input", { bubbles: true }));
      field.dispatchEvent(new Event("change", { bubbles: true }));
      field.focus();
    }

    onClear?.();
  }, [onClear, ref]);
}
