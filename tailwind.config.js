/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontSize: {
      sm: "0.8125rem",
      base: "0.9375rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "32px",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        red: "#FC4747",
        "dark-blue": "#10141E",
        "greyish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
      },
    },
  },
  plugins: [],
};
