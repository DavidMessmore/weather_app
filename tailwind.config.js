/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clear: "#faaa5b",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
