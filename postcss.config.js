/* eslint-disable global-require */

const tailwindcss = require ('tailwindcss')('./tailwind.config.js')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
