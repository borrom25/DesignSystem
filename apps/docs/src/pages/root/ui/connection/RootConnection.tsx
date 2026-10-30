import { HeadBlock } from "../../ui/head-block/HeadBlock.tsx";
import { rootText } from "../../model/contants.ts";
import {
  Button,
  TabsOverflow,
  Text,
  TextColor,
  TextShade,
  TextVariant,
} from "@/components";
import {
  connectionCode,
  ConnectionTabs,
  connectionText,
  tabsOverflowItems,
} from "./model/constants.ts";
import { CheckCheck, Copy } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../scroll-reveal/ScrollReveal.tsx";
import { SectionReveal } from "../scroll-reveal/SectionReveal.tsx";

export const RootConnection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [tab, setTab] = useState<ConnectionTabs>("npm");

  const handleCopy = async () => {
    const textToCopy = `${connectionText[tab]} ${connectionCode}`;
    await navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <SectionReveal
      id="connection"
      className="flex items-center flex-col gap-[20px]"
    >
      <HeadBlock
        title={rootText.connection.title}
        description={rootText.connection.description}
      />
      <ScrollReveal className="flex flex-col items-center gap-5">
        <div className="flex flex-col gap-5 mt-[20px] w-[626px] rounded-3xl bg-generic border-line px-9 pt-2 pb-9">
          <div className="flex justify-between items-center">
            <TabsOverflow
              value={tab}
              onValueChange={setTab}
              items={tabsOverflowItems}
            />
            <Button
              iconOnly={isCopied ? CheckCheck : Copy}
              size={Size.Xs}
              color={Color.Generic}
              type={Type.Flat}
              onClick={handleCopy}
            />
          </div>
          <Text
            variant={TextVariant.B1}
            color={TextColor.Basic}
            shade={TextShade.Complementary}
          >
            <p className="text-[#C59ADF] mr-1">{connectionText[tab]}</p>
            {connectionCode}
          </Text>
        </div>
        <Button color={Color.Generic} asChild size={Size.Md}>
          <Link to={"quick-start"}>Документация</Link>
        </Button>
      </ScrollReveal>
    </SectionReveal>
  );
};
