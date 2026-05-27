import { Children, isValidElement } from "react";
import {
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselTrack,
} from "../ui";

interface useCarouselStateProps {
  children: React.ReactNode;
}

export const useCarouselState = ({ children }: useCarouselStateProps) => {
  const normalizedChildren = Children.toArray(children);

  const trackChildren = normalizedChildren.find(
    (child) => isValidElement(child) && child.type === CarouselTrack
  );

  const trackNestedChildren = isValidElement(trackChildren)
    ? Children.toArray(trackChildren.props.children)
    : [];

  const itemChildren = trackNestedChildren.filter(
    (child) => isValidElement(child) && child.type === CarouselItem
  );

  const indicatorsChildren = normalizedChildren.filter(
    (child) => isValidElement(child) && child.type === CarouselIndicators
  );

  const prevButtonChildren = normalizedChildren.filter(
    (child) => isValidElement(child) && child.type === CarouselPrevButton
  );

  const nextButtonChildren = normalizedChildren.filter(
    (child) => isValidElement(child) && child.type === CarouselNextButton
  );

  const itemsCount = itemChildren.length;

  return {
    itemsCount,
    indicatorsChildren,
    prevButtonChildren,
    nextButtonChildren,
    trackChildren,
  };
};
