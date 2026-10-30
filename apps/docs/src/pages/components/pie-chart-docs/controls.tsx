import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { PIE_CHART_TYPE_OPTIONS } from "./options";
import type { PieChartPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<PieChartPlaygroundState>) => void;
};

export function renderPieChartControls(
  state: PieChartPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Type"
        options={PIE_CHART_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) =>
          updateState({
            type: value as PieChartPlaygroundState["type"],
          })
        }
      />
      <PlaygroundSwitchControl
        label="Interactive legend"
        checked={state.hasInteractiveLegend}
        onChange={(value) => updateState({ hasInteractiveLegend: value })}
      />
      {state.type === "donut" && (
        <>
          <PlaygroundTextControl
            label="Title"
            value={state.title}
            onChange={(value) => updateState({ title: value })}
          />
          <PlaygroundTextControl
            label="Subtitle"
            value={state.subtitle}
            onChange={(value) => updateState({ subtitle: value })}
          />
        </>
      )}
    </>
  );
}
