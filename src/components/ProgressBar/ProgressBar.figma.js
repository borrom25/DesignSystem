// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1274-160
// source=src/components/ProgressBar/ProgressBar.tsx
// component=ProgressBar
const figma = require("figma");
const instance = figma.selectedInstance;

const view = instance.getEnum("View", {
  Line: "line",
  Segments: "segments",
});

const type = instance.getEnum("Type", {
  Head: "head",
  Status: "status",
  Clear: "clear",
});

const state = instance.getEnum("State", {
  Default: "default",
  Progress: "progress",
  Done: "done",
  Error: "error",
});

const showIcon = instance.getBoolean("Icon");
const showHead = instance.getBoolean("Head");
const slotProgressDone = instance.getSlot("<slotprogressDone>");
const slotProgressError = instance.getSlot("<slotprogressError>");
const slotProgressDone2 = instance.getSlot("<slotprogressDone>2");

// Temporary mapping: segment slots in Figma are represented by data-driven
// segmentedItems in the runtime component, not by React slots.
void slotProgressDone;
void slotProgressError;
void slotProgressDone2;

const statusByState = {
  default: "loading",
  progress: "loading",
  done: "success",
  error: "error",
};

const progressByState = {
  default: 0,
  progress: 65,
  done: 100,
  error: 100,
};

const segmentedItemsByState = {
  default: '[{ progress: 0, status: "loading" }, { progress: 0, status: "loading" }, { progress: 0, status: "loading" }]',
  progress: '[{ status: "success" }, { progress: 35, status: "loading" }, { progress: 0, status: "loading" }]',
  done: '[{ status: "success" }, { status: "success" }, { status: "success" }]',
  error: '[{ status: "success" }, { progress: 35, status: "loading" }, { status: "error" }]',
};

const status = statusByState[state];
const progress = progressByState[state];
const hasTitle = type === "head" || showHead;
const showStatusLabel = type !== "clear";
const segmentedItems = view === "segments" ? segmentedItemsByState[state] : "";
const title = "Прогресс заполнения";

// Temporary mapping:
// Icon=Off cannot be generated safely because ProgressBar currently exposes
// icon?: LucideIcon and uses the default icon when icon is undefined.
export default {
  example: figma.tsx`
    <ProgressBar
      status="${status}"
      ${segmentedItems ? figma.tsx`segmentedItems={${segmentedItems}}` : figma.tsx`progress={${progress}}`}
      ${hasTitle ? figma.tsx`title="${title}"` : ""}
      ${!showStatusLabel ? "showStatusLabel={false}" : ""}
    />
  `,
  imports: [
    'import { ProgressBar } from "borrom-ds-test"',
  ],
  id: "progress-bar",
  metadata: {
    nestable: true,
    props: {
      view,
      type,
      state,
      status,
      progress,
      hasTitle,
      showStatusLabel,
      iconHiddenInFigmaNotMapped: !showIcon,
      segmentedItemsMappedFromFigmaSlots: view === "segments",
      figmaComponentName: "Progress",
      figmaNodeId: "1274:160",
    },
  },
};
