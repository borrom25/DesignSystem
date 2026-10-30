import { ProgressBar } from "@/components";
import type { ProgressBarPlaygroundState } from "./types";

const PROGRESS_BAR_SEGMENTED_ITEMS = [
  { progress: 100, status: "success" as const },
  { progress: 68, status: "loading" as const },
  { progress: 20, status: "error" as const },
];

export function ProgressBarPreview(state: ProgressBarPlaygroundState) {
  return (
    <ProgressBar
      title={state.title}
      titleVariant={
        state.titleVariant === "default" ? undefined : state.titleVariant
      }
      titleColor={state.titleColor === "default" ? undefined : state.titleColor}
      titleShade={state.titleShade === "default" ? undefined : state.titleShade}
      labelSize={state.labelSize === "default" ? undefined : state.labelSize}
      labelColor={state.labelColor === "default" ? undefined : state.labelColor}
      labelPosition={
        state.labelPosition === "default" ? undefined : state.labelPosition
      }
      status={state.status}
      showStatusLabel={state.showStatusLabel}
      {...(state.mode === "segmented"
        ? { segmentedItems: PROGRESS_BAR_SEGMENTED_ITEMS }
        : { progress: Number(state.progress) })}
    />
  );
}
