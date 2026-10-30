import type { ActionPopoverPlaygroundState } from "./types";

export function createActionPopoverUsageCode(
  packageName: string,
  state: ActionPopoverPlaygroundState
) {
  const buttonImport = state.showChildren ? ", Button" : "";
  const childrenBlock = state.showChildren
    ? `
      <Button size="xs" type="flat" color="brand">
        Применить
      </Button>
    `
    : "\n    ";
  const selectedLabelProp = state.selectedLabel.trim()
    ? `
      selectedLabel="${state.selectedLabel}"`
    : "";

  if (!state.showClose) {
    return `import { ActionPopover${buttonImport} } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <ActionPopover${selectedLabelProp}
    >${childrenBlock}</ActionPopover>
  );
}`;
  }

  return `import { ActionPopover${buttonImport} } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const handleClose = () => {
    // hide action popover
  };

  return (
    <ActionPopover${selectedLabelProp}
      closeAriaLabel="${state.closeAriaLabel}"
      onClose={handleClose}
    >${childrenBlock}</ActionPopover>
  );
}`;
}
