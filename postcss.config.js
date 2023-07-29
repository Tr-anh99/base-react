/* eslint-disable prettier/prettier */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssnesting = require('postcss-nesting');

module.exports = {
    plugins: [tailwindcss('./tailwind.config.js'),postcssnesting, autoprefixer],
};