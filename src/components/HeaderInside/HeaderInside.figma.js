// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=658-11298
// source=src/components/HeaderInside/HeaderInside.tsx
// component=HeaderInside
const figma = require("figma");
const instance = figma.selectedInstance;

const media = instance.getEnum("Media", {
  Desktop: "desktop",
  Mobile: "mobile",
});

const hasTabList = instance.getBoolean("tabList");
const hasSlotHead = instance.getBoolean("slotHead");
const hasTitleButton = instance.getBoolean("titleButton");
const hasImageSlot = instance.getBoolean("imageSlot");
const hasSlotInfo = instance.getBoolean("slotInfo");
const hasSubtitle = instance.getBoolean("subtitlePage");

const title = instance.getString("↳ titlePage");
const subtitle = instance.getString("↳ subtitlePage");

const headSlot = instance.getSlot("<slotHead>");
const imageSlot = instance.getSlot("<slotImage>");
const tabListSlot = instance.getSlot("<slotTablist>");
const infoSlot = instance.getSlot("<slotInfo>");

void headSlot;
void imageSlot;
void infoSlot;

const tabsContent =
  tabListSlot ||
  figma.tsx`
    <TabsOverflow
      items={[
        { label: "Overview", value: "overview" },
        { label: "Activity", value: "activity" },
        { label: "Files", value: "files" },
        { label: "Members", value: "members" },
      ]}
      size="sm"
      value="overview"
      onValueChange={() => {}}
    />
  `;

const childrenContent = hasTabList ? tabsContent : "";
const imageSrcProp = hasImageSlot
  ? 'imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=72&h=72&fit=crop"'
  : "";
const subtitleProp = hasSubtitle ? figma.tsx`subtitle="${subtitle}"` : "";
const actionProps = hasTitleButton
  ? figma.tsx`
      showActionButton
      actionIcon={Settings}
      onActionClick={() => {}}
    `
  : "showActionButton={false}";
const accountMenuProp = hasSlotInfo
  ? figma.tsx`
      accountMenu={
        <AccountMenu
          src="https://i.pravatar.cc/160?img=68"
          fullName="Name User"
        />
      }
    `
  : "";

export default {
  example: figma.tsx`
    <HeaderInside
      title="${title}"
      ${subtitleProp}
      ${imageSrcProp}
      ${actionProps}
      showNotification
      onBackClick={() => {}}
      onNotificationClick={() => {}}
      ${accountMenuProp}
    >
      ${childrenContent}
    </HeaderInside>
  `,
  imports: [
    'import { AccountMenu, HeaderInside, TabsOverflow } from "borrom-ds-test"',
    'import { Settings } from "lucide-react"',
  ],
  id: "headerinside",
  metadata: {
    nestable: true,
    props: {
      media,
      hasTabList,
      hasSlotHead,
      hasTitleButton,
      hasImageSlot,
      hasSlotInfo,
      hasSubtitle,
      figmaNodeId: "658:11298",
      figmaComponent: "Header / insidePage",
      mediaHandledByScreenProvider: true,
      backButtonAlwaysRenderedByRuntime: true,
      slotTablistMappedToChildren: hasTabList,
      slotInfoMappedToAccountMenu: hasSlotInfo,
      slotImageMappedToImageSrc: hasImageSlot,
      headerKind: "insidePage",
    },
  },
};
