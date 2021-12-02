const { lightBlue, ...colors } = require("tailwindcss/colors");

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
    extend: {
      colors: {
        ...colors,
        error: {
          dark: colors.red[700],
          DEFAULT: colors.red[600],
          light: colors.red[500],
        },
        info: {
          dark: colors.sky[600],
          DEFAULT: colors.sky[500],
          light: colors.sky[400],
        },
        logo: {
          500: "#42a5f5",
          600: "#2196f3",
          650: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
        },
        primary: colors.blue,
        success: {
          dark: colors.green[600],
          DEFAULT: colors.green[500],
          light: colors.green[400],
        },
        warning: {
          dark: colors.amber[600],
          DEFAULT: colors.amber[500],
          light: colors.amber[400],
        },
      },
      fontFamily: {
        logo: ["outfit", "sans"],
        outfit: ["outfit"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
};
