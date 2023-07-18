const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      'sans': ['Inter Variable', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

