import { Children, isValidElement, ReactNode } from "react";
import { BubbleFile, BubbleImage, BubbleMeta, BubbleText } from "../ui";

interface UseBubbleStateProps {
  children: ReactNode;
}

export const useBubbleState = ({ children }: UseBubbleStateProps) => {
  const normalizedChildren = Children.toArray(children);
  const hasImage = normalizedChildren.some(
    (child) => isValidElement(child) && child.type === BubbleImage
  );
  const hasFile = normalizedChildren.some(
    (child) => isValidElement(child) && child.type === BubbleFile
  );
  const hasText = normalizedChildren.some(
    (child) => isValidElement(child) && child.type === BubbleText
  );
  const fileOnly = hasFile && !hasText && !hasImage;
  const standaloneImage = hasImage && !hasText && !hasFile;
  const metaOutside = !hasText && (hasImage || hasFile);
  const metaChildren = normalizedChildren.filter(
    (child) => isValidElement(child) && child.type === BubbleMeta
  );
  const contentChildren = normalizedChildren.filter(
    (child) => !(isValidElement(child) && child.type === BubbleMeta)
  );

  return {
    fileOnly,
    standaloneImage,
    metaChildren,
    metaOutside,
    contentChildren,
  };
};
