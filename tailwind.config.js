/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extends: {
      backgroundImage: {
        'section1-image': "url('./components/img/tiomothy-swope.jpg')"
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#641ae6',

          secondary: '#d926a9',

          accent: '#1fb2a6',

          neutral: '#2a323c',

          'base-100': '#FFCAEA',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272'
        },
        fontFamily: {
          sans: ['Open Sans', 'system-ui', 'sans-serif']
        }
      }
    ]
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')]
}
