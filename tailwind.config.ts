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
        navy: {
          DEFAULT: "#1B2D4F",
          light: "#2A3F6F",
          dark: "#0F1E35",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C47A",
          dark: "#A8863A",
        },
        trust: {
          DEFAULT: "#2E7D57",
          light: "#3D9E6E",
          dark: "#1F5C3F",
        },
        gray: {
          light: "#F4F5F7",
          mid: "#9CA3AF",
          dark: "#374151",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;