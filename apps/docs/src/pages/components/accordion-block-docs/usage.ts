import type { AccordionBlockPlaygroundState } from "./types";

const variantConstMap: Record<
  AccordionBlockPlaygroundState["variant"],
  string
> = {
  basic: "BlockVariant.Basic",
  secondary: "BlockVariant.Secondary",
};

const sizeConstMap: Record<AccordionBlockPlaygroundState["size"], string> = {
  xs: "Size.Xs",
  sm: "Size.Sm",
  md: "Size.Md",
};

export function createAccordionBlockUsageCode(
  packageName: string,
  state: AccordionBlockPlaygroundState
) {
  const variantCode = variantConstMap[state.variant];
  const sizeCode = sizeConstMap[state.size];

  return `import {
  AccordionBlock,
  BlockVariant,
  Button,
  Card,
  CardVariant,
  Color,
  Label,
  Size,
  Text,
  TextColor,
  TextShade,
  TextVariant,
  Type,
} from "${packageName}";
import "${packageName}/styles.css";
import { Download } from "lucide-react";

const description =
  "Python — это популярный высокоуровневый язык программирования общего назначения.";

export function Example() {
  return (
    <AccordionBlock
      title="${state.title}"
      size={${sizeCode}}
      variant={${variantCode}}${state.defaultOpen ? "\n      defaultOpen" : ""}${state.disabled ? "\n      disabled" : ""}
      description={description}
      progress={${Number(state.progress)}}${state.labelPosition === "end" ? "" : `\n      labelPosition="${state.labelPosition}"`}
      headSlot={
        <>
          <Label color={Color.Warning} type="flat" size={Size.Xs} rounded>
            Hard skills
          </Label>
          <Label color={Color.Secondary} type="flat" size={Size.Xs} rounded>
            Вес: 15%
          </Label>
        </>
      }
    >
      <AccordionBlock
        title="Базовый Пайтон"
        size={${sizeCode}}
        defaultOpen
        description="Вводный курс по языку программирования Python."
        progress={5}
        headSlot={
          <>
            <Label color={Color.Secondary} type="flat" size={Size.Xs} rounded>
              Сложность: 5/10
            </Label>
            <Label color={Color.Secondary} type="flat" size={Size.Xs} rounded>
              Вес: 5%
            </Label>
          </>
        }
      >
        <Text variant={TextVariant.B1}>Навыки</Text>
        <Card
          size={Size.Xs}
          variant={CardVariant.Secondary}
          title="Названия навыка"
          subtitle="Описание навыка"
        />
        <Text variant={TextVariant.B1}>Домашние задания</Text>
        <Button size={Size.Sm} type={Type.Flat} iconLeft={Download}>
          Скачать задание
        </Button>
      </AccordionBlock>
    </AccordionBlock>
  );
}`;
}
