module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'bgblack': '#1F2022',
      'primary': '#5a67d8',
      'secondary': '#4a5568'
    }),
    fontFamily: {
      'roboto': ["Roboto"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
