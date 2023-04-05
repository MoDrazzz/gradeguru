/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: colors.slate[800],
        primary: colors.blue[500],
      },
    },
  },
  plugins: [],
};
