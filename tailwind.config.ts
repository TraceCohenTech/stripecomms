import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        muted: "#6b6b6b",
        subtle: "#999",
        divider: "#e5e5e5",
        surface: "#fafaf9",
        card: "#f5f5f4",
        accent: "#635bff",
        "accent-soft": "rgba(99, 91, 255, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        editorial: ["Newsreader", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
