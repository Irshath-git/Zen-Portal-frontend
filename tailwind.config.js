/** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
