/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // Default Tailwind breakpoints (you can override these)
      'sm': '640px',   // Small devices (landscape phones, 640px and up)
      'md': '768px',   // Medium devices (tablets, 768px and up)
      'lg': '1024px',  // Large devices (desktops, 1024px and up)
      'xl': '1280px',  // Extra large devices (large desktops, 1280px and up)
      '2xl': '1536px', // 2X Extra large devices (larger desktops, 1536px and up)
      
      // CUSTOM BREAKPOINTS - You can set your own
      'xs': '475px',     // Extra small devices
      'tablet': '640px', // Custom tablet breakpoint
      'laptop': '1024px', // Custom laptop breakpoint
      'desktop': '1280px', // Custom desktop breakpoint
      'wide': '1440px',   // Wide screens
      'ultra': '1920px',  // Ultra wide screens
      
      // Mobile-first approach (min-width)
      'mobile': '320px',
      'phablet': '550px',
      'small-tablet': '768px',
      'large-tablet': '1024px',
      
      // You can also use max-width queries
      'max-sm': {'max': '639px'},     // Up to small
      'max-md': {'max': '767px'},     // Up to medium
      'max-lg': {'max': '1023px'},    // Up to large
      
      // Range queries (between two sizes)
      'sm-to-lg': {'min': '640px', 'max': '1023px'},
      'md-to-xl': {'min': '768px', 'max': '1279px'},
      
      // Portrait and landscape orientations
      'portrait': {'raw': '(orientation: portrait)'},
      'landscape': {'raw': '(orientation: landscape)'},
      
      // Print media
      'print': {'raw': 'print'},
      
      // High DPI screens
      'retina': {'raw': '(min-resolution: 2dppx)'},
    },
    extend: {
      // You can also extend the default breakpoints instead of overriding
      // This keeps the default ones and adds your custom ones
    }
  },
  plugins: [],
}

// ALTERNATIVE: Extending default breakpoints (recommended approach)
// This keeps sm, md, lg, xl, 2xl and adds your custom ones

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Add custom breakpoints while keeping defaults
        'xs': '475px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'wide': '1440px',
        
        // Custom ranges
        'sm-only': {'min': '640px', 'max': '767px'},
        'md-only': {'min': '768px', 'max': '1023px'},
        'lg-only': {'min': '1024px', 'max': '1279px'},
      }
    },
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],        // Body text
        serif: ['Playfair Display', 'serif'],    // Headings/accents
      },
    },
  },
};