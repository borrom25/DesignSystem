import { HeadBlock } from "../head-block/HeadBlock.tsx";
import { rootText } from "../../model/contants.ts";
import { themizerStyles } from "./styles";
import { IMAGE_LAYOUT } from "./model/constants.ts";
import { useThemizerStage } from "./model/useThemizerStage.ts";
import {
  SectionReveal,
  useRevealChildEnabled,
} from "../scroll-reveal/SectionReveal.tsx";
import { REVEAL_CHILD } from "../../model/revealTiming.ts";

const ThemizerStage = () => {
  const mediaEnabled = useRevealChildEnabled(REVEAL_CHILD.cta);
  const {
    containerRef,
    viewportStyle,
    stageStyle,
    getImageStyle,
    onImageTransitionEnd,
  } = useThemizerStage(mediaEnabled);

  return (
    <div
      ref={containerRef}
      className={themizerStyles.viewport}
      style={viewportStyle}
    >
      <div className={themizerStyles.stage} style={stageStyle}>
        {IMAGE_LAYOUT.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            decoding="async"
            className={themizerStyles.image}
            style={getImageStyle(image, index)}
            onTransitionEnd={() =>
              onImageTransitionEnd(index, IMAGE_LAYOUT.length)
            }
          />
        ))}
      </div>
    </div>
  );
};

export const RootThemizer = () => {
  return (
    <SectionReveal id="themizer" className={themizerStyles.base}>
      <HeadBlock
        title={rootText.themizer.title}
        description={rootText.themizer.description}
        descriptionClassName={themizerStyles.description}
      />

      <ThemizerStage />
    </SectionReveal>
  );
};
