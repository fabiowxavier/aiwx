/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './about.html',
    './contact.html',
    './src/**/*.{html,js}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#412b68',
        'light-blue' : '#1ac8db'
      }
    },
  },
  plugins: [],
}

