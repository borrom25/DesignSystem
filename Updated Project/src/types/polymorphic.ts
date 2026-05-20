import type { ReactNode } from "react";

export type AsChildTrueProps<
  TBase,
  TOmitKeys extends string = never,
> = TBase & {
  asChild: true;
  children: ReactNode;
} & {
  [K in TOmitKeys]?: never;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type AsChildFalseProps<TBase, TButtonOnly = {}> = TBase & {
  asChild?: false;
} & TButtonOnly;
