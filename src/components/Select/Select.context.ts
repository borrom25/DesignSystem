import { createContext, useContext } from "react";
import type { SelectOptionValue } from "@/shared/Select";
import type { SelectContextValue } from "./types";

export const SelectContext =
  createContext<SelectContextValue<SelectOptionValue> | null>(null);

export function useSelectContext(): SelectContextValue<SelectOptionValue> {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("useSelectContext must be used within <Select>");
  return ctx;
}
