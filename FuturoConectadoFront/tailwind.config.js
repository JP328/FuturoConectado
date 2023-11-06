/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        originBlue: "#1B4965",
        originRed: "#A31621",
        originLight: "#F6F6F6",
        originYellow: "#FFC600"
      },
      backgroundImage: {
        breakLineRed: "url('/img/breakLineRed.svg')",
        breakLineBlue: "url('/img/breakLineBlue.svg')",
        loginWallpaper: "url('/img/annie-spratt-QckxruozjRg-unsplash.jpg')"
      }
    }
  },
  plugins: []
}
