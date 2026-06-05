import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Development goal planning",
    prompt: "I need help articulating a development goal",
    icon: "arrow",
  },
  {
    label: "I want to learn about Site Speed",
    prompt: "I want to learn about Site Speed",
    icon: "search",
  },
  {
    label: "Where can I learn about meta data",
    prompt: "Where can I learn about meta data",
    icon: "search",
  },
];

export const PLACEHOLDER_INPUT = "Where would you like to start?";

export const GREETING = "These are the things I can help you with";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
