import type { ComponentType } from "react";
import { HeadBlock } from "../../ui/head-block/HeadBlock.tsx";
import { rootText } from "../../model/contants.ts";
import { Color, Size } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "@/components";
import { useGetIcons } from "./model/useGetIcons.ts";
import { useIconsReveal } from "./model/useIconsReveal.ts";
import { GRID_COLS } from "./model/constants.ts";
import { ScrollReveal } from "../scroll-reveal/ScrollReveal.tsx";
import {
  SectionReveal,
  useRevealChildEnabled,
} from "../scroll-reveal/SectionReveal.tsx";
import { REVEAL_CHILD } from "../../model/revealTiming.ts";

const IconsGrid = () => {
  const { randomIcons } = useGetIcons();
  const mediaEnabled = useRevealChildEnabled(REVEAL_CHILD.media);
  const { containerRef, getIconStyle, onIconTransitionEnd } = useIconsReveal(
    randomIcons.length,
    mediaEnabled
  );

  return (
    <div
      ref={containerRef}
      className="mt-[20px] grid gap-8 justify-items-center"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
      }}
    >
      {randomIcons.map((IconComponent, index) => {
        const Component = IconComponent as ComponentType<{
          size?: number;
          className?: string;
        }>;

        return (
          <div
            key={index}
            className="flex items-center justify-center aspect-square w-[40px] bg-generic-medium rounded-[4px]"
            style={getIconStyle(index)}
            onTransitionEnd={() => onIconTransitionEnd(index)}
          >
            <Component size={20} className="text-primary" />
          </div>
        );
      })}
    </div>
  );
};

export const RootIcons = () => {
  return (
    <SectionReveal
      id="icons"
      className="flex flex-col items-center justify-center gap-9"
    >
      <HeadBlock
        title={rootText.icons.title}
        description={rootText.icons.description}
      />

      <ScrollReveal>
        <Button color={Color.Generic} asChild size={Size.Md}>
          <Link to={"icons"}>Смотреть пак</Link>
        </Button>
      </ScrollReveal>

      <IconsGrid />
    </SectionReveal>
  );
};
