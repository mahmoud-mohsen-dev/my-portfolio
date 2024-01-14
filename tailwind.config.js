/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      mochiy: ['"Mochiy Pop One"', 'sans-serif'],
      Paytone: ['"Paytone One"', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      titan: ['"Titan One"', 'sans-serif'],
    },
    colors: {
      primary: '#4675F4',
      secondary: '#F0F8FF',
      'blue-medium': '#80A1F8',
      'blue-light': '#DEE9FE',
      black: '#0E2431',
      white: '#ffffff',
      'red-dark': '#CF5754',
      'red-medium': '#FF5C58',
      'red-light': '#F5DDDD',
      orange: '#FFCF00',
      'gray-dark': '#2E353A',
      'gray-medium': '5F6366',
    },
  },
  plugins: [],
};
