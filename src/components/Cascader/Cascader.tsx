import { Popover } from "@/components";
import { CascaderProps } from "./Cascader.types.ts";
import { CascaderItem } from "./ui";

export function Cascader({ children, options }: CascaderProps) {
  return (
    <Popover>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content>
        <Popover.Surface>
          {options.map((item) => (
            <CascaderItem key={item.id} {...item} />
          ))}
        </Popover.Surface>
      </Popover.Content>
    </Popover>
  );
}
