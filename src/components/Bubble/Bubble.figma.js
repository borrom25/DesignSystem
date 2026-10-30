// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=4096-23125
// source=src/components/Bubble/Bubble.tsx
// component=Bubble
const figma = require("figma");
const instance = figma.selectedInstance;
const side = instance.getEnum("State", { Left: "incoming", Right: "outgoing" });
const type = instance.getEnum("Type", { Messages: "text", Img: "image", "Messages+File": "text-file", "Messages+Img": "text-image", "Messages+rowImg": "text-image", File: "file" });
const text = instance.findText("Здравствуйте, не приходит письмо после регистрации.")?.textContent || "";
const fileName = instance.findText("nameFile ", { traverseInstances: true })?.textContent || "";
const fileSize = instance.findText("sizenFile ", { traverseInstances: true })?.textContent || "";
const message = type.startsWith("text") ? figma.tsx`<Bubble.Text>${text}</Bubble.Text>` : undefined;
const file = type.includes("file") ? figma.tsx`<Bubble.File fileName="${fileName}" fileSize="${fileSize}" />` : undefined;
const image = type.includes("image") ? figma.tsx`<Bubble.Image imageUrls={[]} />` : undefined;
// Temporary mapping: Figma image fills are not application media URLs.
// Supply real imageUrls for image variants; empty array avoids invented URLs.
// Editable text layers have no root TEXT properties; the observed layer names
// are used. Runtime manages spacing and file/image composition.
export default {
  example: figma.tsx`<Bubble side="${side}">${message}${file}${image}</Bubble>`,
  imports: ['import { Bubble } from "borrom-ds-test"'],
  id: "bubble",
  metadata: { nestable: true },
};
