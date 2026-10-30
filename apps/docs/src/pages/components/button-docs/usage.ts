import type { ButtonPlaygroundState } from "./types";

export function createButtonUsageCode(
  packageName: string,
  state: ButtonPlaygroundState
): string {
  const isDisabled = state.state === "disabled";
  const isLoading = state.state === "loading" || state.loader;
  const iconImports = [
    state.iconOnly || state.withLeftIcon ? "Plus" : null,
    state.withRightIcon ? "ChevronRight" : null,
  ].filter(Boolean);

  const importIcons =
    iconImports.length > 0
      ? `\nimport { ${iconImports.join(", ")} } from "lucide-react";`
      : "";

  if (state.iconOnly) {
    return `import { Button } from "${packageName}";
import "${packageName}/styles.css";${importIcons}

export function Example() {
  return (
    <Button
      type="${state.type}"
      color="${state.color}"
      size="${state.size}"
      htmlType="${state.htmlType}"${isDisabled ? "\n      disabled" : ""}${isLoading ? "\n      loading" : ""}${state.scaling ? "" : "\n      scaling={false}"}${state.withCounter ? `\n      count={${Number(state.count)}}\n      counterColor="${state.counterColor}"` : ""}
      iconOnly={Plus}
    />
  );
}`;
  }

  return `import { Button } from "${packageName}";
import "${packageName}/styles.css";${importIcons}

export function Example() {
  return (
    <Button
      type="${state.type}"
      color="${state.color}"
      size="${state.size}"
      htmlType="${state.htmlType}"${isDisabled ? "\n      disabled" : ""}${isLoading ? "\n      loading" : ""}${state.scaling ? "" : "\n      scaling={false}"}${state.withLeftIcon ? "\n      iconLeft={Plus}" : ""}${state.withRightIcon ? "\n      iconRight={ChevronRight}" : ""}${state.withCounter ? `\n      count={${Number(state.count)}}\n      counterColor="${state.counterColor}"` : ""}
    >
      ${state.text}
    </Button>
  );
}`;
}
