import { createContext, useContext } from "react";
import type { BubbleContextValue } from "./Bubble.types.ts";
import { BubbleSide } from "@/components";
import { Size } from "@/types";

export const BubbleContext = createContext<BubbleContextValue>({
  side: BubbleSide.Incoming,
  size: Size.Md,
  standaloneImage: false,
  metaOutside: false,
});

export function useBubbleContext(): BubbleContextValue {
  const ctx = useContext(BubbleContext);
  if (!ctx) throw new Error("useSelectContext must be used within <Bubble>");
  return ctx;
}
