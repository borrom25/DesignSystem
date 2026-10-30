// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=8576-2288
// source=src/components/CopyLink/CopyLink.tsx
// component=CopyLink
const figma = require("figma");
const instance = figma.selectedInstance;
const state = instance.getEnum("State", { "Копировать": "default", "Скопировано": "copied" });
// Temporary mapping: copied state is controlled internally after a click.
// Replace the example value with the application's actual link.
export default {
  example: figma.tsx`<CopyLink value="https://example.com/" defaultText="Копировать" successText="Скопировано" />`,
  imports: ['import { CopyLink } from "borrom-ds-test"'],
  id: "copy-link",
  metadata: { nestable: true, props: { requestedState: state } },
};
