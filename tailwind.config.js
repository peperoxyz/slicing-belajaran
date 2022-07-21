/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        bljyellow: "#F0E714",
        bljdark: "#0F1C26",
        bljwhite: "F1F1F1",
      },
      spacing: {
        76: "18rem",
        128: "32rem",
        144: "36rem",
        256: "64rem",
        512: "128rem",
      },
    },
  },
  plugins: [],
};
