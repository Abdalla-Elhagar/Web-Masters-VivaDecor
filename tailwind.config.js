/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "textColor": "#545454",
        "blackColor": "#1F1F1F",
        'footerText': '#D1D1D1',
      }
    },
    container: {
      center: true,
    },
    
  },
  plugins: [],
}

