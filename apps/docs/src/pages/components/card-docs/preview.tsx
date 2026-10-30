import {
  Button,
  Card,
  Text,
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
} from "@/components";
import type { CardProps, CardTextProps } from "@/components";
import type {
  CardPlaygroundState,
  CardTextColorOption,
  CardTextShadeOption,
} from "./types";

const paddingMap: Record<CardPlaygroundState["padding"], CardProps["padding"]> =
  {
    default: undefined,
    compact: { top: "var(--spacing-3)", bottom: "var(--spacing-3)" },
    relaxed: { top: "var(--spacing-6)", bottom: "var(--spacing-6)" },
  };

function resolveTextProps(
  color: CardTextColorOption,
  shade: CardTextShadeOption
): CardTextProps | undefined {
  if (color === "default" && shade === "default") return undefined;

  return {
    ...(color !== "default" ? { color } : null),
    ...(shade !== "default" ? { shade } : null),
  };
}

export function CardPreview(state: CardPlaygroundState) {
  const isInverse =
    state.titleColor === TextColor.Inverse ||
    state.subtitleColor === TextColor.Inverse;

  return (
    <div className="w-[420px]">
      <Card
        size={state.size}
        variant={state.variant}
        title={state.title}
        subtitle={state.withSubtitle ? state.subtitle : undefined}
        titleProps={resolveTextProps(state.titleColor, state.titleShade)}
        subtitleProps={
          state.withSubtitle
            ? resolveTextProps(state.subtitleColor, state.subtitleShade)
            : undefined
        }
        padding={paddingMap[state.padding]}
        hoverable={state.hoverable}
        className={isInverse ? "bg-contrast-dark" : undefined}
        actionSlot={
          state.withAction ? (
            <Button size="xs" type="ghost">
              Open
            </Button>
          ) : undefined
        }
      >
        {state.content && (
          <Text
            variant={TextVariant.B2}
            weight={TextWeight.Regular}
            color={isInverse ? TextColor.Inverse : TextColor.Basic}
            shade={isInverse ? TextShade.Light : TextShade.Light}
          >
            {state.content}
          </Text>
        )}
      </Card>
    </div>
  );
}
