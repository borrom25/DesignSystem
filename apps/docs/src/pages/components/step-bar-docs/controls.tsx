import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { STEP_OPTIONS, type StepBarPlaygroundState } from "./types";

type StepBarControlsProps = {
  state: StepBarPlaygroundState;
  onStateChange: (patch: Partial<StepBarPlaygroundState>) => void;
};

export function StepBarControls({
  state,
  onStateChange,
}: StepBarControlsProps) {
  return (
    <>
      <PlaygroundSelectControl
        label="Active step"
        options={STEP_OPTIONS}
        value={state.active}
        onChange={(value) => onStateChange({ active: value })}
      />
      <PlaygroundTextControl
        label="Success text"
        value={state.successButtonText}
        onChange={(value) => onStateChange({ successButtonText: value })}
      />
      <PlaygroundSwitchControl
        label="With icons"
        checked={state.withIcons}
        onChange={(value) => onStateChange({ withIcons: value })}
      />
      <PlaygroundSwitchControl
        label="Step states"
        checked={state.withItemStates}
        onChange={(value) => onStateChange({ withItemStates: value })}
      />
      <PlaygroundSwitchControl
        label="Disable security step"
        checked={state.disableSecurity}
        onChange={(value) => {
          onStateChange({
            disableSecurity: value,
            active:
              value && state.active === "security" ? "contacts" : state.active,
          });
        }}
      />
      <PlaygroundSwitchControl
        label="Success button"
        checked={state.showSuccessButton}
        onChange={(value) => onStateChange({ showSuccessButton: value })}
      />
      <PlaygroundSwitchControl
        label="Loading prev"
        checked={state.loadingPrev}
        onChange={(value) =>
          onStateChange({
            loadingPrev: value,
            active:
              value && state.active === "profile" ? "contacts" : state.active,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Loading next"
        checked={state.loadingNext}
        onChange={(value) =>
          onStateChange({
            loadingNext: value,
            active:
              value && state.active === "confirm" ? "contacts" : state.active,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Loading success"
        checked={state.loadingSuccess}
        onChange={(value) =>
          onStateChange({
            loadingSuccess: value,
            ...(value
              ? { active: "confirm" as const, showSuccessButton: true }
              : {}),
          })
        }
      />
    </>
  );
}
