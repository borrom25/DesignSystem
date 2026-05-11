export interface ImageModalProps {
  file: File;
  isOpen: boolean;
  onClose: () => void;
  onRemove: () => void;
  disabled?: boolean;
}
