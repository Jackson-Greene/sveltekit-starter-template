const postcssNested = require('postcss-nested');
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssNano = require('cssnano');

const config = {
  plugins: [
    postcssNested,
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
    cssNano({
      preset: 'default',
    })
  ]
};

module.exports = config;