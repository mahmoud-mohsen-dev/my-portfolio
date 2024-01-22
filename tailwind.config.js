/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        buttonShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.25)',
        projectIdleShadow: '0 20px 50px 0 rgba(0,0,0,.45);',
        projectHoverShadow: '0 20px 50px 0 rgba(0,0,0,.65);',
      },
      backgroundImage: {
        'hero-back': "url('./assets/app-images/back-img.svg')",
        'mask-hover': 'linear-gradient(270deg,rgba(35,90,166,.9),rgba(16,27,59,.9))',
      },
      gridTemplateColumns: {
        'fit-150': 'repeat(auto-fit, minmax(150px, 1fr))',
        '1fr-2fr': '1fr 2fr',
      },
      gridTemplateRows: {
        '1fr-2fr': '1fr 2fr',
      },
      transitionTimingFunction: {
        transform: 'cubic-bezier(.694,.048,.335,1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 400ms ease-out 280ms both',
        fadeOut: 'fadeOut 250ms ease-out both',
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
