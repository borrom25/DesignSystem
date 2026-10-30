import type { BannerPlaygroundState } from "./types";

export function createBannerUsageCode(
  packageName: string,
  state: BannerPlaygroundState
) {
  return `import { Banner } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Banner size="${state.size}" color="${state.color}">
      ${state.text}
    </Banner>
  );
}`;
}
