const transition200Classes = `
  transition-all
  duration-200
`;

const flexCenterClasses = `
  flex
  items-center
  justify-center
`;

export const stepBarClasses = `
  flex
  items-center
  h-18
  px-1
  gap-[14px]
  rounded-(--radius-scale-7xl)
  border
  border-line
  bg-generic
  shadow-popover
  ${transition200Classes}
`;

export const stepsClasses = `
  relative
  flex
  flex-1
  min-w-0
  justify-start
  items-center
  h-full
  gap-6
  overflow-x-auto
  overflow-y-hidden
  whitespace-nowrap
  [scrollbar-width:none]
  [&::-webkit-scrollbar]:hidden
  ${transition200Classes}
`;

export const stepClasses = `
  relative
  inline-flex
  items-center
  justify-center
  h-full
  gap-2
  cursor-pointer
  border-b
  border-transparent
  text-secondary
  font-roboto-flex
  text-sm
  font-medium
  leading-sm
  tracking-sm
  aria-disabled:text-hint
  aria-disabled:cursor-default
  ${transition200Classes}
`;

export const activeStepClasses = `
  pointer-events-none
  absolute
  bottom-0
  left-0
  h-px
  bg-brand-line-heavy
  ${transition200Classes}
`;

export const buttonClasses = `
  ${flexCenterClasses}
  size-(--size-component-md-icon-only-dimensions)
  p-0
  shrink-0
  gap-0
  cursor-pointer
  rounded-[360px]
  bg-generic-medium
  text-inverse-heavy
  disabled:bg-generic-disabled
  disabled:text-hint
  disabled:cursor-default
  ${transition200Classes}
`;

export const successButtonClasses = `
  ${flexCenterClasses}
  h-(--size-component-md-height)
  px-(--size-component-md-padding-x)
  py-(--size-component-md-padding-y)
  gap-(--size-component-md-gap)
  br-lg
  rounded-(--br-component-md)
  bg-(--color-positive-heavy)
  text-on-brand
  cursor-pointer
`;
