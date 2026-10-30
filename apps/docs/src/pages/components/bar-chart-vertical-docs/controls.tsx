import {
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { BarChartVerticalPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<BarChartVerticalPlaygroundState>) => void;
};

export function renderBarChartVerticalControls(
  state: BarChartVerticalPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(value) => updateState({ title: value })}
      />
      <PlaygroundSwitchControl
        label="Second series"
        checked={state.withSecondSeries}
        onChange={(value) => updateState({ withSecondSeries: value })}
      />
    </>
  );
}
