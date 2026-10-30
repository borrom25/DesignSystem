import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  CARD_PADDING_OPTIONS,
  CARD_SIZE_OPTIONS,
  CARD_TEXT_COLOR_OPTIONS,
  CARD_TEXT_SHADE_OPTIONS,
  CARD_VARIANT_OPTIONS,
} from "./options";
import type { CardPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<CardPlaygroundState>) => void;
};

export function renderCardControls(
  state: CardPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundTextControl
        label="Subtitle"
        value={state.subtitle}
        onChange={(subtitle) => updateState({ subtitle })}
      />
      <PlaygroundTextControl
        label="Content"
        value={state.content}
        onChange={(content) => updateState({ content })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={CARD_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) => updateState({ size: value })}
      />
      <PlaygroundSelectControl
        label="Variant"
        options={CARD_VARIANT_OPTIONS}
        value={state.variant}
        onChange={(value) => updateState({ variant: value })}
      />
      <PlaygroundSelectControl
        label="Padding"
        options={CARD_PADDING_OPTIONS}
        value={state.padding}
        onChange={(value) => updateState({ padding: value })}
      />
      <PlaygroundSelectControl
        label="Title color"
        options={CARD_TEXT_COLOR_OPTIONS}
        value={state.titleColor}
        onChange={(titleColor) => updateState({ titleColor })}
      />
      <PlaygroundSelectControl
        label="Title shade"
        options={CARD_TEXT_SHADE_OPTIONS}
        value={state.titleShade}
        onChange={(titleShade) => updateState({ titleShade })}
      />
      <PlaygroundSelectControl
        label="Subtitle color"
        options={CARD_TEXT_COLOR_OPTIONS}
        value={state.subtitleColor}
        onChange={(subtitleColor) => updateState({ subtitleColor })}
      />
      <PlaygroundSelectControl
        label="Subtitle shade"
        options={CARD_TEXT_SHADE_OPTIONS}
        value={state.subtitleShade}
        onChange={(subtitleShade) => updateState({ subtitleShade })}
      />
      <PlaygroundSwitchControl
        label="Subtitle"
        checked={state.withSubtitle}
        onChange={(withSubtitle) => updateState({ withSubtitle })}
      />
      <PlaygroundSwitchControl
        label="Action slot"
        checked={state.withAction}
        onChange={(withAction) => updateState({ withAction })}
      />
      <PlaygroundSwitchControl
        label="Hover"
        checked={state.hoverable}
        onChange={(hoverable) => updateState({ hoverable })}
      />
    </>
  );
}
