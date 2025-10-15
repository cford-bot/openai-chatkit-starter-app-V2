import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    icon: "write",
    label: "Build a narrative from scratch",
    prompt: "Help me build a narrative from scratch"
  },
  {
    icon: "bolt",
    label: "Improve my existing narrative",
    prompt: "Help me improve my existing narrative"
  },
  {
    icon: "document",
    label: "Build a billing statement",
    prompt: "Help me build a billing statement"
  }
];

export const PLACEHOLDER_INPUT = "Enter your narrative here. Do not input any PHI";
export const GREETING = "Welcome to ClearChart";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  colorScheme: 'light',
  radius: 'round',
  density: 'compact',
  color: {
    accent: {
      primary: '#eceee1',
      level: 1
    },
    surface: {
      background: '#C0BEBE',
      foreground: '#ECEEE1'
    },
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    }
  },
  typography: {
    baseSize: 15,
    fontFamily: 'Inter, sans-serif',
    fontSources: [
      {
        family: 'Inter',
        src: 'https://rsms.me/inter/font-files/Inter-Regular.woff2',
        weight: 400,
        style: 'normal'
      }
    ]
  }
});
