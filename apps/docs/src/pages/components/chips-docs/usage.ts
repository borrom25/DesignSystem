import type { ChipsPlaygroundState } from "./types";

export function createChipsUsageCode(
  packageName: string,
  state: ChipsPlaygroundState
) {
  if (state.iconOnly) {
    return `import { Chips } from "${packageName}";
import "${packageName}/styles.css";
import { Plus } from "lucide-react";

export function Example() {
  return (
    <Chips
      size="${state.size}"
      type="${state.type}"
      selected={${state.selected}}
      disabled={${state.disabled}}${state.scaling ? "" : "\n      scaling={false}"}
      iconOnly={Plus}
    />
  );
}`;
  }

  return `import { Chips } from "${packageName}";
import "${packageName}/styles.css";
import { ChevronRight, Plus } from "lucide-react";

export function Example() {
  return (
    <Chips
      size="${state.size}"
      type="${state.type}"
      selected={${state.selected}}
      disabled={${state.disabled}}${state.scaling ? "" : "\n      scaling={false}"}${state.withLeftIcon ? "\n      iconLeft={Plus}" : ""}${state.withRightIcon ? "\n      iconRight={ChevronRight}" : ""}${state.withCounter ? `\n      count={${Number(state.count)}}` : ""}
    >
      ${state.text}
    </Chips>
  );
}`;
}
