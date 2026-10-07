/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0ea5e9", // Cyan (Logo primary)
          primaryHover: "#0284c7",
          secondary: "#4f46e5", // Indigo
          secondaryHover: "#4338ca",
          accent: "#f97316", // Coral Orange
          dark: "#070b14", // Base background
          darkNavy: "#0b1120",
          card: "rgba(255, 255, 255, 0.04)",
          cardHover: "rgba(255, 255, 255, 0.07)",
          border: "rgba(255, 255, 255, 0.1)",
          borderHover: "rgba(14, 165, 233, 0.4)",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(14, 165, 233, 0.4)",
        glowSecondary: "0 0 25px -5px rgba(79, 70, 229, 0.4)",
        glowAccent: "0 0 25px -5px rgba(249, 115, 22, 0.4)",
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
