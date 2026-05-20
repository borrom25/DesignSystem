import { calculateLayout } from "../Bubble.utils.ts";
import { useState } from "react";

interface UseBubbleStateStateProps {
  imageUrls: string[];
  setStandaloneImage: (value: boolean) => void;
}

export const useBubbleImageState = ({
  imageUrls,
  setStandaloneImage,
}: UseBubbleStateStateProps) => {
  const [showAll, setShowAll] = useState(false);

  if (imageUrls.length > 1) setStandaloneImage(false);

  const total = imageUrls?.length || 0;
  const displayed = showAll ? imageUrls : imageUrls?.slice(0, 5);
  const count = displayed?.length || 0;

  const gridCols =
    count === 1 ? "grid-cols-1" : count <= 4 ? "grid-cols-2" : "grid-cols-6";
  const layout = calculateLayout(count);

  return {
    total,
    displayed,
    gridCols,
    layout,
    showAll: total > 5 && !showAll,
    setShowAll,
  };
};
