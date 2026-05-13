// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19497-1623
// source=src/components/TabsOverflow/TabsOverflow.tsx
// component=TabsOverflow
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const showMore = instance.getBoolean("Ещё");

const containerClassNameBySize = {
  xs: "w-[245px]",
  sm: "w-[285px]",
  md: "w-[300px]",
};

const itemsWithoutOverflow = figma.tsx`[
  { value: "tab-1", label: "Tab" },
  { value: "tab-2", label: "Tab" },
  { value: "tab-3", label: "Tab" }
]`;

const itemsWithOverflow = figma.tsx`[
  { value: "tab-1", label: "Tab" },
  { value: "tab-2", label: "Tab" },
  { value: "tab-3", label: "Tab" },
  { value: "tab-4", label: "Tab" },
  { value: "tab-5", label: "Tab" },
  { value: "tab-6", label: "Tab" }
]`;

// Temporary mapping: Figma boolean "Ещё" has no direct runtime prop.
// We emulate this by changing items count so overflow appears/disappears.
const itemsCode = showMore ? itemsWithOverflow : itemsWithoutOverflow;

export default {
  example: figma.tsx`
    <div className="${containerClassNameBySize[size]}">
      <TabsOverflow
        size="${size}"
        items={${itemsCode}}
        value="tab-1"
        onValueChange={() => {}}
        moreLabel="Ещё"
      />
    </div>
  `,
  imports: ['import { TabsOverflow } from "borrom-ds-test"'],
  id: "tabsoverflow",
  metadata: {
    nestable: true,
    props: {
      showMore,
      hasTemporaryShowMoreMapping: true,
      hasTemporarySlotMapping: true,
    },
  },
};
