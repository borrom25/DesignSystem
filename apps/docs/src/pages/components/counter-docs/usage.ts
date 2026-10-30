import type { CounterPlaygroundState } from "./types";

export function createCounterUsageCode(
  packageName: string,
  state: CounterPlaygroundState
) {
  return `import { Counter } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Counter
      count={${Number(state.count)}}
      size="${state.size}"
      variant="${state.variant}"${state.maxCount !== "none" ? `\n      maxCount={${Number(state.maxCount)}}` : ""}${state.empty ? "\n      empty" : ""}${state.disabled ? "\n      disabled" : ""}
    />
  );
}`;
}
