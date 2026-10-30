import { PlaygroundSelectControl } from "@docs/components/ComponentPlaygroundControls";
import { HORIZONTAL_DATASET_OPTIONS } from "./options";
import type { BarChartHorizontalPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<BarChartHorizontalPlaygroundState>) => void;
};

export function renderBarChartHorizontalControls(
  state: BarChartHorizontalPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <PlaygroundSelectControl
      label="Dataset"
      options={HORIZONTAL_DATASET_OPTIONS}
      value={state.dataset}
      onChange={(value) =>
        updateState({
          dataset: value as BarChartHorizontalPlaygroundState["dataset"],
        })
      }
    />
  );
}
