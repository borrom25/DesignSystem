import {
  PlaygroundSelectControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { BANNER_COLOR_OPTIONS, BANNER_SIZE_OPTIONS } from "./options";
import type { BannerPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<BannerPlaygroundState>) => void;
};

export function renderBannerControls(
  state: BannerPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Text"
        value={state.text}
        onChange={(text) => updateState({ text })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={BANNER_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) => updateState({ size: value })}
      />
      <PlaygroundSelectControl
        label="Color"
        options={BANNER_COLOR_OPTIONS}
        value={state.color}
        onChange={(value) => updateState({ color: value })}
      />
    </>
  );
}
