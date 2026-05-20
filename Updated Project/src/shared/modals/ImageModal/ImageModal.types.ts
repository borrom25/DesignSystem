export interface ImageModalProps {
  file?: File;
  src?: string | null;
  isOpen: boolean;
  onClose: () => void;
  onRemove?: () => void;
  disabled?: boolean;
}
