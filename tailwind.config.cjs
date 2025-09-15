/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        gray: {
          100: "#f5f5f5",
          300: "#d4d4d4",
          500: "#737373",
          700: "#404040",
          900: "#171717",
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
