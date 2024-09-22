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
        site: {
          primary: "#3D2683",
          secondary: "#29B8CE",
          mainGray: "#A39BA8",
        },
        adminPanel: {
          primary: "#43425D",
          secondary: "#3B3B53",
          mainGray: "#F5F6FA",
          mainWhite: "#fcfcfc",
          mainBlue: "#3B86FF",
        },
      },
    },
    fontFamily: {
      source: ["source-sans-pro", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
