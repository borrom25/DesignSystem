import { Card, Text, TextColor, TextShade, TextVariant } from "@/components";
import type { TextPlaygroundState } from "./types";

export function TextPreview(state: TextPlaygroundState) {
  const isInverse = state.color === TextColor.Inverse;
  const align = state.align === "default" ? undefined : state.align;
  const overflow = state.overflow === "default" ? undefined : state.overflow;
  const decoration =
    state.decoration === "default" ? undefined : state.decoration;
  const needsWidthConstraint =
    overflow === "truncate" || overflow === "nowrap" || Boolean(align);

  return (
    <Card
      className={isInverse ? "w-[520px] bg-contrast-dark" : "w-[520px]"}
      title="Text in interface"
      subtitle="Use typography presets like b1, c1 or h2 instead of configuring the size prop directly."
    >
      <div className="flex flex-col gap-(--spacing-3)">
        <div
          className={needsWidthConstraint ? "w-full max-w-[280px]" : undefined}
        >
          <Text
            as={state.as}
            variant={state.variant}
            weight={state.weight}
            color={state.color}
            shade={state.shade}
            align={align}
            overflow={overflow}
            decoration={decoration}
            lang={overflow === "syllable" ? "ru" : undefined}
          >
            {state.content}
          </Text>
        </div>
        <Text
          variant={TextVariant.B2}
          color={TextColor.Basic}
          shade={TextShade.Secondary}
        >
          Supporting copy can explain the action, status or context for the main
          message.
        </Text>
        <Text
          variant={TextVariant.C1}
          color={TextColor.Basic}
          shade={TextShade.Complementary}
        >
          Text is often combined with cards, fields, tables and alerts.
        </Text>
      </div>
    </Card>
  );
}
