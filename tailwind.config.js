/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        subscription: ["Urbanist", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        space : ["Space Grotesk", "sans-serif"],
      },
      
      screens: {
        special: "2150px",
        pro: "1024px",
      },
    },

    animations: {
      "animate-spin": "animation: spin 1s linear infinite",
      "animate-ping": "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      "animate-bounce": "animation: bounceX 1s infinite",
    },
  },
  plugins: [],
};
