import { cn } from "@/utils";
import { AccordionProps } from "./Accordion.types";
import { cloneElement, useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IconButton } from "../IconButton";
import { accordionStyles } from "./styles";

export function Accordion({
  title,
  className,
  children,
  headSlot,
  iconLeft: IconLeft,
  position = "start",
  subtitle,
  disabled,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => (disabled ? undefined : setIsOpen(!isOpen));

  const modifiedSlot = useMemo(
    () =>
      cloneElement(headSlot ?? <></>, {
        disabled,
      }),
    [disabled, headSlot]
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
            {IconLeft && (
              <IconLeft size={20} className={accordionStyles.icon} />
            )}
            <div>
              <h2 className={accordionStyles.title}>{title}</h2>
              <p className={accordionStyles.subtitle}>{subtitle}</p>
            </div>
          </div>
          <div className={accordionStyles.actions}>
            <div onClick={(e) => e.stopPropagation()}>{modifiedSlot}</div>
            <IconButton
              icon={isOpen ? ChevronUp : ChevronDown}
              type="ghost"
              color="inverse"
              disabled={disabled}
            />
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
