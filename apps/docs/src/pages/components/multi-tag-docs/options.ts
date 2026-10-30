import type { MultiTagOption } from "@/components";
import { Size } from "@/types";
import type { TagValue } from "./types";

export const MULTI_TAG_OPTIONS: MultiTagOption<TagValue>[] = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "design", label: "Design" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
  { value: "product", label: "Product" },
  { value: "qa", label: "QA" },
];

export const MULTI_TAG_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];
