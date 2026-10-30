import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { Color, HtmlType, Type } from "@/types";
import { CounterVariant } from "@/components";
import {
  BUTTON_COLOR_OPTIONS,
  BUTTON_COUNT_OPTIONS,
  BUTTON_COUNTER_COLOR_OPTIONS,
  BUTTON_HTML_TYPE_OPTIONS,
  BUTTON_SIZE_OPTIONS,
  BUTTON_STATE_OPTIONS,
  BUTTON_TYPE_OPTIONS,
} from "./options";
import type { ButtonPlaygroundState, ButtonState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<ButtonPlaygroundState>) => void;
};

export function renderButtonControls(
  state: ButtonPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Type"
        options={BUTTON_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) => updateState({ type: value as Type })}
      />

      <PlaygroundSelectControl
        label="State"
        options={BUTTON_STATE_OPTIONS}
        value={state.state}
        onChange={(value) => {
          const nextState = value as ButtonState;

          updateState({
            state: nextState,
            loader: nextState === "loading",
          });
        }}
      />

      <PlaygroundSelectControl
        label="Color"
        options={BUTTON_COLOR_OPTIONS}
        value={state.color}
        onChange={(value) => updateState({ color: value as Color })}
      />

      <PlaygroundSelectControl
        label="Size"
        options={BUTTON_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) => updateState({ size: value })}
      />

      <PlaygroundSelectControl
        label="Html type"
        options={BUTTON_HTML_TYPE_OPTIONS}
        value={state.htmlType}
        onChange={(value) => updateState({ htmlType: value as HtmlType })}
      />

      <PlaygroundTextControl
        label="Text"
        value={state.text}
        onChange={(value) => updateState({ text: value })}
      />

      <PlaygroundSelectControl
        label="Count"
        options={BUTTON_COUNT_OPTIONS}
        value={state.count}
        onChange={(value) =>
          updateState({ count: value as ButtonPlaygroundState["count"] })
        }
      />

      <PlaygroundSelectControl
        label="Counter color"
        options={BUTTON_COUNTER_COLOR_OPTIONS}
        value={state.counterColor}
        onChange={(value) =>
          updateState({ counterColor: value as CounterVariant })
        }
      />

      <PlaygroundSwitchControl
        label="Loader"
        checked={state.loader}
        onChange={(value) =>
          updateState({
            loader: value,
            state: value
              ? "loading"
              : state.state === "loading"
                ? "default"
                : state.state,
          })
        }
      />

      <PlaygroundSwitchControl
        label="Scaling"
        checked={state.scaling}
        onChange={(value) => updateState({ scaling: value })}
      />

      <PlaygroundSwitchControl
        label="Icon only"
        checked={state.iconOnly}
        onChange={(value) =>
          updateState({
            iconOnly: value,
            withLeftIcon: value ? false : state.withLeftIcon,
            withRightIcon: value ? false : state.withRightIcon,
          })
        }
      />

      <PlaygroundSwitchControl
        label="Left icon"
        checked={state.withLeftIcon}
        onChange={(value) =>
          updateState({
            withLeftIcon: value,
            iconOnly: value ? false : state.iconOnly,
          })
        }
      />

      <PlaygroundSwitchControl
        label="Right icon"
        checked={state.withRightIcon}
        onChange={(value) =>
          updateState({
            withRightIcon: value,
            iconOnly: value ? false : state.iconOnly,
          })
        }
      />

      <PlaygroundSwitchControl
        label="Counter"
        checked={state.withCounter}
        onChange={(value) => updateState({ withCounter: value })}
      />
    </>
  );
}
