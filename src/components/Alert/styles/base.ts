export const rootClasses =
  "pointer-events-auto fixed right-6 bottom-6 z-50 flex w-[360px] max-w-[calc(100vw-var(--spacing-13))] flex-col items-start justify-center gap-2 rounded-scale-lg border border-line border-l-4 bg-generic p-5 shadow-popover";

export const rootClosableClasses = "pr-12";

export const animationClasses =
  "animate-in fade-in zoom-in-98 slide-in-from-bottom-2 slide-in-from-right-2 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:animate-none motion-reduce:duration-0";

export const contentClasses = "flex w-full items-start gap-4";

export const iconWrapperClasses =
  "flex shrink-0 items-center justify-center rounded-full p-2";

export const bodyClasses = "flex min-w-0 flex-1 flex-col gap-2";

export const bodyClosableClasses =
  "pr-[calc(var(--spacing-9)+var(--spacing-3))]";

export const contentCompactClasses = "items-center";

export const bodyCompactClasses = "justify-center";

export const titleClasses = "m-0 block min-w-0 break-words";

export const titleCompactClasses = "text-left";

export const descriptionClasses = "m-0 block min-w-0 break-words";

export const actionsClasses =
  "flex w-full self-stretch items-center justify-end gap-2";

export const closeButtonClasses =
  "absolute top-5 right-5 z-10 shrink-0 p-0 size-auto min-h-0 min-w-0 active:scale-100 hover:opacity-100 [&_.close-circle]:fill-generic-heavy [&_.close-cross]:fill-inverse-additional-heavy hover:[&_.close-circle]:fill-hint";

export const programmaticStackClasses =
  "pointer-events-none fixed right-6 bottom-6 z-[100] flex max-h-[calc(100vh-var(--spacing-11))] w-[360px] max-w-[calc(100vw-var(--spacing-13))] flex-col gap-3 overflow-y-auto";

export const programmaticOpenClasses = "opacity-100 translate-y-0";

export const programmaticClosedClasses =
  "opacity-0 translate-y-2 pointer-events-none";
