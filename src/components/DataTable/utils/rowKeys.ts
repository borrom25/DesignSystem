export function getDataTableRowDomKey(
  rowId: string,
  columnSignature: string
): string {
  return `${rowId}:${columnSignature}`;
}
