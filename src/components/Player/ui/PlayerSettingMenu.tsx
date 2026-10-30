import { Menu, usePlaybackRateOptions } from "@vidstack/react";
import { Settings } from "lucide-react";
import { ListItem } from "@/components";

export function PlayerSettingsMenu() {
  const rates = usePlaybackRateOptions();

  return (
    <Menu.Root>
      <Menu.Button className={"cursor-pointer"}>
        <Settings size={16} />
      </Menu.Button>
      <Menu.Content
        className="p-1 bg-generic rounded-[10px] border border-line"
        placement="top end"
      >
        <div className="px-2 py-2 text-sm font-medium text-secondary border-b border-white/10 ">
          Скорость воспроизведения
        </div>

        <Menu.RadioGroup
          value={rates.selectedValue}
          className="flex flex-col mt-2"
        >
          {rates.map((option) => (
            <ListItem
              key={option.value}
              value={option.value}
              onClick={() => option.select()}
              selected={option.selected}
            >
              <span>{option.label}</span>
            </ListItem>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}
