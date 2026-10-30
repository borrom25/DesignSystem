import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputFiles, Player, TextVariant } from "@/components";
import { useState } from "react";

const meta = {
  title: "Components/Player",
  component: Player,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Video Name",
    titleVariant: TextVariant.H1,
    labelVariant: TextVariant.B1,
    src: "https://raw.githubusercontent.com/cseitz/sample-files/main/assets/video/mp4/bbb_short.mp4",
  },
  render: (args) => {
    return (
      <div className={"w-[900px]"}>
        <Player {...args} />
      </div>
    );
  },
};

export const PlayerWithLocalVideo: Story = {
  args: {
    src: "",
  },
  render: () => {
    const [src, setSrc] = useState<string>("");
    const [videoType, setVideoType] = useState<string>("");

    const onFileChange = (files: File[] | null) => {
      if (!files || files.length === 0) return;

      const file = files[0];
      const url = URL.createObjectURL(file);

      setSrc(url);
      setVideoType(file.type);
    };

    return (
      <div className="w-[900px] flex flex-col gap-10">
        <Player src={src} videoType={videoType} />
        <InputFiles accept="video/*" onChange={onFileChange} />
      </div>
    );
  },
};
