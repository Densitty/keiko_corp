/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
