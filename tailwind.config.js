/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary : "#fdac5a",
        secondary : "#0390a7",
      }
    },
  },
  plugins: [require("daisyui")],
}

