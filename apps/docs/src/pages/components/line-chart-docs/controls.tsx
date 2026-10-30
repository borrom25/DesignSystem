import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { LINE_TYPE_OPTIONS } from "./options";
import type { LineChartPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<LineChartPlaygroundState>) => void;
};

export function renderLineChartControls(
  state: LineChartPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(value) => updateState({ title: value })}
      />
      <PlaygroundSelectControl
        label="Line type"
        options={LINE_TYPE_OPTIONS}
        value={state.lineType}
        onChange={(value) =>
          updateState({
            lineType: value as LineChartPlaygroundState["lineType"],
          })
        }
      />
      <PlaygroundSwitchControl
        label="Dots"
        checked={state.showDots}
        onChange={(value) => updateState({ showDots: value })}
      />
      <PlaygroundSwitchControl
        label="Second series"
        checked={state.withSecondSeries}
        onChange={(value) => updateState({ withSecondSeries: value })}
      />
    </>
  );
}
