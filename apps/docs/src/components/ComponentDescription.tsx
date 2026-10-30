import { Block } from "@/components";
import { ComponentSectionHeading } from "./ComponentSectionHeading";

interface ComponentDescriptionProps {
  text: string;
  title?: string;
}

export function ComponentDescription({
  text,
  title = "О компоненте",
}: ComponentDescriptionProps) {
  return (
    <Block>
      <div className="flex flex-col gap-2">
        <ComponentSectionHeading>{title}</ComponentSectionHeading>
        <p className="text-secondary">{text}</p>
      </div>
    </Block>
  );
}
