import type { AppLayoutContainer } from "../AppLayout.types";

export const appLayoutContainerClasses: Record<AppLayoutContainer, string> = {
  "640": "mx-auto flex h-full min-h-0 w-full max-w-[640px] flex-col p-7",
  "720": "mx-auto flex h-full min-h-0 w-full max-w-[720px] flex-col p-7",
  fill: "flex h-full min-h-0 w-full flex-col p-7",
} as const;
