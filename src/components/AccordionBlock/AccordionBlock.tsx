import { createContext, memo, useContext, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Size } from "@/types";
import { cn } from "@/utils";
import { Block, BlockVariant } from "../Block";
import { Text } from "../Text";
import {
  resolveAccordionSubtitleProps,
  resolveAccordionTitleProps,
} from "../Accordion/Accordion.typography";
import type { AccordionTextProps } from "../Accordion";
import type { AccordionBlockProps } from "./AccordionBlock.types";
import { getInertProps, stopEventPropagation } from "./AccordionBlock.utils";
import { useAccordionBlock } from "./hooks";
import { AccordionBlockProgress } from "./ui";
import { accordionBlockStyles } from "./styles";

const AccordionBlockNestedContext = createContext(false);

function AccordionBlockDescription({
  children,
  disabled,
  subtitleProps,
}: {
  children: ReactNode;
  disabled?: boolean;
  subtitleProps?: AccordionTextProps;
}) {
  return (
    <div className={accordionBlockStyles.description}>
      {typeof children === "string" ? (
        <Text
          {...resolveAccordionSubtitleProps(children, disabled, {
            ...subtitleProps,
            className: cn(
              accordionBlockStyles.descriptionText,
              subtitleProps?.className
            ),
          })}
        />
      ) : (
        children
      )}
    </div>
  );
}

export const AccordionBlock = memo(function AccordionBlock({
  title,
  children,
  description,
  progress,
  labelPosition = "end",
  className,
  headSlot,
  titleProps,
  subtitleProps,
  variant = BlockVariant.Basic,
  size = Size.Md,
  disabled,
  defaultOpen = false,
}: AccordionBlockProps) {
  const isNested = useContext(AccordionBlockNestedContext);
  const {
    contentId,
    isOpen,
    hasChildren,
    hasDescription,
    animatedProgress,
    toggleOpen,
  } = useAccordionBlock({
    defaultOpen,
    disabled,
    children,
    description,
    progress,
  });

  return (
    <Block
      size={size}
      variant={variant}
      aria-disabled={disabled}
      aria-expanded={hasChildren ? isOpen : undefined}
      aria-controls={hasChildren ? contentId : undefined}
      onClick={toggleOpen}
      className={cn(
        accordionBlockStyles.root,
        accordionBlockStyles.size[size],
        isNested && accordionBlockStyles.nested,
        className
      )}
    >
      <div aria-disabled={disabled} className={accordionBlockStyles.body}>
        <div className={accordionBlockStyles.header}>
          <ChevronDown
            size={16}
            aria-hidden
            className={cn(
              accordionBlockStyles.chevron,
              isOpen && accordionBlockStyles.chevronOpen
            )}
          />
          <div className={accordionBlockStyles.titleRow}>
            <Text
              {...resolveAccordionTitleProps(title, disabled, titleProps)}
            />
            {headSlot ? (
              <div
                onClick={stopEventPropagation}
                className={accordionBlockStyles.headSlot}
              >
                {headSlot}
              </div>
            ) : null}
          </div>
          {hasDescription ? (
            <AccordionBlockDescription
              disabled={disabled}
              subtitleProps={subtitleProps}
            >
              {description}
            </AccordionBlockDescription>
          ) : null}
          {animatedProgress ? (
            <AccordionBlockProgress
              labelPosition={labelPosition}
              label={animatedProgress.label}
              bar={animatedProgress.bar}
            />
          ) : null}
        </div>
      </div>
      {hasChildren ? (
        <div
          id={contentId}
          onClick={stopEventPropagation}
          aria-hidden={!isOpen}
          {...getInertProps(!isOpen)}
          className={cn(
            accordionBlockStyles.children,
            accordionBlockStyles.childrenVariants.get(isOpen)
          )}
        >
          <div className={accordionBlockStyles.childrenClip}>
            <div className={accordionBlockStyles.childrenInner}>
              <AccordionBlockNestedContext.Provider value={true}>
                {children}
              </AccordionBlockNestedContext.Provider>
            </div>
          </div>
        </div>
      ) : null}
    </Block>
  );
});
