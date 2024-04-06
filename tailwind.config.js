/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'app-red': '#BB401D',
      'light-gray': '#eaeaea',
      'gray': 'rgb(80 80 80)'
    },
    fontFamily: {
      'termina': ['Termina']
    },
    screens: {
      'xs': '480px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}