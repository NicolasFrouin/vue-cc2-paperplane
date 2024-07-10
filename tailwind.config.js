/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f9f0ff',
          200: '#f0d6ff',
          300: '#e4b8ff',
          400: '#d29bff',
          500: '#b47ae8',
          600: '#8a0e99',
          700: '#6c0277',
          800: '#4f015c',
          900: '#3f0147',
        },
      },
    },
  },
  plugins: [],
};
