import { ModalType } from "../Modal.types";

export const modalAnimationClasses =
  "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=closed]:scale-95";

export const slideInAnimationClasses =
  "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:opacity-100 data-[state=open]:translate-x-0 data-[state=closed]:opacity-0 data-[state=closed]:translate-x-full";

export const overlayAnimationClasses =
  "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:opacity-100 data-[state=closed]:opacity-0";

export const modalMobileAnimationClasses =
  "fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:translate-y-0  data-[state=open]:opacity-100 data-[state=closed]:translate-y-full  data-[state=closed]:opacity-0";

export const sideMenuAnimationClasses =
  "fixed top-0 bottom-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:translate-x-0 data-[state=open]:opacity-100 data-[state=closed]:translate-x-full data-[state=closed]:opacity-0";

export function getAnimationClasses(
  type: ModalType,
  isMobile?: boolean,
  animationClassName?: string,
  sideMenu?: boolean
): string {
  if (animationClassName) return animationClassName;
  if (sideMenu) return sideMenuAnimationClasses;
  if (isMobile) return modalMobileAnimationClasses;

  return type === ModalType.iceBox
    ? slideInAnimationClasses
    : modalAnimationClasses;
}
