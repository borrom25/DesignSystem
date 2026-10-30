import { Text, TextColor, TextShade, TextVariant } from "@/components";
import { resourceLinks } from "../../model/contants.ts";
import logoMin from "@/assets/icons/logo-min.svg";
import {
  SectionReveal,
  useSectionRevealState,
} from "../scroll-reveal/SectionReveal.tsx";
import {
  mediaRevealIn,
  revealClassName,
} from "../scroll-reveal/revealStyles.ts";

function FooterBar() {
  const { isVisible } = useSectionRevealState();

  return (
    <div
      className={revealClassName(
        isVisible,
        mediaRevealIn,
        "h-[72px] w-[98.5vw] border-t border-line bg-generic flex justify-center"
      )}
    >
      <div className="w-[600px] flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={logoMin} />
          <p className="text-primary font-bold text-xl leading-8 tracking-[-0.01em]">
            alabuga
          </p>
        </div>
        <Text
          variant={TextVariant.B1}
          color={TextColor.Basic}
          shade={TextShade.Secondary}
        >
          alabuga UI team 2026
        </Text>
        <div className="flex items-center gap-7">
          {resourceLinks.map(({ logo, href }) => (
            <a href={href} key={href}>
              <img
                src={logo}
                className="size-11 grayscale transition duration-300 hover:grayscale-0"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RootFooter() {
  return (
    <SectionReveal id="footer" className="w-full">
      <FooterBar />
    </SectionReveal>
  );
}
