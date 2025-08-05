/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        spirituel: {
          light: "#EEF2FF",
          DEFAULT: "#6366F1",
          dark: "#4F46E5",
        },
        mystique: "#C7D2FE",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        choral: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};