import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  ACCORDION_CHEVRON_POSITION_OPTIONS,
  ACCORDION_POSITION_OPTIONS,
  ACCORDION_TEXT_COLOR_OPTIONS,
  ACCORDION_TEXT_SHADE_OPTIONS,
} from "./options";
import type { AccordionPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<AccordionPlaygroundState>) => void;
};

export function renderAccordionControls(
  state: AccordionPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundSelectControl
        label="Title color"
        options={ACCORDION_TEXT_COLOR_OPTIONS}
        value={state.titleColor}
        onChange={(titleColor) => updateState({ titleColor })}
      />
      <PlaygroundSelectControl
        label="Title shade"
        options={ACCORDION_TEXT_SHADE_OPTIONS}
        value={state.titleShade}
        onChange={(titleShade) => updateState({ titleShade })}
      />
      <PlaygroundSelectControl
        label="Position"
        options={ACCORDION_POSITION_OPTIONS}
        value={state.position}
        onChange={(value) =>
          updateState({
            position: value as AccordionPlaygroundState["position"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Chevron"
        options={ACCORDION_CHEVRON_POSITION_OPTIONS}
        value={state.chevronPosition}
        onChange={(value) =>
          updateState({
            chevronPosition:
              value as AccordionPlaygroundState["chevronPosition"],
          })
        }
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
      <PlaygroundSwitchControl
        label="Subtitle"
        checked={state.subtitle}
        onChange={(value) => updateState({ subtitle: value })}
      />
      <PlaygroundSwitchControl
        label="Icon left"
        checked={state.iconLeft}
        onChange={(value) => updateState({ iconLeft: value })}
      />
      <PlaygroundSwitchControl
        label="Head slot"
        checked={state.headSlot}
        onChange={(value) => updateState({ headSlot: value })}
      />
    </>
  );
}
