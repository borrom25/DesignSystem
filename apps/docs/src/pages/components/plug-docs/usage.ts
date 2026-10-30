import type { PlugPlaygroundState } from "./types";

export function createPlugUsageCode(
  packageName: string,
  state: PlugPlaygroundState
) {
  const needsButtonImport = state.withAction;
  const imageItem = state.withImage
    ? '\n      imageItem={<div className="rounded-full bg-brand/10 px-4 py-6 text-brand">IMG</div>}'
    : "";
  const actionSlot = state.withAction
    ? '\n      actionSlot={<Button size="xs" type="flat">Create item</Button>}'
    : "";

  return `import { Plug${needsButtonImport ? ", Button" : ""} } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Plug${imageItem}
      title="${state.title}"
      subtitle="${state.subtitle}"${actionSlot}
    />
  );
}`;
}
