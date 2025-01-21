/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 10s infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(0%)" },
          "33%": { transform: "translateX(-100%)" },
          "66%": { transform: "translateX(-200%)" },
        },
      },
    },
  },
  plugins: [],
}

