import { Button, Plug } from "@/components";
import type { PlugPlaygroundState } from "./types";

export function PlugPreview(state: PlugPlaygroundState) {
  return (
    <div className="w-[420px]">
      <Plug
        imageItem={
          state.withImage ? (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-sm font-medium text-brand">
              IMG
            </div>
          ) : undefined
        }
        title={state.title}
        subtitle={state.subtitle}
        actionSlot={
          state.withAction ? (
            <Button size="xs" type="flat">
              Create item
            </Button>
          ) : undefined
        }
      />
    </div>
  );
}
