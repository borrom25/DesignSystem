import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";
import {
  Button,
  Counter,
  Input,
  Label,
  ListItem,
  TabsOverflow,
} from "@/components";
import { Color, Size, Type } from "@/types";

type PropertyRow = {
  key: string;
  values: string;
  description: string;
  height: number;
};

const topTabs = [
  { label: "Button", value: "button" },
  { label: "Input", value: "input" },
  { label: "Select", value: "select" },
  { label: "Table", value: "table" },
  { label: "Modal", value: "modal" },
  { label: "Tabs", value: "tabs" },
] as const;

const leftMenuItems = [
  "Overview",
  "Usage",
  "States",
  "Accessibility",
  "Anatomy",
  "Examples",
] as const;

const propertyRows: PropertyRow[] = [
  {
    key: "Type",
    values: "Fill, Outline, Flat, Ghost",
    description: "Отвечает за тип визуального отображение компонента",
    height: 60,
  },
  {
    key: "Color",
    values:
      "Brand, Danger, Successful, Action, Warning, Info, Inverse, contrastLight, contrastDark",
    description: "Отвечает за цветовую палитру компонента",
    height: 80,
  },
  {
    key: "State",
    values: "Default, Hover, Loading, Disable",
    description: "Отвечает за состояние компонента при взаимодействии с ним",
    height: 60,
  },
  {
    key: "Loader",
    values: "True, False",
    description: "Компонент в состоянии загрузки",
    height: 56,
  },
  {
    key: "iconOnly",
    values: "True, False",
    description: "Отвечает за отображение иконки вместо текста компонента",
    height: 60,
  },
  {
    key: "Disable",
    values: "True, False",
    description: "Компонент в состоянии не активен",
    height: 56,
  },
  {
    key: "Icon-left",
    values: "True, False",
    description: "Отвечает за отображение иконки слева",
    height: 56,
  },
  {
    key: "Icon-right",
    values: "True, False",
    description: "Отвечает за отображение иконки справа",
    height: 56,
  },
  {
    key: "Counter",
    values: "True, False",
    description: "Отвечает за отображение компонента Counter",
    height: 60,
  },
];

function ComponentViewBlock({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={[
        "w-[958px] border border-line rounded-(--br-component-sm) bg-generic",
        className ?? "",
      ]
        .join(" ")
        .trim()}
    >
      {children}
    </section>
  );
}

function FigmaNode14752Canvas() {
  const [activeTab, setActiveTab] = useState<(typeof topTabs)[number]["value"]>(
    "button"
  );

  return (
    <div className="min-h-screen bg-page p-6 overflow-auto">
      <div className="relative w-[1240px] h-[1449px] border border-line bg-page">
        <header className="absolute left-0 top-0 flex h-[56px] w-[1240px] items-center border-b border-line bg-generic px-[16px]">
          <div className="mr-[16px] h-[32px] w-[134px] rounded-(--br-component-xs) bg-generic-medium" />
          <div className="mr-[16px] h-[36px] w-px bg-line" />
          <TabsOverflow
            className="w-[503px]"
            items={topTabs.map((tab) => ({
              label: tab.label,
              value: tab.value,
            }))}
            value={activeTab}
            onValueChange={setActiveTab}
            size={Size.Sm}
            indicatorOffset={10}
          />
        </header>

        <div className="absolute left-0 top-[56px] flex h-[1393px] w-[1240px]">
          <aside className="h-[1393px] w-[250px] border-r border-line bg-generic">
            <div className="h-[60px] border-b border-line px-[16px] py-[12px]">
              <Input
                size={Size.Xs}
                iconLeft={Search}
                placeholder="Поиск"
                className="w-[218px]"
              />
            </div>

            <div className="px-[16px] py-[12px]">
              <div className="w-[218px]">
                <button
                  type="button"
                  className="flex h-[36px] w-full items-center justify-between"
                >
                  <span className="text-primary text-md font-medium leading-md">
                    Buttons
                  </span>
                  <div className="flex items-center gap-2">
                    <Label size={Size.Xs} color={Color.Brand}>
                      Label
                    </Label>
                    <ChevronUp size={16} className="text-secondary" />
                  </div>
                </button>

                <div className="mt-[2px] flex flex-col gap-[2px]">
                  {leftMenuItems.map((item) => (
                    <ListItem key={item} title={item} size={Size.Xs} />
                  ))}
                </div>
              </div>

              {["Inputs", "Data Display", "Navigation"].map((item) => (
                <div key={item} className="mt-[2px] w-[218px] border-b border-line">
                  <button
                    type="button"
                    className="flex h-[48px] w-full items-center justify-between"
                  >
                    <span className="text-primary text-md font-medium leading-md">
                      {item}
                    </span>
                    <div className="flex items-center gap-2">
                      <Label size={Size.Xs} color={Color.Brand}>
                        Label
                      </Label>
                      <ChevronDown size={16} className="text-secondary" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </aside>

          <main className="h-[1393px] w-[990px] bg-page">
            <div className="ml-[16px] mt-[16px] flex h-[1377px] w-[958px] flex-col gap-[10px]">
              <ComponentViewBlock className="h-[556px] p-[32px]">
                <div className="flex h-[492px] flex-col gap-[24px]">
                  <h2 className="text-xl font-semibold leading-[32px] text-primary">
                    Button
                  </h2>
                  <div className="grid grid-cols-4 gap-[12px]">
                    <Button type={Type.Fill} color={Color.Brand}>
                      Fill
                    </Button>
                    <Button type={Type.Outline} color={Color.Brand}>
                      Outline
                    </Button>
                    <Button type={Type.Flat} color={Color.Brand}>
                      Flat
                    </Button>
                    <Button type={Type.Ghost} color={Color.Brand}>
                      Ghost
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-[12px]">
                    <Button color={Color.Warning}>Warning</Button>
                    <Button color={Color.Danger}>Danger</Button>
                    <Button color={Color.Positive}>Successful</Button>
                  </div>
                  <div className="grid grid-cols-3 gap-[12px]">
                    <Button loading>Loading</Button>
                    <Button disabled>Disabled</Button>
                    <Button iconOnly={Search} aria-label="Search" />
                  </div>
                  <div className="grid grid-cols-2 gap-[12px]">
                    <Button count={5}>Counter</Button>
                    <Button iconLeft={Search}>Icon Left</Button>
                  </div>
                </div>
              </ComponentViewBlock>

              <ComponentViewBlock className="h-[138px] p-[24px]">
                <div className="flex h-full items-center justify-between rounded-(--br-component-sm) border border-line px-[16px]">
                  <span className="text-primary text-md font-medium leading-md">
                    import {"{ Button }"} from &quot;borrom-ds-test&quot;
                  </span>
                  <Counter count={9} size={Size.Xs} />
                </div>
              </ComponentViewBlock>

              <ComponentViewBlock className="h-[688px]">
                <div className="px-[32px] pt-[24px] pb-[32px]">
                  <div className="h-[32px] w-[232px] text-xl font-semibold leading-[32px] text-primary">
                    Component properties
                  </div>

                  <div className="mt-[24px] h-[576px] w-[894px] border border-line rounded-(--br-component-sm) overflow-hidden">
                    <div className="flex h-[56px] w-[894px] border-b border-line bg-generic-medium">
                      <div className="w-[199px] border-r border-line px-[16px] py-[18px] text-sm font-medium text-secondary">
                        Properties
                      </div>
                      <div className="w-[347.5px] border-r border-line px-[16px] py-[18px] text-sm font-medium text-secondary">
                        Values
                      </div>
                      <div className="w-[347.5px] px-[16px] py-[18px] text-sm font-medium text-secondary">
                        Description
                      </div>
                    </div>

                    <div className="w-[821px]">
                      {propertyRows.map((row) => (
                        <div
                          key={row.key}
                          className="flex border-b border-line last:border-b-0"
                          style={{ height: `${row.height}px` }}
                        >
                          <div className="w-[200px] border-r border-line px-[16px] py-[18px] text-primary text-sm leading-[20px]">
                            {row.key}
                          </div>
                          <div className="w-[310.5px] border-r border-line px-[16px] py-[10px] text-primary text-sm leading-[20px]">
                            {row.values}
                          </div>
                          <div className="w-[310.5px] px-[16px] py-[10px] text-secondary text-sm leading-[20px]">
                            {row.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ComponentViewBlock>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Figma/Node 1:4752",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Canvas: Story = {
  render: () => <FigmaNode14752Canvas />,
};
