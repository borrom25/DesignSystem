import type { Meta, StoryObj } from "@storybook/react-vite";
import { File } from "lucide-react";
import { Bubble, BubbleSide } from "@/components";
import { Size } from "@/types";

const meta = {
  title: "Components/Bubble",
  component: Bubble,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Bubble для сообщений мессенджера с поддержкой входящей и исходящей стороны, изображений, файлов и мета-информации.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

const storySurfaceClasses =
  "w-[560px] rounded-scale-3xl bg-page p-(--spacing-6)";

const messageImageSrc = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8ec5ff"/>
        <stop offset="100%" stop-color="#183a71"/>
      </linearGradient>
      <linearGradient id="meadow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#355e3b"/>
        <stop offset="100%" stop-color="#17321d"/>
      </linearGradient>
    </defs>
    <rect width="640" height="640" fill="url(#sky)"/>
    <circle cx="480" cy="140" r="56" fill="#ffd27a"/>
    <path d="M0 420 L120 300 L240 380 L360 240 L500 400 L640 280 L640 640 L0 640 Z" fill="#1f2f4d"/>
    <path d="M0 480 L100 410 L208 460 L320 360 L432 490 L544 420 L640 470 L640 640 L0 640 Z" fill="#2e4c6d"/>
    <path d="M0 540 C108 500, 196 520, 284 490 S468 440, 576 490 S640 560, 640 540 L640 640 L0 640 Z" fill="url(#meadow)"/>
    <g fill="#d86fb6">
      <circle cx="96" cy="560" r="10"/>
      <circle cx="124" cy="580" r="9"/>
      <circle cx="516" cy="564" r="10"/>
      <circle cx="544" cy="584" r="9"/>
    </g>
  </svg>
`)}`;

export const IncomingText: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <Bubble side={BubbleSide.Incoming} size={Size.Md}>
        <Bubble.Text>
          Здравствуйте, не приходит письмо после регистрации.
        </Bubble.Text>
        <Bubble.Meta time="13:29" userName="Вы" />
      </Bubble>
    </div>
  ),
};

export const OutgoingText: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <Bubble side={BubbleSide.Outgoing} size={Size.Md}>
        <Bubble.Text>
          Проверил. Письмо отправлено, но могло попасть в спам. Если хотите,
          можем сразу отправить повторно.
        </Bubble.Text>
        <Bubble.Meta time="13:31" userName="ИИ-бот" />
      </Bubble>
    </div>
  ),
};

export const ImageBubble: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <Bubble side={BubbleSide.Outgoing} size={Size.Sm} className="w-[320px]">
        <Bubble.Image
          imageUrls={[messageImageSrc]}
          alt="Пример изображения в bubble"
        />
        <Bubble.Meta time="13:29" userName="Вы" />
      </Bubble>
    </div>
  ),
};

export const FileBubble: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <Bubble side={BubbleSide.Outgoing} size={Size.Sm} className="w-[320px]">
        <Bubble.File fileName="fileName.pdf" fileSize="720 MB" icon={File} />
        <Bubble.Meta time="13:29" userName="Вы" />
      </Bubble>
    </div>
  ),
};

export const MixedThread: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <div className="flex flex-col gap-(--spacing-4)">
        <Bubble side={BubbleSide.Outgoing} size={Size.Md}>
          <Bubble.Text>
            Здравствуйте, не приходит письмо после регистрации.
          </Bubble.Text>
          <Bubble.Meta time="13:29" userName="Вы" />
        </Bubble>

        <Bubble side={BubbleSide.Outgoing}>
          <Bubble.Text>
            Здравствуйте, не приходит письмо после регистрации.
          </Bubble.Text>
          <Bubble.Image
            imageUrls={[messageImageSrc]}
            alt="Изображение в переписке"
          />
          <Bubble.Meta time="13:29" userName="Вы" />
        </Bubble>

        <Bubble side={BubbleSide.Incoming} size={Size.Sm} className="w-[320px]">
          <Bubble.Text>
            Здравствуйте, не приходит письмо после регистрации.
          </Bubble.Text>
          <Bubble.File fileName="fileName.pdf" fileSize="720 MB" icon={File} />
          <Bubble.Meta time="13:29" userName="ИИ-бот" />
        </Bubble>

        <Bubble side={BubbleSide.Outgoing} size={Size.Sm} className="w-[320px]">
          <Bubble.Text>
            Здравствуйте, не приходит письмо после регистрации.
          </Bubble.Text>
          <Bubble.File fileName="fileName.pdf" fileSize="720 MB" icon={File} />
          <Bubble.Meta time="13:29" userName="Вы" />
        </Bubble>

        <Bubble side={BubbleSide.Incoming} size={Size.Sm} className="w-[320px]">
          <Bubble.Image
            imageUrls={Array.from({ length: 12 }, () => messageImageSrc)}
            alt="Отдельное сообщение с изображением"
          />
          <Bubble.Meta time="13:30" userName="ИИ-бот" />
        </Bubble>
      </div>
    </div>
  ),
};
