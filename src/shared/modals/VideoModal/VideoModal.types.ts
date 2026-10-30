export interface VideoModalProps {
  file?: File;
  src?: string | null;
  videoType?: string;
  isOpen: boolean;
  onClose: () => void;
  onRemove?: () => void;
  disabled?: boolean;
}
