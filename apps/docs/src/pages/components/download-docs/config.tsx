import { CloudDownload } from "lucide-react";
import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderDownloadControls } from "./controls";
import { DownloadPreview } from "./preview";
import { DOWNLOAD_PROPS } from "./props";
import { DOWNLOAD_DEFAULT_STATE, type DownloadPlaygroundState } from "./types";
import { createDownloadUsageCode } from "./usage";

export const downloadDocsConfig: ComponentDocsConfig<DownloadPlaygroundState> =
  {
    title: "Download",
    icon: CloudDownload,
    description:
      "Download показывает карточку файла с именем, размером и действием скачивания.",
    props: DOWNLOAD_PROPS,
    initialState: DOWNLOAD_DEFAULT_STATE,
    createUsageCode: createDownloadUsageCode,
    renderPreview: DownloadPreview,
    renderControls: renderDownloadControls,
  };
