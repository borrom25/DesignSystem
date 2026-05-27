export const inputBaseClasses =
  "group relative inline-flex items-center w-full font-roboto-flex text-primary transition-[border-color,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-text";

export const inputDefaultClasses =
  "border border-transparent bg-generic-medium hover:border-brand-line-light focus-within:border-brand-line-heavy focus-within:hover:border-brand-line-heavy";

export const inputStateClasses = inputDefaultClasses;

export const inputDisabledClasses =
  "bg-generic-disabled text-hint cursor-not-allowed";

export const inputErrorClasses =
  "border border-danger-line-light  hover:border-danger-line-light focus-within:border-danger-line-light focus-within:hover:border-danger-line-light";

export const inputClearClasses =
  "border-0 border-transparent bg-transparent hover:rounded-lg hover:bg-generic-medium focus-within:rounded-lg focus-within:bg-generic-medium focus-within:hover:rounded-lg focus-within:hover:bg-generic-medium";

export const inputClearDisabledClasses =
  "border-0 border-transparent bg-transparent text-hint cursor-not-allowed";

export const inputClearErrorClasses = "border-0 border-transparent";

export const inputAdornmentClasses = "shrink-0 text-complementary";

export const inputAdornmentDisabledClasses = "shrink-0 text-hint";

export const inputPrefixSuffixClasses =
  "inline-flex shrink-0 items-center text-complementary font-roboto-flex font-medium whitespace-nowrap";

export const inputPrefixSuffixDisabledClasses =
  "inline-flex shrink-0 items-center text-hint font-roboto-flex font-medium whitespace-nowrap";

export const inputCountClasses =
  "inline-flex shrink-0 items-center font-roboto-flex font-medium whitespace-nowrap text-secondary";

export const inputBodyClasses =
  "relative flex min-w-0 flex-1 self-stretch items-center";

export const inputNativeClasses =
  "relative z-10 flex-1 min-w-0 bg-transparent border-none outline-none placeholder:text-secondary disabled:cursor-not-allowed text-primary disabled:text-hint will-change-transform transition-[translate] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] [&::placeholder]:transition-opacity [&::placeholder]:duration-[250ms] [&::placeholder]:ease-out";

export const inputNativeFullHeightClasses = "h-full";

export const inputNativeDisabledClasses = "placeholder:text-hint";

export const inputNativeWithFloatingLabelClasses =
  "translate-y-[calc(var(--generic-spacing-2)+var(--input-gap-container-content,var(--generic-spacing-05)))]";

export const inputNativePlaceholderHiddenClasses =
  "[&::placeholder]:opacity-0 [&::placeholder]:[transition-delay:0ms]";

export const inputNativePlaceholderVisibleClasses =
  "[&::placeholder]:opacity-100 [&::placeholder]:[transition-delay:150ms]";

export const inputFloatingLabelClasses =
  "pointer-events-none absolute top-0 z-0 origin-top-left translate-y-[calc(var(--input-height,56px)_/_2_-_50%)] font-roboto-flex font-medium text-secondary transition-[translate,scale,color] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform";

export const inputFloatingLabelActiveClasses =
  "translate-y-(--generic-spacing-2) text-complementary";

export const inputFloatingLabelDisabledClasses = "text-hint";

export const inputFloatingLabelRequiredMarkClasses =
  "pointer-events-none absolute -left-1 top-1 z-30 inline-flex size-[21px] -translate-y-1/3 items-center justify-center text-[30px] font-bold leading-[21px] tracking-md text-danger-text-heavy";

export const inputClearButtonClasses =
  "shrink-0 p-0 border-0 bg-transparent text-complementary cursor-pointer opacity-0 scale-95 pointer-events-none transition-[opacity,scale,color] duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto disabled:text-hint disabled:cursor-not-allowed disabled:pointer-events-none";

export const inputRightSlotClasses =
  "shrink-0 inline-flex items-center justify-center";
