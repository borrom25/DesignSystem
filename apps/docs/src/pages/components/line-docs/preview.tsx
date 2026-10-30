import { Button, Line } from "@/components";
import { Size } from "@/types";
import type { LinePlaygroundState } from "./types";

export function LinePreview(state: LinePlaygroundState) {
  return (
    <div className="w-full max-w-[560px] overflow-x-auto">
      <div
        className={
          state.position === "vertical" ? "mx-auto w-[260px]" : "w-[560px]"
        }
      >
        <Line
          title={state.title}
          subtitle={state.subtitle}
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=line-docs"
          position={state.position}
          type={state.type}
          disabled={state.disabled}
          labelGroup={state.withLabels ? ["label 1", "label 2", "label 3"] : []}
          leftSlot={
            state.withLeftSlot ? (
              <Button color="brand" size={Size.Sm}>
                leftSlot
              </Button>
            ) : undefined
          }
          rightSlot={
            state.withRightSlot ? (
              <Button color="positive" size={Size.Sm}>
                rightSlot
              </Button>
            ) : undefined
          }
        />
      </div>
    </div>
  );
}
