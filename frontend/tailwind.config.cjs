/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C6D92B', // Updated primary color
        'primary-dark': '#B3C425', // Darker shade for hover states
        'secondary': '#2563EB', // Secondary blue color
        'dark': '#111827',
        'darker': '#121212',
        'light': '#F9FAFB',
        'gray-custom': '#6B7280',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px -2px rgba(198, 217, 43, 0.1)', // Updated shadow color
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(198, 217, 43, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(198, 217, 43, 0.05) 1px, transparent 1px)", // Updated grid pattern color
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
    },
  },
  plugins: [],
} 