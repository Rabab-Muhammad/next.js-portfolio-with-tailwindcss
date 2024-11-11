import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container : {
        center : true,
        padding : "15px",
      },
      colors: {
      accent: "#08e95e"
      },
    },
  },
  plugins: [],
};
export default config;
