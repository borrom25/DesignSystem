import { useFileObjectUrl } from "./useFileObjectUrl";
import { useModalEscapeLock } from "./useModalEscapeLock";
import { downloadUrl } from "../utils/downloadUrl";

export interface UseMediaModalParams {
  file?: File;
  src?: string | null;
  isOpen: boolean;
  onClose: () => void;
  onRemove?: () => void;
  fallbackName: string;
}

export function useMediaModal({
  file,
  src,
  isOpen,
  onClose,
  onRemove,
  fallbackName,
}: UseMediaModalParams) {
  const previewUrl = useFileObjectUrl(file, src);
  const mediaName = file?.name ?? fallbackName;

  useModalEscapeLock(isOpen, onClose);

  const handleDownload = async () => {
    if (!previewUrl) return;
    await downloadUrl(previewUrl, mediaName);
  };

  const handleRemove = () => {
    onRemove?.();
    onClose();
  };

  return {
    previewUrl,
    mediaName,
    handleDownload,
    handleRemove,
  };
}
