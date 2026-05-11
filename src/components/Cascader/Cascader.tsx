import { Popover, PopoverSurface } from "@/components";
import { CascaderProps } from "./Cascader.types.ts";
import { CascaderItem } from "./ui";

export function Cascader({ children, options }: CascaderProps) {
  return (
    <Popover>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content>
        <PopoverSurface>
          {options.map((item) => (
            <CascaderItem key={item.id} {...item} />
          ))}
        </PopoverSurface>
      </Popover.Content>
    </Popover>
  );
}
