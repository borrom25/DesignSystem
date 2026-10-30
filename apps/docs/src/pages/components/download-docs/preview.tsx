import { FileSpreadsheet } from "lucide-react";
import { Download } from "@/components";
import type { DownloadPlaygroundState } from "./types";

const SAMPLE_FILE_CONTENT = "A".repeat(1024);

function downloadSampleFile(fileName: string) {
  const blob = new Blob([SAMPLE_FILE_CONTENT], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName || "sample.txt";
  link.click();
  URL.revokeObjectURL(url);
}

export function DownloadPreview(state: DownloadPlaygroundState) {
  return (
    <div className="w-full max-w-sm">
      <Download
        fileName={state.fileName}
        fileSize={state.showFileSize ? state.fileSize : undefined}
        withBackground={state.withBackground}
        icon={state.customIcon ? FileSpreadsheet : undefined}
        onActionClick={() => downloadSampleFile(state.fileName)}
      />
    </div>
  );
}
