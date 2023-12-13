/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E1E1E",
          light: "#2E2E2E",
          dark: "#141414",
        },
      },
    },
  },
  plugins: [],
};
