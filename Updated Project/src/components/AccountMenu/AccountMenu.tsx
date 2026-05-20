import { useScreenSize } from "@/providers";
import { Modal } from "../Modal";
import { cloneElement, isValidElement, useState } from "react";
import { Popover } from "../Popover";
import type { AccountMenuProps } from "./AccountMenu.types";
import { accountMenuClasses } from "./styles";
import { AccountMenuContent } from "./ui";

export function AccountMenu({
  trigger,
  isOpen: isOpenProp,
  setIsOpen: setIsOpenProp,
  ...props
}: AccountMenuProps) {
  const { isMobile } = useScreenSize();
  const [isOpenState, setIsOpenState] = useState(!!isOpenProp);
  const [isOpen, setIsOpen] = [
    isOpenProp ?? isOpenState,
    setIsOpenProp ?? setIsOpenState,
  ];
  const triggerWithOnClick = isValidElement(trigger)
    ? cloneElement(trigger, {
        onClick: (event: unknown) => {
          trigger.props?.onClick?.(event);
          setIsOpen(true);
        },
        style: {
          cursor: "pointer",
          ...trigger.props.styles,
        },
        ...trigger.props,
      })
    : trigger;

  if (isMobile)
    return (
      <>
        {triggerWithOnClick}
        <Modal
          open={isOpen}
          className={accountMenuClasses.modal}
          onOpenChange={setIsOpen}
        >
          <AccountMenuContent {...props} />
        </Modal>
      </>
    );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger>{triggerWithOnClick}</Popover.Trigger>
      <Popover.Content className={accountMenuClasses.popover}>
        <AccountMenuContent {...props} />
      </Popover.Content>
    </Popover>
  );
}
