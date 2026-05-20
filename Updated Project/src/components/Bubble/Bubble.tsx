import { useMemo } from "react";
import { cn } from "@/utils";
import { Size } from "@/types";
import type { BubbleProps } from "./Bubble.types";
import { BubbleSide } from "./Bubble.types";
import { bubbleStyles } from "./styles";
import { BubbleFile, BubbleImage, BubbleMeta, BubbleText } from "./ui";
import { useBubbleState } from "./hooks/useBubbleState.ts";
import { BubbleContext } from "./Bubble.context.ts";

function BubbleRoot({
  side = BubbleSide.Incoming,
  size = Size.Md,
  className,
  children,
  ...restProps
}: BubbleProps) {
  const {
    contentChildren,
    metaChildren,
    metaOutside,
    standaloneImage,
    setStandaloneImage,
    fileOnly,
  } = useBubbleState({ children });
  const contextValue = useMemo(
    () => ({
      side,
      size,
    }),
    [side, size]
  );

  return (
    <BubbleContext.Provider
      value={{
        ...contextValue,
        standaloneImage,
        metaOutside,
        fileOnly,
        setStandaloneImage,
      }}
    >
      <div
        className={cn(
          bubbleStyles.container,
          bubbleStyles.alignment[side],
          className
        )}
        {...restProps}
      >
        {standaloneImage ? (
          contentChildren
        ) : (
          <div
            className={cn(
              bubbleStyles.shell.base,
              bubbleStyles.shell.radius[side],
              bubbleStyles.shell.side[side],
              fileOnly
                ? bubbleStyles.shell.fileSize[size]
                : bubbleStyles.shell.size[size]
            )}
          >
            {contentChildren}
            {!metaOutside && metaChildren}
          </div>
        )}
        {metaOutside && (
          <div className={bubbleStyles.shell.metaOutside}>{metaChildren}</div>
        )}
      </div>
    </BubbleContext.Provider>
  );
}

export const Bubble = Object.assign(BubbleRoot, {
  Text: BubbleText,
  Meta: BubbleMeta,
  Image: BubbleImage,
  File: BubbleFile,
});
