const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "100px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("flowbite/plugin")],
};
