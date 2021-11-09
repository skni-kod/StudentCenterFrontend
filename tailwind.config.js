const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false,
  mode: "jit",
  plugins: [],
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
    },
  },
  variants: {
    extend: {},
  },
};
