/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#fff',
      'app-red': '#BB401D',
      'light-gray': '#eaeaea',
      'gray': 'rgb(80 80 80)',
      'gray-700': 'rgb(55 65 81)',
      'gray-950': 'rgb(3 7 18)',
      'black': '#000'
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