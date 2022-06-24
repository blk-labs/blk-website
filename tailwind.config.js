/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#011DEB',
        secondary: '#ecc94b',
        tertiary: '#574C73',
        accent: '#8494F8'
      },
    },
  },
  plugins: [],
}
