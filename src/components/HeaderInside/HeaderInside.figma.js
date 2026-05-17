// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=658-11298
// source=src/components/HeaderInside/HeaderInside.tsx
// component=HeaderInside
const figma = require("figma");
const instance = figma.selectedInstance;
void instance;

// Temporary mapping: Figma MCP metadata for this node is unavailable in the
// current environment, so the snippet uses safe defaults inferred from
// HeaderInside public API.
const tabsItems = figma.tsx`[
  { label: "Tab", value: "tab-1" },
  { label: "Tab", value: "tab-2" },
  { label: "Tab", value: "tab-3" },
  { label: "Tab", value: "tab-4" },
]`;

export default {
  example: figma.tsx`
    <HeaderInside
      title="Название страницы"
      subtitle="Название страницы"
      showActionButton
      actionIcon={Settings}
      showNotification
      onBackClick={() => {}}
      onActionClick={() => {}}
      onNotificationClick={() => {}}
    >
      <TabsOverflow
        items={${tabsItems}}
        size="sm"
        value="tab-1"
        onValueChange={() => {}}
      />
    </HeaderInside>
  `,
  imports: [
    'import { HeaderInside, TabsOverflow } from "borrom-ds-test"',
    'import { Settings } from "lucide-react"',
  ],
  id: "headerinside",
  metadata: {
    nestable: true,
    props: {
      hasTemporaryFigmaPropertyMapping: true,
      hasTemporaryTabsMapping: true,
      figmaNodeReadStatus: "unavailable",
    },
  },
};
