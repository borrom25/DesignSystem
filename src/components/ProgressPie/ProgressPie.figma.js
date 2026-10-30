// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=2824-14826
// source=src/components/ProgressPie/ProgressPie.tsx
// component=ProgressPie
const figma = require("figma");
const instance = figma.selectedInstance;
const size = instance.getEnum("Size", { Xs: "xs", Sm: "sm", Md: "md", Lg: "lg" });
const progress = instance.getEnum("Progress", { "0%": 0, "50%": 50, "75%": 75, "100%": 100 });
const showIcon = instance.getBoolean("Icon");
const showProgress = instance.getBoolean("%");
// Temporary mapping: runtime icon is a LucideIcon constructor, not rendered JSX.
// The Figma icon swap is not forwarded; the runtime's default ChartPie is used.
// To use another icon, supply the corresponding public lucide-react constructor.
export default {
  example: figma.tsx`<ProgressPie size="${size}" progress={${progress}} showIcon={${showIcon}} showProgress={${showProgress}} />`,
  imports: ['import { ProgressPie } from "borrom-ds-test"'],
  id: "progress-pie",
  metadata: { nestable: true },
};
