import { COLORS_COMBINATION } from "./src/components/colors/Colors";
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-sm": "360px",
        mobile: "640px",
        tablet: "800px",
        "tablet-landscape": "1024px",
        "laptop-sm": "1300px",
        "laptop-lg": "1440px",
        "laptop-xl": "1670px",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        prompt: "var(--font-prompt)",
      },
      fontSize: {},
      backgroundImage: {
        "primary-linear-gradient-main":
          "linear-gradient(90deg, #01BDD5 -13.64%, #417AF7 100%)",
        "primary-linear-gradient-light":
          "linear-gradient(90deg, rgba(1, 189, 213, 0.60) -13.64%, rgba(65, 122, 247, 0.60) 100%)",
        "sidebar-background-color":
          "linear-gradient(180deg, #181C31 31.05%, #000002 100%)",
      },
      colors: COLORS_COMBINATION,
      keyframes: {
        translate1: {
          "0%": { transform: "translate(0deg)" },
          "50%": { transform: "translatex(15px)" },
        },
      },
      boxShadow: {
        dashboard: "0px 0px 30px 0px rgba(0, 188, 212, 0.10)",
        "5xl": " 6px 6px 20px 0 rgba(99, 101, 120, 1)",
        "6xl": "-1px 0px 10px 0 rgba(255,255,255,0.9)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wave: "translate1 2s 3 ease-in-out",
      },
      zIndex: {
        100: "100",
        999: "999",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
