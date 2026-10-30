// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=4027-8157
// source=src/components/Download/Download.tsx
// component=Download
const figma = require("figma");
const instance = figma.selectedInstance;
const showButton = instance.getBoolean("Button");
const fileName = instance.findText("nameFile ")?.textContent || "Документ.pdf";
const fileSize = instance.findText("sizenFile ")?.textContent || "1 MB";
// Temporary mapping: connect the real download URL in the application.
export default {
  example: figma.tsx`<Download fileName="${fileName}" fileSize="${fileSize}" ${showButton ? 'action={<Button size="xs">Скачать</Button>}' : ""} />`,
  imports: ['import { Download, Button } from "borrom-ds-test"'],
  id: "download",
  metadata: { nestable: true },
};
