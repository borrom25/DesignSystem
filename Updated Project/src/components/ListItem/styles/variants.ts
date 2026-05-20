import type { ListItemVariant } from "../ListItem.types";

export const variantClasses: Record<ListItemVariant, string> = {
  default:
    "rounded-sm hover:bg-generic-medium hover:text-primary aria-pressed:bg-brand-light aria-pressed:text-brand-text-heavy data-[state=checked]:bg-brand-light data-[state=checked]:text-brand-text-heavy aria-disabled:text-hint data-[disabled]:text-hint",
  danger:
    "rounded-xs bg-danger-light text-danger-text-heavy hover:bg-danger-light-hover aria-pressed:bg-danger-light aria-pressed:text-danger-text-heavy data-[state=checked]:bg-danger-light data-[state=checked]:text-danger-text-heavy aria-disabled:text-hint data-[disabled]:text-hint",
} as const;

export const variantClassesNoOutline: Record<ListItemVariant, string> = {
  default:
    "rounded-sm hover:bg-generic-medium hover:text-primary aria-pressed:text-brand-text-heavy data-[state=checked]:text-brand-text-heavy aria-disabled:bg-generic-disabled aria-disabled:text-hint data-[disabled]:bg-generic-disabled data-[disabled]:text-hint",
  danger:
    "rounded-xs bg-danger-light text-danger-text-heavy hover:bg-danger-light-hover aria-pressed:text-danger-text-heavy data-[state=checked]:text-danger-text-heavy aria-disabled:bg-generic-disabled aria-disabled:text-hint data-[disabled]:bg-generic-disabled data-[disabled]:text-hint",
} as const;

export function getVariantClasses(
  variant: ListItemVariant,
  hideSelectedOutline = false
): string {
  const classes = hideSelectedOutline
    ? variantClassesNoOutline
    : variantClasses;
  return classes[variant] ?? classes.default;
}
