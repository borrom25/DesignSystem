import { Download } from "@/components";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Download> = {
  title: "Components/Download",
  component: Download,
};

export default meta;
type Story = StoryObj<typeof Download>;

export const Playground: Story = {
  args: {
    fileName: "отчет_за_квартал.pdf",
    fileSize: "2.4 MB",
  },
};
