import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const SKELETON_PROPS: PropDefinition[] = [
  {
    name: "loading",
    type: "boolean",
    description: "Показывает shimmer-слой поверх children",
    defaultValue: "true",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Контент для wrapper-режима",
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительные стили контейнера",
  },
];
