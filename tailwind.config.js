import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: "JetBrains Mono, system-ui, sans-serif",
        heading: '"Space Grotesk", JetBrains Mono, system-ui, sans-serif',
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // You can also add more like "cupcake", "synthwave"
  },
}

