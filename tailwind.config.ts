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
          p1: "#43425D",
          p2: "#3B3B53",
          p3: "#F5F6FA",
          p4: "#fcfcfc",
          p5: "#3B86FF",
        },
      },
      screens: {
        main: "1440px",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
    },
    fontFamily: {
      "source-pro": ["source-sans-pro", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
