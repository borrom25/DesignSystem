import type { DownloadPlaygroundState } from "./types";

export function createDownloadUsageCode(
  packageName: string,
  state: DownloadPlaygroundState
) {
  const iconImport = state.customIcon
    ? '\nimport { FileSpreadsheet } from "lucide-react";'
    : "";
  const iconProp = state.customIcon ? "\n      icon={FileSpreadsheet}" : "";
  const fileSizeProp = state.showFileSize
    ? `\n      fileSize="${state.fileSize}"`
    : "";
  const backgroundProp = state.withBackground
    ? ""
    : "\n      withBackground={false}";

  return `import { Download } from "${packageName}";
import "${packageName}/styles.css";${iconImport}

export function Example() {
  return (
    <Download
      fileName="${state.fileName}"${fileSizeProp}${iconProp}${backgroundProp}
      onActionClick={() => {
        const blob = new Blob(["A".repeat(1024)], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "${state.fileName}";
        link.click();
        URL.revokeObjectURL(url);
      }}
    />
  );
}`;
}
