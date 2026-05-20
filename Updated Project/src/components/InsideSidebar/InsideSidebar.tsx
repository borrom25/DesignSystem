import type { InsideSidebarProps } from "./InsideSidebar.types";
import { useScreenSize } from "@/providers";
import { Modal } from "@/components";
import { useState } from "react";
import { SidebarTrigger } from "@/shared/Sidebar";
import { InsideSidebarContent } from "./ui";

export function InsideSidebar({ ...restProps }: InsideSidebarProps) {
  const { isMobile } = useScreenSize();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const content = <InsideSidebarContent {...restProps} />;

  if (isMobile) {
    return (
      <>
        <SidebarTrigger type="main" onClick={toggleOpen} />
        <Modal sideMenu open={open} onOpenChange={setOpen}>
          {content}
        </Modal>
      </>
    );
  }

  return content;
}
