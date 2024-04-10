/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico", "cursive"],
      },
    },
    screens: {
      tab:"846px",
      "big-rev": {max: "1200px"},
      "tab-rev": {max: "840px"},
      "desk-rev":{max: "1000px"},
      "semi-mob": {max: "600px"},
      "semi-lg-mob":{max: "800px"},
      "mob": {max: "400px"},
    },
  },

  plugins: [],
};
