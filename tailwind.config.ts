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
        "asisa-blue": {
          DEFAULT: "#004A97",
          dark: "#00366F",
          light: "#E7F1FA",
        },
        "mora-navy": "#071A2D",
        "mora-gold": "#B69A5C",
        "mora-gold-soft": "#D8C79C",
        surface: {
          white: "#FFFFFF",
          blue: "#EFF6FC",
          "blue-strong": "#E1EEF8",
          soft: "#F5F8FB",
          warm: "#F8F6F1",
        },
        "surface-warm": "#F8F6F1",
        "text-primary": "#102235",
        "text-secondary": "#586878",
        "border-soft": "#DCE4EB",
        "line-blue": "#C9DCEC",
        "line-warm": "#DED4C1",
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
          dark: "#586878",
        },
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "6xl": "72rem",
      },
      fontSize: {
        "display-xl": ["clamp(2.45rem, 5vw, 4.75rem)", { lineHeight: "1.05", fontWeight: "700" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;