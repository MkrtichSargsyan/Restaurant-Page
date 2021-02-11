/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
  ],
};
