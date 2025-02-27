/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mokoto': ['"Mokoto Glitch1"', 'sans-serif'],
        'glacial': ['"Glacial Indifference"', 'sans-serif'],
        'cinzel': ['Cinzel', 'serif'],
      },
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          950: '#24190f',
        },
      },
      backgroundImage: {
        'circuit-pattern': "url('https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      },
    },
  },
  plugins: [],
};