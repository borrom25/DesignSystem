import type { ProgressBarPlaygroundState } from "./types";

export function createProgressBarUsageCode(
  packageName: string,
  state: ProgressBarPlaygroundState
) {
  const segmentedItemsCode =
    state.mode === "segmented"
      ? `
const segmentedItems = [
  { progress: 100, status: "success" },
  { progress: 68, status: "loading" },
  { progress: 20, status: "error" },
];`
      : "";

  const progressBarPropsCode =
    state.mode === "segmented"
      ? `segmentedItems={segmentedItems}`
      : `progress={${Number(state.progress)}}`;

  const titleVariantCode =
    state.titleVariant === "default"
      ? ""
      : `
      titleVariant="${state.titleVariant}"`;

  const titleColorCode =
    state.titleColor === "default"
      ? ""
      : `
      titleColor="${state.titleColor}"`;

  const titleShadeCode =
    state.titleShade === "default"
      ? ""
      : `
      titleShade="${state.titleShade}"`;

  const labelSizeCode =
    state.labelSize === "default"
      ? ""
      : `
      labelSize="${state.labelSize}"`;

  const labelColorCode =
    state.labelColor === "default"
      ? ""
      : `
      labelColor="${state.labelColor}"`;

  const labelPositionCode =
    state.labelPosition === "default"
      ? ""
      : `
      labelPosition="${state.labelPosition}"`;

  return `import { ProgressBar } from "${packageName}";
import "${packageName}/styles.css";${segmentedItemsCode}

export function Example() {
  return (
    <ProgressBar
      title="${state.title}"${titleVariantCode}${titleColorCode}${titleShadeCode}${labelSizeCode}${labelColorCode}${labelPositionCode}
      status="${state.status}"
      showStatusLabel={${state.showStatusLabel}}
      ${progressBarPropsCode}
    />
  );
}`;
}
