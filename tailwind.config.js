/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        buttonShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'hero-back': "url('./assets/back-img.svg')",
      },
      // screens: {
      //   xs: '375px',
      // },
    },
    fontFamily: {
      mochiy: ['"Mochiy Pop One"', 'sans-serif'],
      Paytone: ['"Paytone One"', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      titan: ['"Titan One"', 'sans-serif'],
    },
    colors: {
      primary: '#4675f4',
      secondary: '#f0f8ff',
      'blue-medium': '#80A1F8',
      'blue-light': '#DEE9FE',
      black: '#0E2431',
      white: '#ffffff',
      'red-dark': '#CF5754',
      'red-medium': '#FF5C58',
      'red-light': '#F5DDDD',
      orange: '#FFCF00',
      'gray-dark': '#2E353A',
      'gray-medium': '#5F6366',
    },
    screens: {
      xs: '375px',
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },

    plugins: ['prettier-plugin-tailwindcss'],
  },
};
