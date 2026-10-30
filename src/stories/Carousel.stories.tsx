import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "@/components";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      table: { defaultValue: { summary: "horizontal" } },
    },
    defaultValue: {
      control: { type: "number", min: 0 },
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Playground: Story = {
  render: (args) => (
    <div className={"flex gap-20"}>
      <Carousel {...args} showIndicators>
        <Carousel.Track>
          <Carousel.Item className={"bg-generic w-[120px]"}>1</Carousel.Item>
          <Carousel.Item className={"bg-warning-heavy w-[250px]"}>
            2
          </Carousel.Item>
          <Carousel.Item className={"bg-action-heavy w-[180px]"}>
            3
          </Carousel.Item>
          <Carousel.Item className={"bg-action-heavy-hover w-[320px]"}>
            4
          </Carousel.Item>
          <Carousel.Item className={"bg-brand-medium w-[150px]"}>
            5
          </Carousel.Item>
          <Carousel.Item className={"bg-fuchsia-300 w-[280px]"}>
            6
          </Carousel.Item>
          <Carousel.Item className={"bg-danger-heavy w-[110px]"}>
            7
          </Carousel.Item>
          <Carousel.Item className={"bg-radial w-[400px]"}>8</Carousel.Item>
          <Carousel.Item className={"bg-olive-500 w-[210px]"}>9</Carousel.Item>
          <Carousel.Item className={"bg-secondary w-[160px]"}>10</Carousel.Item>
          <Carousel.Item className={"bg-hint w-[350px]"}>11</Carousel.Item>
          <Carousel.Item className={"bg-emerald-300 w-[130px]"}>
            12
          </Carousel.Item>
          <Carousel.Item className={"bg-danger-light w-[410px]"}>
            13
          </Carousel.Item>
          <Carousel.Item className={"bg-emerald-300 w-[200px]"}>
            14
          </Carousel.Item>
        </Carousel.Track>
        <Carousel.PrevButton />
        <Carousel.NextButton />
        <Carousel.Indicators />
      </Carousel>

      <Carousel {...args}>
        <Carousel.Track>
          <Carousel.Item className={"bg-generic w-[300px]"}>1</Carousel.Item>
          <Carousel.Item className={"bg-warning-heavy w-[140px]"}>
            2
          </Carousel.Item>
          <Carousel.Item className={"bg-action-heavy w-[260px]"}>
            3
          </Carousel.Item>
          <Carousel.Item className={"bg-action-heavy-hover w-[190px]"}>
            4
          </Carousel.Item>
          <Carousel.Item className={"bg-brand-medium w-[380px]"}>
            5
          </Carousel.Item>
          <Carousel.Item className={"bg-fuchsia-300 w-[125px]"}>
            6
          </Carousel.Item>
          <Carousel.Item className={"bg-danger-heavy w-[215px]"}>
            7
          </Carousel.Item>
          <Carousel.Item className={"bg-radial w-[170px]"}>8</Carousel.Item>
          <Carousel.Item className={"bg-olive-500 w-[310px]"}>9</Carousel.Item>
          <Carousel.Item className={"bg-secondary w-[100px]"}>10</Carousel.Item>
          <Carousel.Item className={"bg-hint w-[240px]"}>11</Carousel.Item>
          <Carousel.Item className={"bg-emerald-300 w-[155px]"}>
            12
          </Carousel.Item>
          <Carousel.Item className={"bg-danger-light w-[300px]"}>
            13
          </Carousel.Item>
          <Carousel.Item className={"bg-fuchsia-300 w-[225px]"}>
            14
          </Carousel.Item>
        </Carousel.Track>
        <Carousel.PrevButton />
        <Carousel.NextButton />
        <Carousel.Indicators />
      </Carousel>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className={"flex gap-20"}>
      <Carousel {...args} showIndicators>
        <Carousel.Track>
          <Carousel.Item className={"bg-generic"}>1</Carousel.Item>
          <Carousel.Item className={"bg-warning-heavy"}>2</Carousel.Item>
          <Carousel.Item className={"bg-action-heavy"}>3</Carousel.Item>
          <Carousel.Item className={"bg-action-heavy-hover"}>4</Carousel.Item>
          <Carousel.Item className={"bg-brand-medium"}>5</Carousel.Item>
          <Carousel.Item className={"bg-fuchsia-300"}>6</Carousel.Item>
        </Carousel.Track>
        <Carousel.PrevButton />
        <Carousel.NextButton />
        <Carousel.Indicators />
      </Carousel>

      <Carousel {...args}>
        <Carousel.Track>
          <Carousel.Item className={"bg-generic"}>1</Carousel.Item>
          <Carousel.Item className={"bg-warning-heavy"}>2</Carousel.Item>
          <Carousel.Item className={"bg-action-heavy"}>3</Carousel.Item>
          <Carousel.Item className={"bg-action-heavy-hover"}>4</Carousel.Item>
          <Carousel.Item className={"bg-brand-medium"}>5</Carousel.Item>
          <Carousel.Item className={"bg-fuchsia-300"}>6</Carousel.Item>
        </Carousel.Track>
        <Carousel.PrevButton />
        <Carousel.NextButton />
        <Carousel.Indicators />
      </Carousel>
    </div>
  ),
};

export const AutoSwipe: Story = {
  render: (args) => (
    <Carousel
      {...args}
      showIndicators
      autoSwipeDuration={3000}
      width={660}
      height={300}
    >
      <Carousel.Track>
        <Carousel.Item className={"bg-generic w-[420px]"}>1</Carousel.Item>
        <Carousel.Item className={"bg-warning-heavy w-[250px]"}>
          2
        </Carousel.Item>
        <Carousel.Item className={"bg-action-heavy w-[380px]"}>3</Carousel.Item>
        <Carousel.Item className={"bg-action-heavy-hover w-[320px]"}>
          4
        </Carousel.Item>
        <Carousel.Item className={"bg-brand-medium w-[250px]"}>5</Carousel.Item>
        <Carousel.Item className={"bg-fuchsia-300 w-[280px]"}>6</Carousel.Item>
        <Carousel.Item className={"bg-danger-heavy w-[110px]"}>7</Carousel.Item>
        <Carousel.Item className={"bg-radial w-[400px]"}>8</Carousel.Item>
        <Carousel.Item className={"bg-olive-500 w-[210px]"}>9</Carousel.Item>
        <Carousel.Item className={"bg-secondary w-[160px]"}>10</Carousel.Item>
        <Carousel.Item className={"bg-hint w-[350px]"}>11</Carousel.Item>
        <Carousel.Item className={"bg-emerald-300 w-[130px]"}>12</Carousel.Item>
        <Carousel.Item className={"bg-danger-light w-[410px]"}>
          13
        </Carousel.Item>
        <Carousel.Item className={"bg-emerald-300 w-[200px]"}>14</Carousel.Item>
      </Carousel.Track>
      <Carousel.PrevButton />
      <Carousel.NextButton />
      <Carousel.Indicators />
    </Carousel>
  ),
};
