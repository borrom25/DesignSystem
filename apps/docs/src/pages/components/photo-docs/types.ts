export type PhotoPlaygroundState = {
  withDownload: boolean;
  withEdit: boolean;
  withDelete: boolean;
};

export const PHOTO_DEFAULT_STATE: PhotoPlaygroundState = {
  withDownload: true,
  withEdit: true,
  withDelete: true,
};
