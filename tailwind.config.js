/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        advaithTheme: {
          "primary": "#4F46E5",    /* indigo-600 */
          "secondary": "#EC4899",  /* pink-500 */
          "accent": "#10B981",     /* emerald-500 */
          "neutral": "#111827",    /* gray-900 */
          "base-100": "#FFFFFF",
          "info": "#38BDF8",
          "success": "#22C55E",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
      "corporate",
      "dark"
    ]
  }
}
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // include your chosen themes
  },
}