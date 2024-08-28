import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        0.5: ".5px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "motivation-desktop": "url('/forca-foco-fit.jpg')",
        "motivation-mobile": "url('/forca-foco-fit-mobile.jpg')",
      },
      colors: {
        "color-primary": "#0F3E5C",
        "color-secundary": "#68A5CD",
        "color-details": "#00BF63",
      },
    },
  },
  plugins: [],
};
export default config;
