import { HeadBlock } from "../../ui/head-block/HeadBlock.tsx";
import { rootText } from "../../model/contants.ts";
import componentsImg from "../../../../assets/root/components/Components.svg";
import { ScrollReveal } from "../scroll-reveal/ScrollReveal.tsx";
import { SectionReveal } from "../scroll-reveal/SectionReveal.tsx";
import { REVEAL_CHILD } from "../../model/revealTiming.ts";

export const RootComponents = () => {
  return (
    <SectionReveal
      id="components"
      className="flex flex-col items-center gap-[60px] w-full"
    >
      <HeadBlock
        title={rootText.components.title}
        description={rootText.components.description}
      />

      <ScrollReveal
        index={REVEAL_CHILD.cta}
        className="w-full flex justify-center"
      >
        <img
          src={componentsImg}
          className="block h-auto w-full max-w-full"
          alt="Components"
          decoding="async"
          fetchPriority="high"
        />
      </ScrollReveal>
    </SectionReveal>
  );
};
