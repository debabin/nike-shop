/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        nike: ['Nike', 'sans-serif'],
        sono: ['Sono', 'sans-serif']
      },
      colors: {
        white: '#fff',
        secondary: '#ccc',
        primary: '#111',
        grey: '#757575',
        greyLight: '#e5e5e5'
      }
    }
  },
  plugins: []
};
