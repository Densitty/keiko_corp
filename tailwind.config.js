/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "gray-1": "#dadce0",
        "gray-2": "#f8f9fa",
        "gray-3": "#80868b",
        "blue-1": "#1967d2",
        "blue-2": "#4285f4",
        "green-1": "#137333",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        gray: "0 1px 3px 0 rgba(60,64,67,0.3)",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
