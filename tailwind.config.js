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
      fontSize: {
        bold: '24px',  
        medium: '18px',  
        light: '16px', 
        thin: '14px',  
      },
    },
  },
  plugins: [],
}

