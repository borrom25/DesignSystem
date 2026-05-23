// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=621-3442
// source=src/components/Header/Header.tsx
// component=Header
const figma = require("figma");
const instance = figma.selectedInstance;

const media = instance.getEnum("Media", {
  Desktop: "desktop",
  Mobile: "mobile",
});

const hasTabList = instance.getBoolean("tabList");
const hasSlotInfo = instance.getBoolean("slotInfo");
const hasSlotHead = instance.getBoolean("slotHead");
const hasSlotAction = instance.getBoolean("slotAction");

const tabListSlot = instance.getSlot("<slotTablist>");
const infoSlot = instance.getSlot("<slotInfo>");
const actionSlot = instance.getSlot("<slotAction>");

void infoSlot;
void actionSlot;

const tabsContent =
  tabListSlot ||
  figma.tsx`
    <TabsOverflow
      size="sm"
      value="overview"
      onValueChange={() => {}}
      items={[
        { label: "Overview", value: "overview" },
        { label: "Activity", value: "activity" },
        { label: "Files", value: "files" },
        { label: "Members", value: "members" },
      ]}
    />
  `;

const childrenContent = hasTabList ? tabsContent : "";
const accountMenuProp = hasSlotAction
  ? figma.tsx`
      accountMenu={
        <AccountMenu
          src="https://i.pravatar.cc/160?img=68"
          fullName="Name User"
        />
      }
    `
  : "";

// Temporary mapping:
// Figma exposes info/action slots, while Header runtime has one children slot
// and a constrained right action area: notification + AccountMenu.
export default {
  example: figma.tsx`
    <Header
      title="Платформа"
      showMenuButton
      showNotification
      onMenuClick={() => {}}
      onNotificationClick={() => {}}
      ${accountMenuProp}
    >
      ${childrenContent}
    </Header>
  `,
  imports: [
    'import { AccountMenu, Header, TabsOverflow } from "borrom-ds-test"',
  ],
  id: "header",
  metadata: {
    nestable: true,
    props: {
      media,
      hasTabList,
      hasSlotInfo,
      hasSlotHead,
      hasSlotAction,
      figmaNodeId: "621:3442",
      figmaComponent: "Header / mainPage",
      mediaHandledByScreenProvider: true,
      slotTablistMappedToChildren: hasTabList,
      slotActionMappedToAccountMenu: hasSlotAction,
      slotInfoUnsupportedByRuntime: hasSlotInfo,
      headerKind: "mainPage",
    },
  },
};
