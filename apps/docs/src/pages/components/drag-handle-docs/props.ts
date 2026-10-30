import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const DRAG_HANDLE_PROPS: readonly PropDefinition[] = [
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер иконки",
    defaultValue: "xs",
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительные CSS-классы",
  },
];
