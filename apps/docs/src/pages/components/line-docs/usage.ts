import type { LinePlaygroundState } from "./types";

export function createLineUsageCode(
  packageName: string,
  state: LinePlaygroundState
) {
  return `import { Line, Button } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Line
      title="${state.title}"
      subtitle="${state.subtitle}"
      src="https://api.dicebear.com/7.x/avataaars/svg?seed=line-docs"
      position="${state.position}"
      type="${state.type}"${state.disabled ? "\n      disabled" : ""}${state.withLabels ? '\n      labelGroup={["label 1", "label 2", "label 3"]}' : ""}${state.withLeftSlot ? '\n      leftSlot={<Button size="sm">leftSlot</Button>}' : ""}${state.withRightSlot ? '\n      rightSlot={<Button size="sm">rightSlot</Button>}' : ""}
    />
  );
}`;
}
