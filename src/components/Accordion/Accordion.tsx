import { cn } from "@/utils";
import { AccordionProps } from "./Accordion.types";
import { cloneElement, useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IconButton } from "../IconButton";
import { Text } from "../Text";
import {
  hasAccordionCustomTextColor,
  resolveAccordionIconHoverStyle,
  resolveAccordionSubtitleProps,
  resolveAccordionTitleProps,
} from "./Accordion.typography";
import { accordionStyles } from "./styles";

export function Accordion({
  title,
  className,
  children,
  headSlot,
  iconLeft: IconLeft,
  position = "start",
  chevronPosition = "right",
  subtitle,
  titleProps,
  subtitleProps,
  disabled,
  defaultOpen = false,
  prefix,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => (disabled ? undefined : setIsOpen(!isOpen));

  const modifiedSlot = useMemo(
    () =>
      cloneElement(headSlot ?? <></>, {
        disabled,
      }),
    [disabled, headSlot]
  );

  const titleHasCustomColor = hasAccordionCustomTextColor(titleProps);
  const iconHoverStyle = resolveAccordionIconHoverStyle(titleProps, disabled);

  const chevron = (
    <IconButton
      icon={isOpen ? ChevronUp : ChevronDown}
      type="ghost"
      color="inverse"
      disabled={disabled}
    />
  );

  return (
    <div className={accordionStyles.base}>
      <div
        className={cn(
          accordionStyles.content,
          className,
          accordionStyles.position[position]
        )}
      >
        <div
          onClick={toggleOpen}
          className={accordionStyles.headBlock}
          aria-disabled={disabled}
        >
          <div className={accordionStyles.head}>
            {chevronPosition === "left" && chevron}

            {prefix && <span className={accordionStyles.prefix}>{prefix}</span>}

            {IconLeft && (
              <IconLeft
                size={20}
                className={cn(
                  accordionStyles.icon,
                  iconHoverStyle
                    ? accordionStyles.iconCustomHover
                    : !titleHasCustomColor && accordionStyles.iconHover
                )}
                style={iconHoverStyle}
              />
            )}
            <div
              className={cn(
                accordionStyles.titleGroup,
                !subtitle && accordionStyles.titleGroupSingleLine
              )}
            >
              <Text
                {...resolveAccordionTitleProps(title, disabled, titleProps)}
              />
              {subtitle && (
                <Text
                  {...resolveAccordionSubtitleProps(
                    subtitle,
                    disabled,
                    subtitleProps
                  )}
                />
              )}
            </div>
          </div>
          <div className={accordionStyles.actions}>
            <div onClick={(e) => e.stopPropagation()}>{modifiedSlot}</div>
            {chevronPosition === "right" && chevron}
          </div>
        </div>
        <div
          className={cn(
            accordionStyles.children,
            accordionStyles.childrenVariants.get(isOpen)
          )}
        >
          <div className={accordionStyles.childrenHidden}>{children}</div>
        </div>
      </div>
      {position !== "end" && <div className={accordionStyles.separator} />}
    </div>
  );
}
