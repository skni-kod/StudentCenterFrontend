const {
  amber,
  black,
  coolGray,
  green,
  red,
  sky,
  white,
} = require("tailwindcss/colors");

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  mode: "jit",
  plugins: [],
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black,
      brand: {
        50: "#f2f8ff",
        100: "#e6f1ff",
        200: "#bfddff",
        300: "#99c9ff",
        400: "#4da0ff",
        500: "#0077ff",
        600: "#006be6",
        700: "#0059bf",
        800: "#004799",
        900: "#003a7d",
      },
      current: "currentColor",
      error: red,
      gray: coolGray,
      info: sky,
      success: green,
      transparent: "transparent",
      warning: amber,
      white,
    },
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        logo: ["outfit", "sans"],
        outfit: ["outfit"],
      },
    },
  },
};
