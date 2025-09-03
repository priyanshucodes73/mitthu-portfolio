/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2fff9",
          100: "#d4ffe8",
          200: "#a9ffd2",
          300: "#6fffb6",
          400: "#33f59a",
          500: "#10dd83",
          600: "#06b26c",
          700: "#068c59",
          800: "#096d49",
          900: "#0b5a3f",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      animation: {
        "gradient-shift": "gradient 15s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
