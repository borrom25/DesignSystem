import { ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components";
import type { ButtonPlaygroundState } from "./types";

export function ButtonPreview(state: ButtonPlaygroundState) {
  const isDisabled = state.state === "disabled";
  const isLoading = state.state === "loading" || state.loader;

  const sharedProps = {
    type: state.type,
    color: state.color,
    size: state.size,
    htmlType: state.htmlType,
    disabled: isDisabled,
    loading: isLoading,
    scaling: state.scaling,
  };

  if (state.iconOnly) {
    return (
      <Button
        {...sharedProps}
        iconOnly={Plus}
        count={state.withCounter ? Number(state.count) : undefined}
        counterColor={state.counterColor}
      />
    );
  }

  return (
    <Button
      {...sharedProps}
      iconLeft={state.withLeftIcon ? Plus : undefined}
      iconRight={state.withRightIcon ? ChevronRight : undefined}
      count={state.withCounter ? Number(state.count) : undefined}
      counterColor={state.counterColor}
    >
      {state.text}
    </Button>
  );
}
