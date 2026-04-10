/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0B3D2E",
          red: "#E63946",
          dark: "#0A0A0A",
          light: "#F5F5F5",
          mist: "#E5ECE9",
          pine: "#124735"
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "'Plus Jakarta Sans'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(11, 61, 46, 0.12)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(11,61,46,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,61,46,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
