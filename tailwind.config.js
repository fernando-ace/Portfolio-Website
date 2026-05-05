/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#05070d",
        surface: "#0d1220",
        card: "#11182a",
        line: "#202a42",
        accent: "#5eead4",
        "accent-soft": "#12373a",
        text: "#e8edf9",
        muted: "#97a3bf"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(5, 10, 25, 0.32)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"]
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms ease forwards"
      }
    }
  },
  plugins: []
};
