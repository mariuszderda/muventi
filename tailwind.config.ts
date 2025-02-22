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
          secondGray: "#D9D9D9",
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
        phudu: ["Phudu", "serif"],
        marydale: ["marydale", "sans-serif"],
        pritzious: ["pritzious", "sans-serif"],
      },
      backgroundImage: {
        "offer-bgi": "url('/images/offer_background.svg')",
      },
    },
    fontFamily: {
      "source-pro": ["source-sans-pro", "sans-serif"],
    },
    boxShadow: {
      "3xl": "13px 19px 25.8px rgba(0, 0, 0, 0.37)",
    },
    listStyleImage: {
      checkmark: "url('/images/offer/checkmark.svg')",
    },
  },
  plugins: [],
};
export default config;
