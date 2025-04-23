/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0F52BA', // Primary blue
        },
        green: {
          500: '#00A86B', // Secondary green
        },
        gold: {
          400: '#FFD700', // Accent gold
        }
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'growUp': 'growUp 0.5s ease-out',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};