import { Block } from "@/components";
import { ComponentSectionHeading } from "@docs/components/ComponentSectionHeading";

interface GuideCardProps {
  title: string;
  items: readonly string[];
}

export function GuideCard({ title, items }: GuideCardProps) {
  return (
    <Block>
      <div className="flex flex-col gap-3">
        <ComponentSectionHeading>{title}</ComponentSectionHeading>
        <ul className="list-disc space-y-2 pl-5 text-secondary">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Block>
  );
}
