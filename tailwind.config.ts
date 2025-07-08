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
        primary: "#2B64C8",
        secoundery: "#F8F9FE",
        third: "#182732",
      },
      boxShadow: {
        custom: "0 2px 4px rgb(28 5 77 / 10%), 0 12px 32px rgb(0 0 0 / 5%)",
      },
      backgroundImage: {
        "why-book-with-oggo-bg": "url('/why-book-with-oggo.jpg')",
      },
      // fontFamily: {
      //   "PT Serif": ["PT Serif", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
export default config;
