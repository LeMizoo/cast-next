/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",       // App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // Tes composants
    "./src/styles/**/*.{js,ts,jsx,tsx}",     // Si tu stylises via fichiers
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        body: ['var(--font-body)', 'serif'],
        title: ['var(--font-title)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}