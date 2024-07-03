/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'. media is default since v3
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [
      // Iconify plugin
      addDynamicIconSelectors(),
    ],
}

