const {
  amber,
  black,
  emerald,
  red,
  sky,
  white,
} = require("tailwindcss/colors");

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [],
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
      gray: {
        50: "#f5f7fb",
        100: "#ebeff6",
        200: "#d7dfee",
        300: "#c2cee5",
        400: "#929fb5",
        500: "#626f84",
        600: "#404d63",
        700: "#313c4e",
        800: "#0c1b2c",
        900: "#061323",
      },
      info: sky,
      success: emerald,
      transparent: "transparent",
      warning: amber,
      white,
    },
    fontFamily: {
      default: ["'Source Sans 3'", ...defaultTheme.fontFamily.sans],
      headline: ["'Source Sans 3'", ...defaultTheme.fontFamily.sans],
      logo: ["Outfit", ...defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono,
      outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
      sans: ["'Source Sans 3'", ...defaultTheme.fontFamily.sans],
      serif: defaultTheme.fontFamily.serif,
      source: ["'Source Sans 3'", ...defaultTheme.fontFamily.sans],
    },
  },
};
