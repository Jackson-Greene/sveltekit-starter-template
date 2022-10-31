const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");
const aspectRatio = require("@tailwindcss/aspect-ratio");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },

  plugins: [forms, lineClamp, aspectRatio]
};

module.exports = config;