import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00494d",
        secondary: "#26c0ab",
        accent: "#5fbbad",
        muted: "#608c94",
        inputBg: "#deebeb",
        inputText: "#627375",
        lightBg: "#f5f8fa",
        button: "#609da5",
        buttonHover: "#afe6dc",
        buttonText: "#285c62",
      },
    },
  },
  plugins: [],
};

export default config;
