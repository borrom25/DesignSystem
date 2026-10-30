export interface PdfModalProps {
  file?: File;
  src?: string | null;
  isOpen: boolean;
  onClose: () => void;
  onRemove?: () => void;
  disabled?: boolean;
}
