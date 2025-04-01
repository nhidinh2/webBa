/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#10B981', // NetCorp emerald green
        'primary-dark': '#059669', // Darker shade for hover states
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
        'custom': '0 4px 20px -2px rgba(16, 185, 129, 0.1)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
    },
  },
  plugins: [],
} 