import { StepBar } from "@/components";
import { useStepBarItems } from "./items";
import type { StepBarPlaygroundState } from "./types";

type StepBarPreviewProps = {
  state: StepBarPlaygroundState;
  onStateChange: (patch: Partial<StepBarPlaygroundState>) => void;
};

export function StepBarPreview({ state, onStateChange }: StepBarPreviewProps) {
  const items = useStepBarItems(state);

  return (
    <div className="w-full max-w-[860px]">
      <StepBar
        items={items}
        active={state.active}
        onChangeStep={(step) => onStateChange({ active: step })}
        onClickSuccessButton={
          state.showSuccessButton ? () => void 0 : undefined
        }
        successButtonText={state.successButtonText}
        loadingPrev={state.loadingPrev}
        loadingNext={state.loadingNext}
        loadingSuccess={state.loadingSuccess}
      />
    </div>
  );
}
