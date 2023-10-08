/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        watermelon: "#ff383f",
        carbon: "#656565",
        netral: "#efefef",
        sky: "#caebf2",
        dark: "#0f172a",
      },
      // screens: {
      //   '2xl': '1320px'
      // },
      animation: {
        "spin-slow": "spin 120s linear infinite",
      },
    },
  },
  plugins: [],
};
