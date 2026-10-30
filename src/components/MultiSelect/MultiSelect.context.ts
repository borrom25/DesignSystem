import { createContext, useContext } from "react";
import type {
  MultiSelectContextValue,
  MultiSelectOptionValue,
} from "./MultiSelect.types";

export const MultiSelectContext =
  createContext<MultiSelectContextValue<MultiSelectOptionValue> | null>(null);

export function useMultiSelectContext(): MultiSelectContextValue<MultiSelectOptionValue> {
  const ctx = useContext(MultiSelectContext);
  if (!ctx) {
    throw new Error("useMultiSelectContext must be used within <MultiSelect>");
  }
  return ctx;
}
