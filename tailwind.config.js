/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#26c2ae",
          900: "#00494d",
        },
        grey: {
          500: "#5e7a7d",
          400: "#7f9c9f",
          200: "#c5e4e7",
          50: "#f4fafa",
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
