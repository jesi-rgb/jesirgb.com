/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Supreme'],
        mono: ['Recursive'],
        title: ['Whirly Birdie']
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              'letter-spacing': '-3px'
            },
            h2: {
              'letter-spacing': '-2px'
            },
            h3: {
              'letter-spacing': '-2px'
            }
          }
        }
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
          neutral: '#677471',
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('daisyui')
  ]
};

module.exports = config;
