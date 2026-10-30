import { Button, Text, TextColor, TextShade, TextVariant } from "@/components";
import { ResourceLinkCard } from "./ui";
import { Link } from "react-router-dom";
import { Size } from "@/types";
import { cn } from "@/utils";
import logoAlabuga from "@docs/assets/root/logo/LogoAlabuga.gif";
import commentCursorGreen from "@docs/assets/root/main/CommentCursorGreen.svg";
import commentCursorPink from "@docs/assets/root/main/CommentCursorPink.svg";
import commentCursorYellow from "@docs/assets/root/main/CommentCursorYellow.svg";
import { rootText, resourceLinks } from "../../model/contants.ts";
import {
  CARD_STEPS,
  HERO_CURSORS,
  HERO_LOGO_FRAME,
  quickStartLink,
  type HeroStep,
} from "./model/constants.ts";
import "./animations/animations.css";

const motionReduce =
  "motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:duration-0";

const revealIn =
  "animate-in fade-in slide-in-from-bottom-4 duration-[400ms] fill-mode-forwards ease-out";

const cursorSources = {
  green: commentCursorGreen,
  pink: commentCursorPink,
  yellow: commentCursorYellow,
} as const;

type RootMainProps = {
  isVisible: (step: HeroStep) => boolean;
};

export function RootMain({ isVisible }: RootMainProps) {
  return (
    <section className="relative flex w-full items-center justify-center flex-col overflow-visible">
      {isVisible("logo") && (
        <div
          className={cn(
            HERO_LOGO_FRAME.box,
            motionReduce,
            "animate-in fade-in zoom-in-75 duration-500 fill-mode-forwards"
          )}
        >
          <img src={logoAlabuga} alt="" className={HERO_LOGO_FRAME.img} />
        </div>
      )}
      <div className="text-center flex flex-col gap-7 items-center mt-1">
        {isVisible("title") && (
          <h1
            className={cn(
              "m-0 font-roboto-flex text-[96px] font-extrabold leading-none tracking-[0.2px] text-primary",
              motionReduce,
              "animate-in fade-in slide-in-from-bottom-full duration-[400ms] fill-mode-forwards ease-out"
            )}
          >
            {rootText.main.title}
          </h1>
        )}
        {isVisible("description") && (
          <Text
            as="p"
            variant={TextVariant.H4}
            color={TextColor.Basic}
            shade={TextShade.Complementary}
            className={cn("max-w-[626px]", motionReduce, revealIn)}
          >
            {rootText.main.description}
          </Text>
        )}
      </div>

      {isVisible("btnQuickStart") && (
        <div className={cn("mt-15", motionReduce, revealIn)}>
          <Button color={quickStartLink.color} asChild size={Size.Md}>
            <Link to={quickStartLink.to}>{quickStartLink.title}</Link>
          </Button>
        </div>
      )}

      {isVisible("cardDesigners") && (
        <div className="flex gap-9 mt-20">
          {resourceLinks.map((resource, index) => {
            const step = CARD_STEPS[index];
            if (!step || !isVisible(step)) return null;

            return (
              <div key={resource.href} className={cn(motionReduce, revealIn)}>
                <ResourceLinkCard {...resource} />
              </div>
            );
          })}
        </div>
      )}

      {isVisible("cursors") && (
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {HERO_CURSORS.map((cursor) => (
            <div
              key={cursor.id}
              className={cn(
                "absolute",
                cursor.className,
                motionReduce,
                "animate-in fade-in zoom-in-95 duration-500 fill-mode-both ease-out"
              )}
              style={{ animationDelay: `${cursor.delayMs}ms` }}
            >
              <img
                src={cursorSources[cursor.id]}
                alt=""
                decoding="async"
                className={cn(
                  "max-w-none will-change-transform motion-reduce:animate-none",
                  cursor.imgClassName
                )}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
