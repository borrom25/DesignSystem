import {
  Children,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { BubbleFile, BubbleImage, BubbleMeta, BubbleText } from "../ui";

interface UseBubbleStateProps {
  children: ReactNode;
}

export const useBubbleState = ({ children }: UseBubbleStateProps) => {
  const [standaloneImage, setStandaloneImage] = useState<boolean>(false);
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
  const metaOutside = !hasText && (hasImage || hasFile);
  const metaChildren = normalizedChildren.filter(
    (child) => isValidElement(child) && child.type === BubbleMeta
  );
  const contentChildren = normalizedChildren.filter(
    (child) => !(isValidElement(child) && child.type === BubbleMeta)
  );

  useEffect(() => {
    setStandaloneImage(hasImage && !hasText && !hasFile);
  }, [hasImage, hasText, hasFile]);

  return {
    fileOnly,
    standaloneImage,
    metaChildren,
    metaOutside,
    contentChildren,
    setStandaloneImage,
  };
};
