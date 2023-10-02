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
    themes: [
      {
        jesi: {
          primary: '#a7f3d0',

          secondary: '#a78bfa',

          accent: '#fef9c3',

          neutral: '#a7f3d0',

          'base-100': '#021713',

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
