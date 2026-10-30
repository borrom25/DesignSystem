import {
  PlaygroundSelectControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  TEXT_ALIGN_OPTIONS,
  TEXT_COLOR_OPTIONS,
  TEXT_DECORATION_OPTIONS,
  TEXT_ELEMENT_OPTIONS,
  TEXT_OVERFLOW_OPTIONS,
  TEXT_SHADE_OPTIONS,
  TEXT_VARIANT_OPTIONS,
  TEXT_WEIGHT_OPTIONS,
} from "./options";
import type { TextPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<TextPlaygroundState>) => void;
};

export function renderTextControls(
  state: TextPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Content"
        value={state.content}
        onChange={(content) => updateState({ content })}
      />
      <PlaygroundSelectControl
        label="Element"
        options={TEXT_ELEMENT_OPTIONS}
        value={state.as}
        onChange={(value) => updateState({ as: value })}
      />
      <PlaygroundSelectControl
        label="Variant"
        options={TEXT_VARIANT_OPTIONS}
        value={state.variant}
        onChange={(value) => updateState({ variant: value })}
      />
      <PlaygroundSelectControl
        label="Weight"
        options={TEXT_WEIGHT_OPTIONS}
        value={state.weight}
        onChange={(value) => updateState({ weight: value })}
      />
      <PlaygroundSelectControl
        label="Color"
        options={TEXT_COLOR_OPTIONS}
        value={state.color}
        onChange={(value) => updateState({ color: value })}
      />
      <PlaygroundSelectControl
        label="Shade"
        options={TEXT_SHADE_OPTIONS}
        value={state.shade}
        onChange={(value) => updateState({ shade: value })}
      />
      <PlaygroundSelectControl
        label="Align"
        options={TEXT_ALIGN_OPTIONS}
        value={state.align}
        onChange={(value) => updateState({ align: value })}
      />
      <PlaygroundSelectControl
        label="Overflow"
        options={TEXT_OVERFLOW_OPTIONS}
        value={state.overflow}
        onChange={(value) => updateState({ overflow: value })}
      />
      <PlaygroundSelectControl
        label="Decoration"
        options={TEXT_DECORATION_OPTIONS}
        value={state.decoration}
        onChange={(value) => updateState({ decoration: value })}
      />
    </>
  );
}
