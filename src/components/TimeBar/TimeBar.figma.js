// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1670-1000
// source=src/components/TimeBar/TimeBar.tsx
// component=TimeBar
const figma = require("figma");
const instance = figma.selectedInstance;
void instance;

// Temporary mapping:
// Figma MCP is currently unavailable, so exact component property keys
// for node 1670:1000 could not be read safely.
// This snippet is intentionally static and should be upgraded to
// instance.getBoolean/getString/getEnum mapping after MCP recovery.
export default {
  example: figma.tsx`
    <TimeBar
      value={{ hours: 9, minutes: 30, seconds: 0 }}
      showSeconds
      use24Hour
      showNowButton
      showConfirmButton
      nowButtonText="Сейчас"
      confirmButtonText="Ок"
      onChange={() => {}}
      onConfirm={() => {}}
    />
  `,
  imports: ['import { TimeBar } from "borrom-ds-test"'],
  id: "timebar",
  metadata: {
    nestable: true,
    props: {
      hasTemporaryStaticMapping: true,
      figmaPropertiesReadBlocked: true,
    },
  },
};
