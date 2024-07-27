/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Rowdies", "sans-serif"],
    },
    extend: {
      height: {
        "screen/90": "90vh",
      },
      width: {
        "screen/90": "90vw",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
