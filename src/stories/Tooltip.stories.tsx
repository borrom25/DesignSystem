import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info } from "lucide-react";
import { Tooltip, Button } from "@/components";
import { Color, Size, Type } from "@/types";

const actionButtons = (
  <div className="flex gap-2">
    <Button size={Size.Sm} type={Type.Fill} color={Color.ContrastDark}>
      Button
    </Button>
    <Button size={Size.Sm} type={Type.Fill} color={Color.Brand}>
      Button
    </Button>
  </div>
);

const contentProps = {
  title: "Title",
  subTitle: "Subtitle",
  icon: Info,
  maxWidth: 338,
  arrowWidth: 14,
  arrowHeight: 7,
  actionSlot: actionButtons,
} as const;

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSidesSingleExample: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-32 p-16">
      <div className="flex items-center gap-32">
        <Tooltip>
          <Tooltip.Trigger>
            <Button>Left</Button>
          </Tooltip.Trigger>
          <Tooltip.Content {...contentProps} side="left" />
        </Tooltip>

        <div className="flex flex-col items-center gap-32">
          <Tooltip>
            <Tooltip.Trigger>
              <Button size="sm">Top</Button>
            </Tooltip.Trigger>
            <Tooltip.Content {...contentProps} side="top" />
          </Tooltip>

          <Tooltip>
            <Tooltip.Trigger>
              <Button size="sm">Bottom</Button>
            </Tooltip.Trigger>
            <Tooltip.Content {...contentProps} side="bottom" />
          </Tooltip>
        </div>

        <Tooltip>
          <Tooltip.Trigger>
            <Button size="sm">Right</Button>
          </Tooltip.Trigger>
          <Tooltip.Content {...contentProps} side="right" />
        </Tooltip>
      </div>
    </div>
  ),
};

export const SimpleTooltip: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-16">
      <Tooltip>
        <Tooltip.Trigger>
          <Button size="sm">Simple</Button>
        </Tooltip.Trigger>
        <Tooltip.Content title="Simple tooltip" />
      </Tooltip>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-16">
      <Tooltip>
        <Tooltip.Trigger>
          <Button size="sm">With actions</Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          title="Confirm action"
          subTitle="Do you want to proceed with this operation?"
          icon={Info}
          actionSlot={actionButtons}
        />
      </Tooltip>
    </div>
  ),
};
