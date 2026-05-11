import type {
  HTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
  ComponentType,
  SVGProps,
} from "react";
import type { Size } from "@/types";

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

export type BubbleImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

export type BubbleFileIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type BubbleFileProps = HTMLAttributes<HTMLDivElement> & {
  fileName: ReactNode;
  fileSize?: ReactNode;
  icon?: BubbleFileIcon;
  action?: ReactNode;
  onActionClick?: () => void;
  actionAriaLabel?: string;
};

export type BubbleContextValue = {
  side: BubbleSide;
  size: Size;
  standaloneImage: boolean;
  metaOutside: boolean;
};
