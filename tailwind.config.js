module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      flexGrow: {
        0.5: 0.5,
        0.25: 0.25,
      },
      fontFamily: {
        Abril: ['Abril Fatface', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        olden: ['Oldenburg', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
