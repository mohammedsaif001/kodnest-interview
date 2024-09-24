import { COLORS_COMBINATION } from "./src/components/colors/Colors";
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-linear-gradient-main":
          "linear-gradient(90deg, #01BDD5 -13.64%, #417AF7 100%)",
        "primary-linear-gradient-light":
          "linear-gradient(90deg, rgba(1, 189, 213, 0.60) -13.64%, rgba(65, 122, 247, 0.60) 100%)",
      },
      colors: COLORS_COMBINATION,
    },
  },
  plugins: [],
};
export default config;
