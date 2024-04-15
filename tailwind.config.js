/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: "'Roboto', sans-serif",
        prompt: "'Prompt', sans-serif"
      },
      
      
    },
  },
  plugins: [require("daisyui")],
}

