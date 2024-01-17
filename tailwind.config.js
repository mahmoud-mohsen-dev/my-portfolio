/** @type {import('tailwindcss').Config} */

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
      gridTemplateColumns: {
        'fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
        'fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'fit-400': 'repeat(auto-fit, minmax(400px, 1fr))',
        'fit-500': 'repeat(auto-fit, minmax(500px, 1fr))',
        'fit-600': 'repeat(auto-fit, minmax(600px, 1fr))',
      },
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
      'md-mob': '375px',
      'lg-mob': '450px',
      'sm-tab': '600px',
      'md-tab': '768px',
      'lg-tab': '875px',
      'sm-des': '1024px',
      'md-des': '1280px',
      'lg-des': '1500px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'md-tab': '4rem',
        'lg-tab': '2rem',
        'md-des': '3rem',
        'lg-des': '5rem',
      },
    },

    plugins: ['prettier-plugin-tailwindcss'],
  },
};
