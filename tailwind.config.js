/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        primary: " #560AB5",
        secondary: "#5A5A5A",
        gray_card: "#707070",
        gray_light: "#C0C0C0",
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/svg/hero-pattern.svg')",
        "footer-texture": "url('src/assets/svg/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
