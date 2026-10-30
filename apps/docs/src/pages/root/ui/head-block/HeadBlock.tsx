import componentIcon from "../../../../assets/ComponentIcon.svg";
import {
  Text,
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
} from "@/components";
import { cn } from "@/utils";
import { REVEAL_CHILD } from "../../model/revealTiming.ts";
import { useSectionRevealState } from "../scroll-reveal/SectionReveal.tsx";
import {
  headRevealIn,
  revealDelayStyle,
  revealClassName,
} from "../scroll-reveal/revealStyles.ts";

interface HeadBlockProps {
  title: string;
  description: string;
  descriptionClassName?: string;
}

export function HeadBlock({
  title,
  description,
  descriptionClassName,
}: HeadBlockProps) {
  const { isVisible, childDelay } = useSectionRevealState();

  return (
    <div className="text-center flex flex-col items-center gap-9">
      <img
        src={componentIcon}
        className={revealClassName(isVisible, headRevealIn, "size-20")}
        style={revealDelayStyle(isVisible, childDelay(REVEAL_CHILD.icon))}
        alt=""
      />
      <Text
        as="h1"
        variant={TextVariant.D1}
        weight={TextWeight.Bold}
        color={TextColor.Basic}
        shade={TextShade.Heavy}
        className={revealClassName(isVisible, headRevealIn)}
        style={revealDelayStyle(isVisible, childDelay(REVEAL_CHILD.title))}
      >
        {title}
      </Text>
      <Text
        as="p"
        variant={TextVariant.B1}
        color={TextColor.Basic}
        shade={TextShade.Complementary}
        className={revealClassName(
          isVisible,
          headRevealIn,
          cn("max-w-[582px]", descriptionClassName)
        )}
        style={revealDelayStyle(
          isVisible,
          childDelay(REVEAL_CHILD.description)
        )}
      >
        {description}
      </Text>
    </div>
  );
}
