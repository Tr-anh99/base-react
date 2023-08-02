/* eslint-disable prettier/prettier */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssnesting = require('postcss-nesting');
const postcss100vhFix = require('postcss-100vh-fix');

module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), postcssnesting, postcss100vhFix, autoprefixer],
};
