export type DownloadPlaygroundState = {
  fileName: string;
  fileSize: string;
  withBackground: boolean;
  showFileSize: boolean;
  customIcon: boolean;
};

export const DOWNLOAD_DEFAULT_STATE: DownloadPlaygroundState = {
  fileName: "report.pdf",
  fileSize: "2.4 MB",
  withBackground: true,
  showFileSize: true,
  customIcon: false,
};
