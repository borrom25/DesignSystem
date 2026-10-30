import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import type { Size } from "@/types";
import { LucideIcon } from "lucide-react";

export const BubbleSide = {
  Incoming: "incoming",
  Outgoing: "outgoing",
} as const;

export type BubbleSide = (typeof BubbleSide)[keyof typeof BubbleSide];

export type BubbleProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  side?: BubbleSide;
  size?: Size;
  children?: ReactNode;
};

export type BubbleTextProps = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode;
};

export type BubbleMetaProps = HTMLAttributes<HTMLDivElement> & {
  time: string;
  userName: string;
};

export type BubbleImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src"
> & {
  wrapperClassName?: string;
  imageUrls: string[];
};

export type CalculateLayoutResult = {
  colSpan: number;
  aspect: string;
  img: string;
};

export type BubbleImageItemProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src"
> & {
  wrapperClassName?: string;
  gridCols: string;
  layout: CalculateLayoutResult[];
  displayed: string[];
  total: number;
  setOpenImage: (value: string) => void;
  size: Size;
};

export type BubbleFileProps = HTMLAttributes<HTMLDivElement> & {
  fileName: ReactNode;
  fileSize?: ReactNode;
  icon?: LucideIcon;
  action?: ReactNode;
  onActionClick?: () => void;
  actionAriaLabel?: string;
};

export type BubbleContextValue = {
  side: BubbleSide;
  size: Size;
  fileOnly: boolean;
  standaloneImage: boolean;
  setStandaloneImage: (value: boolean) => void;
  metaOutside: boolean;
};
