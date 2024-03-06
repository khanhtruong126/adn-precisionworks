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
      'gray': 'rgb(115 115 115)'
    },
    fontFamily: {
      'termina': ['Termina']
    }
  },
  plugins: [],
}