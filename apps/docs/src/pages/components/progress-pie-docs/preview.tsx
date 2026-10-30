import { ProgressPie } from "@/components";
import type { ProgressPiePlaygroundState } from "./types";

export function ProgressPiePreview(state: ProgressPiePlaygroundState) {
  return (
    <ProgressPie
      size={state.size}
      progress={Number(state.progress)}
      color={state.color}
      showIcon={state.showIcon}
      showProgress={state.showProgress}
    />
  );
}
