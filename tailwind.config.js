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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
