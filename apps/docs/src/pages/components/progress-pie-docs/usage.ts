import type { ProgressPiePlaygroundState } from "./types";

export function createProgressPieUsageCode(
  packageName: string,
  state: ProgressPiePlaygroundState
) {
  return `import { ProgressPie } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <ProgressPie
      size="${state.size}"
      progress={${Number(state.progress)}}
      color="${state.color}"
      showIcon={${state.showIcon}}
      showProgress={${state.showProgress}}
    />
  );
}`;
}
