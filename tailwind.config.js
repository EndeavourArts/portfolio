/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'dist/script.js'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors :{
        primary: 'rgb(192 38 211);',
        dark: 'rgb(134 25 143);'
      },
    
    screens: {
      '2xl': '1320px',
    },

    }

  },
  plugins: [],
}
