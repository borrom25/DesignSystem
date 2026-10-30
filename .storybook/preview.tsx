import type { Preview } from "@storybook/react-vite";
import React, { useEffect } from "react";
import {
  ScreenProvider,
  ThemeProvider,
  getInitialTheme,
  useTheme,
  LanguageProvider,
} from "../src/providers";
import "../src/styles/global.css";
import "../src/tokens/index.css";

const initialTheme = getInitialTheme();

const ThemeWrapper = ({
  children,
  storybookTheme,
}: {
  children: React.ReactNode;
  storybookTheme: "light" | "dark" | undefined;
}) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (storybookTheme === "light" || storybookTheme === "dark") {
      setTheme(storybookTheme);
    }
  }, [storybookTheme, setTheme]);

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
          <LanguageProvider>
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
          </LanguageProvider>
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
