/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#135bec",
        "background-light": "#f6f6f8",
        "background-dark": "#111722",
        "accent-purple": "#7c3aed",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "2xl": "1rem",
        "full": "9999px"
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(17, 23, 34, 0) 70%)',
      }
    },
  },
  plugins: [],
}