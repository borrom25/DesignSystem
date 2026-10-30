import { Counter } from "@/components";
import type { CounterPlaygroundState } from "./types";

export function CounterPreview(state: CounterPlaygroundState) {
  return (
    <Counter
      count={Number(state.count)}
      size={state.size}
      variant={state.variant}
      maxCount={state.maxCount === "none" ? undefined : Number(state.maxCount)}
      empty={state.empty}
      disabled={state.disabled}
    />
  );
}
