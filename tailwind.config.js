const {
  amber,
  black,
  emerald,
  gray,
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
      gray,
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
