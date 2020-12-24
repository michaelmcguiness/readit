module.exports = {
  purge: ['./src/pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['IBM Plex Sans'],
      },
      colors: {
        blue: {
          100: '#cce4f6',
          200: '#99c9ed',
          300: '#66afe5',
          400: '#3394dc',
          500: '#0079d3',
          600: '#0061a9',
          700: '#00497f',
          800: '#003054',
          900: '#00182a',
        },
      },
      spacing: {
        70: '17.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
