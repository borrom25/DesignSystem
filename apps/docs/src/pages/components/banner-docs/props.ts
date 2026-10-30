import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const BANNER_PROPS: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Содержимое banner: текст, ссылка или небольшой action block.",
  },
  {
    name: "size",
    type: '"xs" | "sm"',
    description: "Высота и внутренние отступы banner.",
    defaultValue: '"xs"',
  },
  {
    name: "color",
    type: '"brand" | "action" | "danger" | "positive" | "warning" | "info" | "inverse" | "contrastDark" | "contrastLight" | "generic"',
    description: "Цветовая схема информационной полосы.",
    defaultValue: '"brand"',
  },
  {
    name: "className",
    type: "string",
    description: "Позволяет расширить стили контейнера.",
  },
];
