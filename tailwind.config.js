/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(26, 100%, 55%)",
          paleOrange: "hsl(25, 100%, 94%)",
        },
        neutral: {
          veryDarkBlue: "hsl(220, 13%, 13%)",
          darkGrayishBlue: "hsl(219, 9%, 45%)",
          grayishBlue: "hsl(220, 14%, 75%)",
          lightGrayishBlue: "hsl(223, 64%, 98%)",
          white: "hsl(0, 0%, 100%)",
          black: "hsla(0, 0%, 0%, 0.75)",
        },
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },

      
    },
  },
  plugins: [],
}