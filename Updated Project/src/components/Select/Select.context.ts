import { createContext, useContext } from "react";
import type { SelectContextValue } from "./types";

export const SelectContext = createContext<SelectContextValue<
  string | number
> | null>(null);

export function useSelectContext(): SelectContextValue<string | number> {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("useSelectContext must be used within <Select>");
  return ctx;
}
