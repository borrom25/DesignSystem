// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3743-1253
// source=src/components/InputFiles/InputFiles.tsx
// component=InputFiles
const figma = require("figma");
const instance = figma.selectedInstance;

const textTitle = instance.getString("textTitle");
const textSusbtitle = instance.getString("textSusbtitle");

const showRootSlot = instance.getBoolean("listUploader");
const showContainerText = instance.getBoolean("containerText");
const showSusbtitle = instance.getBoolean("Susbtitle");
const multiple = instance.getEnum("Type", { Multiple: true, Single: false });
const error = instance.getEnum("Error", { Off: false, On: true });

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Upload: "upload",
  DIsable: "disable",
  Error: "error",
});

const disabled = state === "disable";
const isUpload = state === "upload";

// Temporary mapping: Figma keeps full title in one property, while runtime
// text is split between textSelect and textDrag.
const textSelect = showContainerText
  ? isUpload
    ? "Перетащите его сюда"
    : textTitle
  : "";
const textDrag = showContainerText && !isUpload ? "или перетащите сюда" : "";

const placeholderProp =
  showContainerText && showSusbtitle
    ? figma.tsx`placeholder="${textSusbtitle}"`
    : "";

// Temporary mapping: Figma slot content is visual. Runtime previews are
// data-driven and require File[] values.
const previewProp = showRootSlot
  ? figma.tsx`defaultValue={[new File(["Пример файла"], "example.txt", { type: "text/plain" })]}`
  : "";

export default {
  example: figma.tsx`
    <InputFiles
      size="md"
      multiple={${multiple}}
      textSelect="${textSelect}"
      textDrag="${textDrag}"
      ${placeholderProp}
      ${disabled ? "disabled" : ""}
      ${state === "error" || error ? 'error hintError="Ошибка загрузки"' : ""}
      ${showRootSlot ? 'label="Файлы"' : ""}
      ${previewProp}
      ${showRootSlot ? "showDownload" : ""}
      ${showRootSlot && isUpload ? "isLoading uploaderPercent={1}" : ""}
    />
  `,
  imports: ['import { InputFiles } from "borrom-ds-test"'],
  id: "inputfiles",
  metadata: {
    nestable: true,
    props: {
      hasRuntimeHoverState: state === "hover",
      hasRuntimeDragState: isUpload,
      hasTemporarySlotMapping: showRootSlot,
      hasTemporaryContainerTextMapping: !showContainerText,
    },
  },
};
