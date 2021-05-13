const tailwindcss = require("tailwindcss")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        decredblue: '#2970FF',
        decredgreen: '#2DD8A3',
        decreddark: '#091440',
        decredyellow: '#FFC84E'
      },
      fontFamily: {
        'decred': ['Source Sans Pro', 'sans-serif']
      },
      zIndex: {
        'negative': '-1',
      },
      inset: {
        '0': '0',
      },
      backgroundImage: theme => ({
        'cables': "url('/img/cables.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


