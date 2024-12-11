/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#171F21',
      'mid-blue': '#192122',
      'beach-blue': '#1ED2FF',
      'mid-dark-blue': '#273D43',
      'cyan': '#00EDFB',
      'white': '#ffffff',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      josefin: ['Josefin Sans', 'sans-serif'],
    }
  },
  plugins: [],
}