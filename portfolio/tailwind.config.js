/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        slideLeft: 'slideLeft 15s linear infinite'
      }
    }
  },
  plugins: [],
}
