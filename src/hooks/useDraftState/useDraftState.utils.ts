export function defaultIsEqual<T>(a: T, b: T): boolean {
  return a === b;
}

export function defaultIsEmpty<T>(value: T): boolean {
  if (value === undefined || value === null) return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "string") return value === "";
  return false;
}
