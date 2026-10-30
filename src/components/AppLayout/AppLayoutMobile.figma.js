// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=3159-29
// source=src/components/AppLayout/AppLayout.tsx
// component=AppLayout
const figma = require("figma");
const instance = figma.selectedInstance;
const page = instance.getEnum("Page", { Main: "main", Inside: "inside", Process: "process" });
const menu = instance.getBoolean("buttonMenu");
const content = instance.getSlot("<slotContent>");
const body = content?.length ? content : figma.tsx`{null}`;
const header = instance.findLayers(n => n.type === "INSTANCE" && n.name.startsWith("Header /"))[0];
const headerCode = header && header.type === "INSTANCE" ? header.executeTemplate().example : undefined;
// Temporary mapping: the public responsive AppLayout is used; MobileAppLayout is
// internal and cannot be imported from the npm package. ScreenProvider controls
// responsive layout. Page selects the nested header; its template owns its props.
// Root buttonMenu is recorded as intent; configure Header.showMenuButton in code.
export default {
  example: figma.tsx`<AppLayout ${headerCode ? figma.tsx`header={${headerCode}}` : ""}>${body}</AppLayout>`,
  imports: ['import { AppLayout } from "borrom-ds-test"'],
  id: "app-layout-mobile",
  metadata: { nestable: true, props: { page, requestedMenu: menu } },
};
