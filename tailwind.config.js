/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
       
      },
      container: {
     center: true,
     padding:{
       DEFAULT: "1rem",
       sm: "1rem",
     }
      }
    },
  },
  plugins: [],
}

