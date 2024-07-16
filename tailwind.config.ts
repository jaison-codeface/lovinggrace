import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED2500",
        secondary: "#521575",
        tertiary: "#383838",
        "off-white": "#F0F0F0",
      },
      fontFamily: {
        manrope: "var(--font--manrope)",
        asap: "var(--font--asap)",
      },
    },
  },
  plugins: [],
};
export default config;
