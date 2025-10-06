/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FF00BF',
        'dark': '#333447',
        'light': '#F3F3F5',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(180deg, #F3F3F5, #f8f6fb)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,0,191,0.06), rgba(51,52,71,0.03))',
        'gradient-logo': 'linear-gradient(135deg, #FF00BF, #ff5aa8)',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(51,52,71,0.12)',
      }
    },
  },
  plugins: [],
}