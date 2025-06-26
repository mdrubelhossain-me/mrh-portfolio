/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea8309",
        secondary: "#201f1f",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
        sevillana: ["Sevillana", "sans-serif"],
      },
    },
  },
  plugins: [],
}

