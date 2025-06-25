/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 enable dark mode using class strategy
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
