/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Font families
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],        // Body text
        serif: ['Playfair Display', 'serif'],    // Headings/accents
      },
      // Custom screens/breakpoints
      screens: {
        // Add custom breakpoints while keeping defaults (sm, md, lg, xl, 2xl)
        'xs': '475px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'wide': '1440px',
        'ultra': '1920px',
        
        // Custom ranges
        'sm-only': {'min': '640px', 'max': '767px'},
        'md-only': {'min': '768px', 'max': '1023px'},
        'lg-only': {'min': '1024px', 'max': '1279px'},
        'custom-only': {'min': '1024px', 'max': '1299px'},
        'custom': {'min': '1024px', 'max': '1299px'}, // Added this for your use case
        
        // Max-width queries
        'max-sm': {'max': '639px'},
        'max-md': {'max': '767px'},
        'max-lg': {'max': '1023px'},
        
        // Range queries
        'sm-to-lg': {'min': '640px', 'max': '1023px'},
        'md-to-xl': {'min': '768px', 'max': '1279px'},
        
        // Orientation and special queries
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
        'print': {'raw': 'print'},
        'retina': {'raw': '(min-resolution: 2dppx)'},
      }
    },
  },
  plugins: [],
};