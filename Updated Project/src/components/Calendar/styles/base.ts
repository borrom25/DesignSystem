export const calendarBaseClasses =
  "inline-flex flex-col w-[324px] h-[374px] rounded-lg border border-line bg-generic font-roboto-flex shadow-[0_0_40px_0_rgba(0,0,0,0.12)]";

export const calendarContainerClasses = "flex flex-col";

export const monthContainerClasses = "flex flex-col";

export const selectedDateHeaderClasses =
  "flex items-center h-[40px] px-[16px] text-sm font-medium leading-[16px] tracking-[0.2px] text-secondary border-b border-line capitalize";

export const headerClasses =
  "flex items-center justify-between h-[40px] px-[16px] gap-[8px]";

export const headerTitleClasses =
  "font-roboto-flex text-[14px] font-medium not-italic leading-[16px] tracking-[0.2px] text-center text-complementary capitalize";

export const headerNavClasses = "flex items-center gap-[4px]";
export const headerTitleButtonClasses =
  "flex flex-1 h-full items-center justify-start text-left rounded-xs px-[4px] -ml-[4px] cursor-pointer transition-colors hover:bg-generic-medium-hover";
export const headerNavButtonBaseClasses =
  "flex items-center justify-center w-[20px] h-[20px] rounded-xs transition-colors";
export const headerNavButtonEnabledClasses =
  "text-secondary hover:bg-generic-medium-hover cursor-pointer";
export const headerNavButtonDisabledClasses = "text-hint cursor-default";

export const gridClasses =
  "grid grid-cols-7 gap-y-[4px] pt-[6px] px-[12px] pb-[6px]";

export const weekdayClasses =
  "flex items-center justify-center w-[36px] h-[36px] text-xs font-normal text-secondary aspect-square";

export const dayBaseClasses =
  "flex items-center justify-center w-[36px] h-[36px] rounded-xs font-roboto-flex text-[14px] font-medium not-italic leading-[16px] tracking-[0.2px] text-center text-complementary transition-colors cursor-pointer aspect-square";

export const dayHoverClasses = "hover:bg-generic-medium-hover";

export const daySelectedClasses =
  "bg-brand-heavy text-on-brand hover:bg-brand-heavy-hover";

export const dayTodayClasses = "border border-brand-line-heavy";

export const dayOutsideClasses = "text-hint";

export const dayDisabledClasses =
  "text-hint opacity-50 cursor-not-allowed pointer-events-none";

export const dayInRangeClasses = "text-complementary";

export const dayWrapperInRangeClasses = "bg-generic-medium";

export const dayWrapperRangeStartClasses =
  "bg-gradient-to-l from-generic-medium from-50% to-transparent to-50%";

export const dayWrapperRangeEndClasses =
  "bg-gradient-to-r from-generic-medium from-50% to-transparent to-50%";

export const viewContainerClasses = "pt-[6px] px-[12px] pb-[6px]";

export const monthViewContainerClasses =
  "flex flex-col self-stretch pt-[6px] px-[12px] pb-[6px]";

export const monthGridClasses = "grid grid-cols-3 gap-[4px] w-full";

export const monthItemClasses =
  "flex items-center justify-center h-[52px] rounded-xs font-roboto-flex text-[14px] font-medium not-italic leading-[16px] tracking-[0.2px] text-center text-complementary transition-colors cursor-pointer capitalize";

export const monthItemActiveClasses =
  "bg-brand-heavy text-on-brand hover:bg-brand-heavy-hover";

export const monthItemInactiveClasses = "hover:bg-generic-medium-hover";

export const monthItemNextYearClasses =
  "text-hint hover:bg-generic-medium-hover";

export const yearGridClasses = "grid grid-cols-3 gap-[4px]";

export const yearItemClasses =
  "flex items-center justify-center h-[52px] rounded-xs font-roboto-flex text-[14px] font-medium not-italic leading-[16px] tracking-[0.2px] text-center text-complementary transition-colors cursor-pointer";

export const yearItemActiveClasses =
  "bg-brand-heavy text-on-brand hover:bg-brand-heavy-hover";

export const yearItemInactiveClasses = "hover:bg-generic-medium-hover";

export const yearItemNextDecadeClasses =
  "text-hint hover:bg-generic-medium-hover";
