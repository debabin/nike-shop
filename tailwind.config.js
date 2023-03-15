/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        secondary: '#ccc',
        primary: '#111',
        grey: '#757575'
      }
    }
  },
  plugins: []
};
