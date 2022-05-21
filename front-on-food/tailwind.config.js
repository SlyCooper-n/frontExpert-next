const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#f5f5f5",
          500: "#503e9d",
          800: "#3f3f3f",
          900: "#182135",
        },
      },
    },
  },
  plugins: [],
};
