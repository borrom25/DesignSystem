type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T & Without<U, T>) | (U & Without<T, U>);

export type OneOf<T extends unknown[]> = T extends [infer F, ...infer Rest]
  ? XOR<F, OneOf<Rest>>
  : Record<never, never>;
