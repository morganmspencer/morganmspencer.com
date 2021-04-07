const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      dark: '#22223B',
      navy: '#4A4E69',
      lavender: '#9A8C98',
      tan: '#C9ADA7',
      light: '#F2E9E4',
    },
    fontFamily: {
      body: ['"Futura PT"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      margin: {
        '-wrap': '-5.62vw',
        'wrap': '5.62vw',
      },
      padding: {
        'wrap': '5.62vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
