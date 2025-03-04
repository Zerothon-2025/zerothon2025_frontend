/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bold: ['PretendardBold', 'sans-serif'],
        medium: ['PretendardMedium', 'sans-serif'],
        light: ['PretendardLight', 'sans-serif'],
        thin: ['PretendardThin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

