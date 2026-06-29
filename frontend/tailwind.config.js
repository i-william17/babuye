/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        navy: '#002060',
        aluminium: '#E7E6E6',
        white: '#FFFFFF',
        ink: '#002060',
        graphite: '#002060',
        steel: '#002060',
        cloud: '#FFFFFF',
        porcelain: '#FFFFFF',
        line: '#E7E6E6',
      },
      fontFamily: {
        sans: ['"Babuye Sans"', 'Inter', 'Arial', 'sans-serif'],
        display: ['"Babuye Display"', '"Babuye Sans"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0, 32, 96, 0.1)',
        line: 'inset 0 0 0 1px rgba(0, 32, 96, 0.1)',
      },
    },
  },
  plugins: [],
};
