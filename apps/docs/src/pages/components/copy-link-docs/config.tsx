import { Link as LinkIcon } from "lucide-react";
import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderCopyLinkControls } from "./controls";
import { CopyLinkPreview } from "./preview";
import { COPY_LINK_PROPS } from "./props";
import { COPY_LINK_DEFAULT_STATE, type CopyLinkPlaygroundState } from "./types";
import { createCopyLinkUsageCode } from "./usage";

export const copyLinkDocsConfig: ComponentDocsConfig<CopyLinkPlaygroundState> =
  {
    title: "CopyLink",
    icon: LinkIcon,
    description:
      "CopyLink копирует переданное значение в буфер обмена и визуально подтверждает успешное действие сменой текста, цвета и иконки.",
    props: COPY_LINK_PROPS,
    initialState: COPY_LINK_DEFAULT_STATE,
    createUsageCode: createCopyLinkUsageCode,
    renderPreview: CopyLinkPreview,
    renderControls: renderCopyLinkControls,
  };
