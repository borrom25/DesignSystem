import { FileText, Settings } from "lucide-react";
import {
  Accordion,
  Button,
  Text,
  TextColor,
  TextVariant,
  type AccordionTextProps,
} from "@/components";
import { Size, Type } from "@/types";
import { cn } from "@/utils";
import type {
  AccordionPlaygroundState,
  AccordionTextColorOption,
  AccordionTextShadeOption,
} from "./types";

function resolveTextProps(
  color: AccordionTextColorOption,
  shade: AccordionTextShadeOption
): AccordionTextProps | undefined {
  if (color === "default" && shade === "default") return undefined;

  return {
    ...(color !== "default" ? { color } : null),
    ...(shade !== "default" ? { shade } : null),
  };
}

export function AccordionPreview(state: AccordionPlaygroundState) {
  const isInverse = state.titleColor === TextColor.Inverse;

  return (
    <div
      className={cn(
        "relative h-[280px] w-[520px]",
        isInverse && "rounded-lg bg-contrast-dark px-3"
      )}
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-8">
        <Accordion
          title={state.title}
          subtitle={state.subtitle ? "Basic project information" : undefined}
          titleProps={resolveTextProps(state.titleColor, state.titleShade)}
          position={state.position}
          chevronPosition={state.chevronPosition}
          disabled={state.disabled}
          iconLeft={state.iconLeft ? FileText : undefined}
          headSlot={
            state.headSlot ? (
              <Button size={Size.Xs} type={Type.Ghost} iconLeft={Settings}>
                Settings
              </Button>
            ) : undefined
          }
        >
          <Text variant={TextVariant.C1} className="text-secondary">
            Контент раскрытой панели: описание, настройки или вложенные
            элементы.
          </Text>
        </Accordion>
      </div>
    </div>
  );
}
