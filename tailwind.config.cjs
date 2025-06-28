/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            100: '#F3D6DB',
            500: '#A31E2B', // Added for focus:ring-primary-500
            600: '#8B1C2C', // Maroon shade for primary-600
            700: '#6B1421', // Darker maroon for hover
            800: '#4B0E19', // Even darker for gradients
          },
          secondary: {
            300: '#FBBF24', // Example secondary color (amber)
            400: '#F59E42', // Example secondary color
          },
          'maroon-900': '#4B0E19', // For custom maroon background
        },
      },
    },
    plugins: [],
  };

