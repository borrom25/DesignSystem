import { ArrowUpRight } from "lucide-react";
import {
  Card,
  Text,
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
} from "@/components";
import { Size } from "@/types";

interface ResourceLinkCardProps {
  title: string;
  description: string;
  href: string;
  logo: string;
}

export function ResourceLinkCard({
  title,
  description,
  href,
  logo,
}: ResourceLinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-scale-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <Card size={Size.Md} className="w-[270px]">
        <div className="flex h-full flex-col justify-between gap-11">
          <div className="flex items-start justify-between">
            <img src={logo} alt="" aria-hidden="true" className="size-15" />
            <ArrowUpRight size={18} className="text-secondary" />
          </div>
          <div>
            <Text
              as="p"
              variant={TextVariant.B1}
              weight={TextWeight.Bold}
              color={TextColor.Basic}
              shade={TextShade.Primary}
            >
              {title}
            </Text>
            <Text
              as="p"
              variant={TextVariant.B2}
              color={TextColor.Basic}
              shade={TextShade.Complementary}
            >
              {description}
            </Text>
          </div>
        </div>
      </Card>
    </a>
  );
}
