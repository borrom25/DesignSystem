import type { ReactNode } from "react";

export interface ImageModalProps {
  file?: File;
  src?: string | null;
  isOpen: boolean;
  onClose: () => void;
  onRemove?: () => void;
  disabled?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  children?: ReactNode;
}
