/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#c89b3c", // DawatDesk Golden Amber
          foreground: "#ffffff",
          50: "#fdf8ee",
          100: "#f9eed5",
          200: "#f4dcab",
          300: "#ecc477",
          400: "#e3ab47",
          500: "#c89b3c",
          600: "#b38029",
          700: "#8e6121",
          800: "#744d20",
          900: "#60401f",
        },
        slate: {
          850: "#151c2c",
          950: "#090d16",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgba(200, 155, 60, 0.25)',
        'premium': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.04)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(226, 232, 240, 0.8)',
      }
    },
  },
  plugins: [],
};
