module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
