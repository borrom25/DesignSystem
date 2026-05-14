// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1670-1000
// source=src/components/TimeBar/TimeBar.tsx
// component=TimeBar
const figma = require("figma");
const instance = figma.selectedInstance;

const property1 = instance.getEnum("Property 1", {
  Default: "default",
});

// Temporary mapping:
// Figma exposes the three time columns as slots, while the runtime TimeBar
// owns those columns internally and generates their values from utility
// functions. The selected Figma example shows 04:04:04, so Code Connect uses
// defaultValue to reproduce that state without adding non-existent slot props.
export default {
  example: figma.tsx`
    <TimeBar defaultValue={{ hours: 4, minutes: 4, seconds: 4 }} />
  `,
  imports: ['import { TimeBar } from "borrom-ds-test"'],
  id: "timebar",
  metadata: {
    nestable: true,
    props: {
      property1,
      runtimeOwnsColumns: true,
    },
  },
};
