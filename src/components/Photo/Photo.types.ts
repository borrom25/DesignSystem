export interface PhotoItem {
  src: string;
  alt?: string;
}

export interface PhotoViewCopy {
  baseSrc: string;
  item: PhotoItem;
}

export interface PhotoProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  items: PhotoItem[];
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  onDownload?: (item: PhotoItem, index: number) => void;
  onEdit?: (item: PhotoItem, index: number) => void;
  onDelete?: (item: PhotoItem, index: number) => void;
  onRotate?: (
    item: PhotoItem,
    index: number,
    delta: 90 | -90
  ) => void | PhotoItem | Promise<void | PhotoItem | undefined>;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}
