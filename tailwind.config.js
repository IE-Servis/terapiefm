/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#4B6D9A",
        softBlue: "#AFC3D9",
        lightBlueBackground: "#F4F7FA",
        warmAmber: "#D4A373",
        textDark: "#1C1C1C",
        textMuted: "#555555",
        white: "#FFFFFF",
        borderLight: "#E2E8F0"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(28, 28, 28, 0.08)"
      }
    }
  },
  plugins: []
};
