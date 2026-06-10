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
          dark: "#0F1F3D",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C47A",
          dark: "#A8863A",
        },
        trust: {
          DEFAULT: "#25D366",
          light: "#3D9E6E",
          dark: "#1F5C3F",
        },
        gray: {
          light: "#F8F9FA",
          mid: "#9CA3AF",
          dark: "#374151",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;