import { createContext, useContext } from "react";
import type { MultiSelectContextValue } from "./MultiSelect.types";

export const MultiSelectContext = createContext<MultiSelectContextValue<
  string | number
> | null>(null);

export function useMultiSelectContext(): MultiSelectContextValue<
  string | number
> {
  const ctx = useContext(MultiSelectContext);
  if (!ctx) {
    throw new Error("useMultiSelectContext must be used within <MultiSelect>");
  }
  return ctx;
}
