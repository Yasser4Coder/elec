/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      blue: "#15b3f0",
      blueHover: "#1172a5",
      paragraph: "#cbd5e1",
      white: "#f2f2f2",
      gray: "#f2f2f2",
      black: "#000000",
      Charcoal: "#36454F",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
