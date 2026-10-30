import type { SegmentedPlaygroundState } from "./types";

export function createSegmentedUsageCode(
  packageName: string,
  state: SegmentedPlaygroundState
) {
  const middleOption = state.withDisabledOption
    ? `  { label: "Banana", value: "banana", disabled: true },`
    : `  { label: "Banana", value: "banana" },`;

  return `import { Segmented } from "${packageName}";
import "${packageName}/styles.css";

const options = [
  { label: "Apple", value: "apple" },
${middleOption}
  { label: "Pineapple", value: "pineapple" },
];

export function Example() {
  return (
    <Segmented
      position="${state.position}"
      shape="${state.shape}"
      size="${state.size}"
      defaultValue="apple"
      options={options}
    />
  );
}`;
}
