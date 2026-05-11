import { cn } from "@/utils";
import { Size } from "@/types";
import { ModalType } from "../Modal.types";

export const modalWrapperClasses = "items-center justify-center py-11 px-7";
export const modalContentClasses = "max-h-[calc(100vh-48px)]";
export const fullScreenClasses = "h-[calc(100vh-48px)]";

export const iceBoxWrapperClasses = "items-stretch justify-end py-11 pr-7 pl-0";
export const iceBoxContentClasses =
  "h-[calc(100vh-48px)] max-h-[calc(100vh-48px)] w-[400px]";

export const mobileBaseClasses =
  "fixed left-0 bottom-0 w-full h-auto max-h-[calc(100vh-52px)] rounded-t-xl rounded-b-none w-[100%] overflow-visible";

export const sideMenuBaseClasses =
  "fixed h-screen w-[82.5%] rounded-b-none rounded-t-none right-0";

export const sizeClasses: Record<Size, string> = {
  [Size.Xs]: "width_xs w-[var(--size-modal-width)]",
  [Size.Sm]: "width_sm w-[var(--size-modal-width)]",
  [Size.Md]: "width_md w-[var(--size-modal-width)]",
};

export const closeButtonAnimationClasses =
  " transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=closed]:scale-75";

export const closeButtonBaseClasses =
  "absolute z-10 rounded-full border border-line bg-generic hover:bg-generic-hover" +
  closeButtonAnimationClasses;

export const closeButtonModalClasses = "top-0 right-[-8px] translate-x-full";

export const closeButtonIceBoxClasses =
  "top-(--spacing-9) left-[-8px] translate-x-[-100%]";

export const closeButtonSideMenuClasses =
  "absolute z-10 visible w-[36px] h-[36px] left-[-45vw]" +
  closeButtonAnimationClasses;

export function getWrapperClasses(type: ModalType): string {
  return type === ModalType.iceBox ? iceBoxWrapperClasses : modalWrapperClasses;
}

export function getContentClasses(
  type: ModalType,
  size: Size,
  fullScreen: boolean,
  isMobile: boolean,
  sideMenu: boolean
): string {
  if (sideMenu) return sideMenuBaseClasses;
  if (isMobile) return mobileBaseClasses;
  if (type === ModalType.iceBox) return iceBoxContentClasses;

  return cn(
    modalContentClasses,
    sizeClasses[size],
    fullScreen && fullScreenClasses
  );
}

export function getCloseButtonClasses(
  type: ModalType,
  sideMenu: boolean
): string {
  if (sideMenu) return closeButtonSideMenuClasses;

  return cn(
    closeButtonBaseClasses,
    type === ModalType.iceBox
      ? closeButtonIceBoxClasses
      : closeButtonModalClasses
  );
}
