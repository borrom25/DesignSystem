import React, { useEffect, useRef } from "react";
import type { Preview } from "@storybook/react-vite";
import {
  ScreenProvider,
  ThemeProvider,
  getInitialTheme,
  useTheme,
} from "../src/providers";
import "../src/tokens/index.css";
import "../src/styles/global.css";

const initialTheme = getInitialTheme();

const ThemeWrapper = ({
  children,
  storybookTheme,
}: {
  children: React.ReactNode;
  storybookTheme: "light" | "dark" | undefined;
}) => {
  const { setTheme, theme } = useTheme();
  const isInitialSync = useRef(true);

  useEffect(() => {
    if (
      storybookTheme &&
      (storybookTheme === "light" || storybookTheme === "dark")
    ) {
      if (isInitialSync.current) {
        isInitialSync.current = false;
      } else if (theme !== storybookTheme) {
        setTheme(storybookTheme);
      }
    }
  }, [storybookTheme, setTheme, theme]);

  return <>{children}</>;
};

const StorybookPreviewBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const bg = "var(--background-basic-background-page)";
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.background;
    const prevBody = body.style.background;
    html.style.background = bg;
    body.style.background = bg;
    return () => {
      html.style.background = prevHtml;
      body.style.background = prevBody;
    };
  }, []);

  return <>{children}</>;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    (Story, context) => {
      const storybookTheme =
        (context.globals?.theme as "light" | "dark" | undefined) ||
        initialTheme;

      return (
        <ThemeProvider>
          <ScreenProvider>
            <ThemeWrapper storybookTheme={storybookTheme}>
              <StorybookPreviewBackground>
                <div
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    maxWidth: "100%",
                    minHeight: "100vh",
                    background: "var(--background-basic-background-page)",
                    color: "var(--text-basic-primary)",
                  }}
                >
                  <Story />
                </div>
              </StorybookPreviewBackground>
            </ThemeWrapper>
          </ScreenProvider>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: initialTheme,
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "☀️ Light", icon: "sun" },
          { value: "dark", title: "🌙 Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
