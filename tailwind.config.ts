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
        // Stripe brand palette
        stripe: {
          indigo: "#635BFF",
          navy: "#0A2540",
          cyan: "#00D4AA",
          blue: "#0073E6",
          slate: "#425466",
          light: "#F6F9FC",
          border: "#E3E8EE",
          "border-light": "#EBEEF1",
        },
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
