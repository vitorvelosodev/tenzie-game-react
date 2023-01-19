/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'header': '#2B283A',
        'sub-header': 'rgba(74, 78, 116, 1)'
      },
      boxShadow: {
        'dice-shadow': '0px 5px 3px rgba(0, 0, 0, 0.2)'
      },
      backgroundColor: {
        'outer': 'rgba(11, 36, 52, 1)'
      }
    },
  },
  plugins: [],
}
