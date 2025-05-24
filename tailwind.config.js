/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // These colors will be used as fallbacks when CSS variables aren't supported
        // The actual theming is handled by CSS variables in theme.css
      },
    },
  },
  plugins: [],
  // Enable dark mode but we'll handle it manually with our CSS variables
  darkMode: 'class',
};