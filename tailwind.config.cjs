/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Supreme'],
        mono: ['Recursive']
      }
    }
  },

  daisyui: {
    logs: false,
    themes: [
      {
        jesi: {
          primary: '#a7f3d0',
          'primary-focus': '#73E0B4',
          'primary-content': '#021714',
          secondary: '#a78bfa',
          accent: '#fef9c3',
          neutral: '#a7f3d0',
          'base-100': '#021713',
          'base-200': '#001410',
          'base-300': '#010D0B',
          'base-content': '#fff',
          info: '#3abff8',
          success: '#4ade80',
          warning: '#fbbd23',
          error: '#f87272'
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
